using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using cryptovip.Models;
using crytopVipDb.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace cryptovip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DBContext _context;
        private readonly IConfiguration _configuration;
        private readonly AppData _appData;
        private readonly ResponseModel _responseModel;

        public UserController(DBContext context, ResponseModel responseModel, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
            _responseModel = responseModel;
            _appData = _configuration.GetSection("AppData").Get<AppData>();
        }

        [HttpGet("get")]
        public ActionResult Test()
        {
            return Ok("test successful");
        }

        [HttpPost("post")]
        public ActionResult Post(UserModel user)
        {
            return Ok(user);
        }

        [HttpPost("signup")]
        public ActionResult CreateUser(UserModel user)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    UserProfileModel userProfile = Util.Signup(user, _context);
                    _responseModel.Value = userProfile;
                    Util.VerifyEmail(user.Email, _context);
                    //Util.sendEmail(user.Email, "Welcome To Crypto Vault Investment Platform Platform",
                    // "<html><head><style> a { background-color: red; color: white; padding: 1em 1.5em; text-decoration: none; text-transform: uppercase; } a:hover {background-color: #555;} a:active {background-color: black; a:visited { background - color: #ccc;}</style></head>" +
                    // $"<body><p>Hello {user.FirstName},</p> <p>We are glad to have you onboard.</p> <br/>" +
                    // $"<p><a href='{_configuration["BaseUrl"]}/user/verifyemail?token={GetMailVerificationToken(user)}'>Click here to verify your email.</a></p>" +
                    // $"</body></html>",
                    // true,null,null, _configuration["Smtp:From"], _configuration["Smtp:Username"],
                    // _configuration["Smtp:Password"], _configuration["Smtp:Server"], Convert.ToInt32(_configuration["Smtp:Port"]), true, _configuration["Smtp:Name"]);

                }
                catch (Exception ex)
                {
                    _responseModel.Error = ex.Message;
                    _responseModel.Value = ex;
                }
            }
            else
            {
                return BadRequest();
            }
            return Ok(_responseModel);
        }

        [HttpPost("login")]
        public ActionResult Login(UserModel user)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    UserProfileModel userProfile = Authenticate(user);
                    _responseModel.Value = userProfile;
                    if (_responseModel.Value == null)
                    {
                        _responseModel.Error = "Login failed! Email or password is not correct";
                    }
                }
                catch (Exception ex)
                {
                    _responseModel.Error = ex.Message;
                    _responseModel.Value = ex;
                }
            }
            return Ok(_responseModel);
        }

        [HttpPost("profile")]
        public ActionResult UpdateProfile(UserProfileModel user)
        {
            return Ok();
        }

        [HttpDelete]
        public ActionResult DeleteUser(string userName)
        {
            return Ok();
        }

        [HttpGet]
        public ActionResult GetUser(string userName, string password)
        {
            return Ok();
        }

        [HttpPost("sendmessage")]
        public ActionResult SebdMessage(dynamic @message)
        {
            try
            {
                //_responseModel.Value = userProfile;
                Util.sendEmail("support@cryptovip.org", $"Contact Us Message from {message.name}",
                  @$"<html><head><style></style></head>
                        <body>
                            <p>Name: {message.name}</p>
                            <p>E-mail: {message.email},</p> 
                            <p>Hear about us: {message.hearaboutus},</p> 
                            <p>Message: {message.message},</p> 
                        </body>
                    </html>",
                 true, null, null, _configuration["Smtp:From"], _configuration["Smtp:Username"],
                 _configuration["Smtp:Password"], _configuration["Smtp:Server"], Convert.ToInt32(_configuration["Smtp:Port"]), true, _configuration["Smtp:Name"]);
                _responseModel.Value = "Ok";

            }
            catch (Exception ex)
            {
                _responseModel.Error = ex.Message;
                _responseModel.Value = ex;
            }
            return Ok(_responseModel);
        }

        [HttpGet("verifyemail")]
        public IActionResult VerifyEmail(string token)
        {
            string email = "";
            try
            {
                email = ValidateEmailToken(token).FindFirstValue("username");
                Util.VerifyEmail(email, _context);
                return base.Redirect($"https://cryptovip.org/login?verified?{email}");
            }
            catch
            {
                return base.Redirect($"https://cryptovip.org/login?failed?{email}");
            }
        }

        private UserProfileModel Authenticate(UserModel user)
        {
            User _user = Util.Signin(user, _context);
            UserProfileModel profile = null;

            if (_user != null)
            {
                JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
                byte[] authKey = Encoding.ASCII.GetBytes(_appData.AuthKey);

                SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[] {
                        new Claim("username", _user.UserName),
                        new Claim("enbaled", _user.UserProfile.Enabled.ToString()),
                        new Claim("xrtui", _user.IsAdmin.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddMinutes(500),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(authKey), SecurityAlgorithms.HmacSha256Signature)
                };

                profile = (UserProfileModel)_user.UserProfile;
                profile.xrtui = _user.IsAdmin;
                profile.Token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
            }
            return profile;
        }

        private string GetMailVerificationToken(UserModel _user)
        {
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            byte[] authKey = Encoding.ASCII.GetBytes(_appData.AuthKey);

            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] {
                        new Claim("username", _user.Email),
                        new Claim("tokentype", nameof(_user.Email)),
                        new Claim("enabled", "false")
                    }),
                Issuer = "cryptovip",
                Audience = "cryptomember",
                Expires = DateTime.UtcNow.AddMinutes(500),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(authKey), SecurityAlgorithms.HmacSha256Signature)
            };

            return tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
        }

        private ClaimsPrincipal ValidateEmailToken(string jwtToken)
        {
            TokenValidationParameters validationParameters = new TokenValidationParameters();

            validationParameters.ValidateLifetime = true;
            validationParameters.ValidAudience = "cryptomember";
            validationParameters.ValidIssuer = "cryptovip";
            validationParameters.IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appData.AuthKey));

            ClaimsPrincipal principal = new JwtSecurityTokenHandler().ValidateToken(jwtToken, validationParameters, out _);


            return principal;
        }
    }
}
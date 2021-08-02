using crytopVipDb.Entities;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace cryptovip.Models
{
    public class AuthenticateService : IAuthenticateService
    {
        private readonly DBContext _dBcontext;
        private readonly AppData _appData;

        public AuthenticateService(DBContext dBContext, AppData appData)
        {
            _dBcontext = dBContext;
            _appData = appData;
        }

        public AuthenticateService() { }

        public UserProfileModel Authenticate(UserModel user)
        {
            User _user = Util.Signin(user, _dBcontext);
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
    }
}

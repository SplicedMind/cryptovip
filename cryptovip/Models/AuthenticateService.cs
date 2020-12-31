using crytopVipDb;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

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

        public UserProfileModel Authenticate(UserModel user)
        {
            UserProfileModel _user = Util.Signin(user, _dBcontext);

            if(_user != null)
            {
                JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
                byte[] authKey = Encoding.ASCII.GetBytes(_appData.AuthKey);

                SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[] {
                        new Claim("username", _user.UserName),
                        new Claim("enbaled", _user.Enabled.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddMinutes(500),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(authKey), SecurityAlgorithms.HmacSha256Signature)
                };

                _user.Token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
            }
            return _user;
        }
    }
}

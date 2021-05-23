using crytopVipDb.Entities;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Text;

namespace cryptovip.Models
{
    public class UserModel
    {
        public long Id { get; internal set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ReferralUserName { get; set; }

        internal string GetPassword()
        {
            byte[] salt = Encoding.ASCII.GetBytes($"#*{Password}*@*{Email}#");

            return Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: Password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));
        }

        public static implicit operator User(UserModel model)
        {
            if (model != null)
            {
                return new User
                {
                    UserName = model.Email,
                    Password = model.GetPassword(),
                    UserProfile = new UserProfile
                    {
                        UserName = model.Email,
                        FirstName = model.FirstName,
                        LastName = model.LastName,
                        ReferralUserName = model.ReferralUserName
                    }
                };
            }
            return null;
        }
    }
}

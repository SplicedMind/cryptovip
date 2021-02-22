using crytopVipDb.Entities;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace cryptovip.Models
{
    public class UserModel
    {
        public long Id { get; internal set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        internal string GetPassword()
        {
            byte[] salt = Encoding.ASCII.GetBytes($"#*{Password}*@*{Email}#");
           
            // derive a 256-bit subkey (use HMACSHA1 with 10,000 iterations)
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
                        LastName = model.LastName
                    }
                };
            }
            return null;
        }
    }
}

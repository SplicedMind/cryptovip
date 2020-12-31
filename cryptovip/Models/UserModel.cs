using crytopVipDb.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cryptovip.Models
{
    public class UserModel
    {
        public long Id { get; internal set; }
        public string UserName { get; set; }
        public string Password { get; set; }
              
        public static implicit operator User(UserModel model)
        {
            if (model != null)
            {
                return new User
                {
                    UserName = model.UserName,
                    Password = model.Password,
                    UserProfile = new UserProfile
                    {
                        UserName = model.UserName
                    }
                };
            }
            return null;
        }
    }
}

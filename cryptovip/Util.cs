using cryptovip.Models;
using crytopVipDb;
using crytopVipDb.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cryptovip
{
    public static class Util
    {
        public static UserProfileModel Signin(UserModel user, DBContext dBContext)
        {
            User _user = dBContext.Users.Where(x => x.UserName == user.UserName && x.Password == user.Password)
                .Include(x => x.UserProfile).FirstOrDefault();
            if(_user != null)
            {
                return (UserProfileModel)_user.UserProfile;
            }
            return null;
        }

        public static UserProfileModel Signup(UserModel user, DBContext dBContext)
        {
            dBContext.Users.Add(user);
            dBContext.SaveChanges();
            return (UserProfileModel)dBContext.UserProfiles.Where(x => x.UserName == user.UserName).FirstOrDefault();
        }
    }
}

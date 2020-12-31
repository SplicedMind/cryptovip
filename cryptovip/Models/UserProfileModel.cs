using crytopVipDb.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cryptovip.Models
{
    public class UserProfileModel
    {
        public long Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string VIPAccountNumber { get; set; }
        public byte[] ProfileImage { get; set; }
        public string UserName { get; set; }
        public bool Enabled { get; set; }
        public string Token { get; set; }
                
        public static explicit operator UserProfileModel(UserProfile _)
        {
            if(_ != null)
            {
                return new UserProfileModel
                {
                    DateOfBirth = _.DateOfBirth,
                    Enabled = _.Enabled,
                    FirstName = _.FirstName,
                    Id = _.Id,
                    LastName = _.LastName,
                    MiddleName = _.MiddleName,
                    ProfileImage = _.ProfileImage,
                    UserName = _.UserName,
                    VIPAccountNumber = _.VIPAccountNumber,
                };
            }
            return null;
        }
    }
}

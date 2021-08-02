using System;
using crytopVipDb.Entities;

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
        public string UserName { get; set; }
        public string Phone { get; set; }
        public string HomeAddress { get; set; }
        public string ReferralUserName { get; set; }
        public bool Enabled { get; set; }
        public bool xrtui { get; set; }
        public string Token { get; set; }
                
        public static explicit operator UserProfileModel(UserProfile _)
        {
            if(_ != null)
            {
                return new UserProfileModel
                {
                    DateOfBirth = _.DateOfBirth.Date,
                    Enabled = _.Enabled,
                    FirstName = _.FirstName,
                    Id = _.ID,
                    LastName = _.LastName,
                    MiddleName = _.MiddleName,
                    UserName = _.UserName,
                    VIPAccountNumber = _.VIPAccountNumber,
                    HomeAddress = _.Address,
                    Phone = _.Phone,
                    
                };
            }
            return null;
        }
    }
}

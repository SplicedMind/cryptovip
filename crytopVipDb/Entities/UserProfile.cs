using System;
using System.Collections.Generic;
using System.Text;

namespace crytopVipDb.Entities
{
    public class UserProfile
    {
        public long Id { get; set; }
        public string LastName { get; set; }
        public string  FirstName { get; set; }
        public string MiddleName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string VIPAccountNumber { get; set; }
        public byte[] ProfileImage { get; set; }
        public string UserName { get; set; }
        public User User { get; set; }
        public bool Enabled { get; set; }
    }
}

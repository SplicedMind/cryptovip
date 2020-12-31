using System;
using System.Collections.Generic;
using System.Text;

namespace crytopVipDb.Entities
{
    public class User
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }

        public UserProfile UserProfile { get; set; }
        public IList<UserSecurityQuestionAnswer> UserSecurityQuestionAnswers { get; set; }
    }
}

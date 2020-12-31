using System;
using System.Collections.Generic;
using System.Text;

namespace crytopVipDb.Entities
{
    public class UserSecurityQuestionAnswer
    {
        public long Id { get; set; }
        public string Answer { get; set; }

        public long SecurityQuestionId { get; set; }
        public SecurityQuestion SecurityQuestion { get; set; }
        public string UserName { get; set; }
        public User User { get; set; }
    }
}

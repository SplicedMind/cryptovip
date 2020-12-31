using System;
using System.Collections.Generic;
using System.Text;

namespace crytopVipDb.Entities
{
    public class SecurityQuestion
    {
        public long Id { get; set; }
        public string Question { get; set; }

        public IList<UserSecurityQuestionAnswer> UserSecurityQuestionAnswers { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace crytopVipDb.Entities
{
    public class UserSecurityQuestionAnswer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [MaxLength(100)]
        public string Answer { get; set; }

        public long SecurityQuestionId { get; set; }
        public SecurityQuestion SecurityQuestion { get; set; }
        [MaxLength(50)]
        public string UserName { get; set; }
        public User User { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace crytopVipDb.Entities
{
    public class SecurityQuestion
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public byte ID { get; set; }

        [MaxLength(500)]
        public string Question { get; set; }

        public IList<UserSecurityQuestionAnswer> UserSecurityQuestionAnswers { get; set; }

    }
}

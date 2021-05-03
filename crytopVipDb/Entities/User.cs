using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace crytopVipDb.Entities
{
    public class User
    {
        [Key]
        [Required]
        [MaxLength(320)]
        [DataType(DataType.Text)]
        public string UserName { get; set; }

        [Required]
        [MaxLength(500)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public UserProfile UserProfile { get; set; }

        public IList<UserSecurityQuestionAnswer> UserSecurityQuestionAnswers { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Index = Microsoft.EntityFrameworkCore.Metadata.Internal.Index;

namespace crytopVipDb.Entities
{
    //[Index("UserName", IsUnique =true)]
    public class User
    {
        //[Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //public long Id { get; set; }
        
        [Key]
        [Required]
        [MaxLength(50)]
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

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace crytopVipDb.Entities
{
    public class UserProfile
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }

        [Required]
        [MaxLength(100)]
        public string  FirstName { get; set; }

        [MaxLength(100)]
        public string MiddleName { get; set; }
        public DateTime DateOfBirth { get; set; }

        [MaxLength(100)]
        public string VIPAccountNumber { get; set; }        

        public byte[] ProfileImage { get; set; }
        public bool Enabled { get; set; }

        [MaxLength(50)]
        public string ReferralUserName { get; set; }

        [MaxLength(50)]
        public string UserName { get; set; }

        [ForeignKey("UserName")]
        public User User { get; set; }
    }
}

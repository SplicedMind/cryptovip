using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace crytopVipDb.Entities
{
    [Index(nameof(VIPAccountNumber), IsUnique = true, Name = nameof(VIPAccountNumber))]
    public class UserProfile
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }

        [Required]
        [MaxLength(100)]
        public string  FirstName { get; set; }

        [MaxLength(100)]
        public string MiddleName { get; set; }

        public DateTime DateOfBirth { get; set; }

        [MaxLength(20)]
        public string VIPAccountNumber { get; set; }        

        public bool Enabled { get; set; }

        [MaxLength(320)]
        [ForeignKey("UserName")]
        public string ReferralUserName { get; set; }

        [MaxLength(320)]        
        public string UserName { get; set; }

        [ForeignKey("UserName")]
        public User User { get; set; }
    }
}

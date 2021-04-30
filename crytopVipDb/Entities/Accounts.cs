using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace crytopVipDb.Entities
{
    [Index(new string[] { nameof(AccountNumber), nameof(Currency) }, IsUnique = true, Name = nameof(AccountNumber)+"_"+nameof(Currency))]
    public class Accounts
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ID { get; set; }

        [MaxLength(20)]
        [ForeignKey("VIPAccountNumber")]
        public string AccountNumber { get; set; }

        public UserProfile UserProfile { get; set; }

        [MaxLength(20)]
        [ForeignKey("Currency")]
        public string Currency { get; set; }

        public PaymentOptions PaymentOption { get; set; }

        [MaxLength(100)]
        public string ReceivingAddress { get; set; }
    }
}

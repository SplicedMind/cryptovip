using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace crytopVipDb.Entities
{
    //[Index("AccountNumber", IsUnique = false, Name = nameof(AccountNumber))]
    [Index(nameof(Status), IsUnique = false, Name = nameof(Status))]
    public class Transaction
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

        public PaymentOption PaymentOption { get; set; }

        public DateTime Created { get; set; }

        public DateTime Approved { get; set; }

        public decimal Debit { get; set; }

        public decimal Credit { get; set; }

        public decimal Fee { get; set; }

        public PaymentStatus Status { get; set; }
    }
}

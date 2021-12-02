using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace crytopVipDb.Entities
{
    [Index(new string[] { nameof(Address) }, IsUnique = false, Name = nameof(Address) + "_Index")]
    [Index(new string[] { nameof(Currency) }, IsUnique = false, Name = nameof(Currency) + "_Index")]
    public class PaymentNotification
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ID { get; set; }
        public string Currency { get; set; }
        public decimal Amount { get; set; }
        public string Address { get; set; }
        public DateTime Date { get; set; }
        public bool Treated { get; set; }
    }
}

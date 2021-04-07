using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace crytopVipDb.Entities
{
    [Index("AccountNumber", IsUnique = false)]
    public class Transactions
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ID { get; set; }

        [MaxLength(15)]        
        public string AccountNumber { get; set; }

        public DateTime Created { get; set; }

        public DateTime Approved { get; set; }

        public decimal Debit { get; set; }

        public decimal Credit { get; set; }
        public PaymentStatus Status { get; set; }


        [ForeignKey("ID")]
        public int PaymentOptionID { get; set; }

        public PaymentOptions PaymentOption { get; set; }        
    }
}

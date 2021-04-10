using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace crytopVipDb.Entities
{
    public class PaymentOptions
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [MaxLength(30)]
        public string Channel { get; set; }

        [MaxLength(10)]
        public string Network { get; set; }

        [MaxLength(50)]
        public string Address { get; set; }
    }
}

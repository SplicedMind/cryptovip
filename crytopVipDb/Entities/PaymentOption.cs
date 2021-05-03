using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace crytopVipDb.Entities
{
    [Index(nameof(Currency), IsUnique = true, Name = nameof(Currency))]
    public class PaymentOption
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public byte ID { get; set; }

        [MaxLength(20)]
        public string Currency { get; set; }

        [MaxLength(20)]
        public string Network { get; set; }

        public byte MinimumConfirmation { get; set; }

        [MaxLength(100)]
        public string Address { get; set; }
    }
}

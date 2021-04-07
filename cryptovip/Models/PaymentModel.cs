using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cryptovip.Models
{
    public class PaymentModel
    {
        public int Currency { get; set; }

        public decimal Amount { get; set; }
        public string AccountNumber { get; internal set; }
    }
}

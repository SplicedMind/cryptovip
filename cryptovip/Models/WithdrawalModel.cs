using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cryptovip.Models
{
    public class WithdrawalModel
    {
        public byte CurrencyID { get; set; }

        public decimal Amount { get; set; }

        public string Address { get; set; }

        public string Network { get; set; }

        public string AccountNumber { get; set; }
    }
}

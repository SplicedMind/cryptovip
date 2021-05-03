using crytopVipDb.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cryptovip.Models
{
    public class AccountModel
    {
        public string Currency { get; set; }

        public decimal Capital { get; set; }

        public decimal ROI { get; set; }

        public decimal Commission { get; set; }

        public static explicit operator AccountModel(Account a)
        {
            if(a != null)
            {
                return new AccountModel
                {
                    Capital = a.Capital,
                    Commission = a.Commission,
                    Currency = a.Currency,
                    ROI = a.ROI
                };
            }
            return null;
        }
    }
}

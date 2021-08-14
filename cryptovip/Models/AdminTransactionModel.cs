using crytopVipDb.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cryptovip.Models
{
    public class AdminTransactionModel
    {
        public bool Approved { get; set; }
        public string AccountNo { get; set; }
        public decimal Amount { get; set; }
        public decimal Fee { get; set; }
        public string Currency { get; set; }
        public string Status { get; set; }
        public DateTime Date { get; set; }
        public long TID { get; set; }

        public static explicit operator AdminTransactionModel(Transaction t)
        {
            if(t != null)
            {
                return new AdminTransactionModel { 
                    AccountNo = t.AccountNumber,
                    Amount = t.Credit == 0 ? t.Debit : t.Credit,
                    Approved = t.Approved != DateTime.MinValue,
                    Currency = t.Currency,
                    Date = t.Created,
                    TID = t.ID,
                    Fee = t.Fee,
                    Status = t.Status.ToString()
                };
            }
            return null;
        }
    }
}

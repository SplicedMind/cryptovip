using crytopVipDb;
using crytopVipDb.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace cryptovip.Models
{
    public class TransactionModel
    {
        public DateTime Created { get; set; }
        public DateTime Approved { get; set; }
        public decimal Debit { get; set; }
        public decimal Credit { get; set; }
        public decimal Fee { get; set; }
        public string Currency { get; set; }
        public PaymentStatus Status { get; set; }

        public static implicit operator TransactionModel(Transaction t)
        {
            if (t != null)
            {
                return new TransactionModel
                {
                    Approved = t.Approved,
                    Created = t.Created,
                    Credit = t.Credit,
                    Currency = t.Currency,
                    Debit = t.Debit,
                    Fee = t.Fee,
                    Status = t.Status,
                };
            }
            return null;
        }
    }
}

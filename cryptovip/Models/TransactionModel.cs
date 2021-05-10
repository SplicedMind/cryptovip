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
        public string Created { get; set; }
        public string Approved { get; set; }
        public decimal Debit { get; set; }
        public decimal Credit { get; set; }
        public decimal Fee { get; set; }
        public string Currency { get; set; }
        public string Status { get; set; }

        public static implicit operator TransactionModel(Transaction t)
        {
            if (t != null)
            {
                return new TransactionModel
                {
                    Approved = t.Approved.ToShortDateString(),
                    Created = t.Created.ToShortDateString(),
                    Credit = t.Credit,
                    Currency = t.Currency,
                    Debit = t.Debit,
                    Fee = t.Fee,
                    Status = t.Status.ToString(),
                };
            }
            return null;
        }
    }
}

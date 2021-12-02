using System;
using crytopVipDb.Entities;

namespace cryptovip.Models
{
    public class PaymentNotificationModel
    {
        public long ID { get; set; }
        public string CurrencyID { get; set; }
        public decimal Amount { get; set; }
        public string Address { get; set; }
        public DateTime Date { get; set; }
        public bool Treated { get; set; }

        public static implicit operator PaymentNotification(PaymentNotificationModel pnm)
        {
            if (pnm is null)
                return null;
            else            
                return new PaymentNotification
                {
                    ID = pnm.ID,
                    Date = pnm.Date,
                    Address = pnm.Address,
                    Amount = pnm.Amount,
                    Currency = pnm.CurrencyID,
                    Treated = pnm.Treated
                };
            
        }

        public static explicit operator PaymentNotificationModel(PaymentNotification pnm)
        {
            if (pnm is null)
                return null;
            else
                return new PaymentNotificationModel
                {
                    ID = pnm.ID,
                    Date = pnm.Date,
                    Address = pnm.Address,
                    Amount = pnm.Amount,
                    CurrencyID = pnm.Currency,
                    Treated = pnm.Treated
                };

        }
    }
}

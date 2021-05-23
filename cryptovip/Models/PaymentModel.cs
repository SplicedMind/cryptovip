namespace cryptovip.Models
{
    public class PaymentModel
    {
        public byte CurrencyID { get; set; }

        public decimal Amount { get; set; }

        public string AccountNumber { get; set; }
    }
}

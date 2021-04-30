namespace cryptovip.Models
{
    public class PaymentModel
    {
        public string Currency { get; set; }

        public decimal Amount { get; set; }

        public string AccountNumber { get; internal set; }
    }
}

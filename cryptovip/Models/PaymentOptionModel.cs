namespace cryptovip.Models
{
    public class PaymentOptionModel
    {
        public int Id { get; internal set; }

        public string Currency { get; internal set; }

        public string Address { get; internal set; }

        public string Network { get; set; }

        public byte MinimumConfirmation { get; set; }
    }
}

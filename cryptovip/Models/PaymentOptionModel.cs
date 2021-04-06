using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cryptovip.Models
{
    public class PaymentOptionModel
    {
        public int Id { get; internal set; }

        public string Channel { get; internal set; }

        public string Address { get; internal set; }

        public string Network { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cryptovip.Models
{
    public class ResponseModel
    {
        public bool Success => !string.IsNullOrWhiteSpace(Error);
        public string Error { get; set; } = string.Empty;
        public object Value { get; set; }
    }
}

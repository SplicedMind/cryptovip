using cryptovip.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cryptovip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly DBContext _context;
        private readonly IConfiguration _configuration;
        private readonly AppData _appData;
        private readonly ResponseModel _responseModel;

        public PaymentController(DBContext context, ResponseModel responseModel, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
            _responseModel = responseModel;
            _appData = _configuration.GetSection("AppData").Get<AppData>();
        }

        [HttpGet("paymentoptions")]        
        public IActionResult Index()
        {
            try
            {
                List<PaymentOptionModel> payOpts = Util.GetPaymentOptions(_context);
                _responseModel.Value = payOpts;
            }
            catch(Exception ex)
            {
                _responseModel.Error = ex.Message;
                _responseModel.Value = ex;
            }
            return Ok(_responseModel);
        }

        [HttpPost("makepayment")]
        public IActionResult MakePayment(PaymentModel payment)
        {
            try
            {
                PaymentOptionModel payOpt = Util.MakePayment(payment, _context);
                _responseModel.Value = payOpt;
            }
            catch (Exception ex)
            {
                _responseModel.Error = ex.Message;
                _responseModel.Value = ex;
            }
            return Ok(_responseModel);
        }
    }
}

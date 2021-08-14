using System;
using cryptovip.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace cryptovip.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly DBContext _context;
        private readonly IConfiguration _configuration;
        private readonly AppData _appData;
        private readonly ResponseModel _responseModel;

        public AdminController(DBContext context, ResponseModel responseModel, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
            _responseModel = responseModel;
            _appData = _configuration.GetSection("AppData").Get<AppData>();
        }

        [HttpGet("profiles")]
        public IActionResult Profiles()
        {
            try
            {
                _responseModel.Value = _context.GetProfiles();
            }
            catch(Exception ex)
            {
                _responseModel.Error = ex.Message;
                _responseModel.Value = ex;
            }
            return Ok(_responseModel);
        }

        [HttpGet("withdrawals")]
        public IActionResult Withdrawals()
        {
            try
            {
                _responseModel.Value = _context.GetWithdrawals();
            }
            catch (Exception ex)
            {
                _responseModel.Error = ex.Message;
                _responseModel.Value = ex;
            }
            return Ok(_responseModel);
        }

        [HttpGet("deposits")]
        public IActionResult Deposits()
        {
            try
            {
                _responseModel.Value = _context.GetDeposits();
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

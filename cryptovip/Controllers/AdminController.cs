using System;
using cryptovip.Models;
using crytopVipDb;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        [HttpPost("profile")]
        public IActionResult UpdateProfile(UserProfileModel p)
        {
            try
            {
                var pro = _context.GetProfile(p.UserName);
                pro.DateOfBirth = p.DateOfBirth;
                pro.Enabled = p.Enabled;
                pro.FirstName = p.FirstName;
                pro.Address = p.HomeAddress;
                pro.LastName = p.LastName;
                pro.MiddleName = p.MiddleName;
                pro.Phone = p.Phone;

                _context.Entry(pro).State = EntityState.Modified;
                _context.SaveChanges();
                _responseModel.Value = (UserProfileModel)pro;
            }
            catch (Exception ex)
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

        [HttpPost("withdrawal")]
        public IActionResult UpdateWithdrawal(AdminTransactionModel w)
        {
            try
            {
                var withdrw = _context.GetTransaction(w.TID);
                withdrw.Fee = w.Fee;
                withdrw.Approved = w.Approved ? DateTime.UtcNow : withdrw.Approved;
                withdrw.Status = (PaymentStatus)Enum.Parse(typeof(PaymentStatus),w.Status);

                _context.Entry(withdrw).State = EntityState.Modified;
                _context.SaveChanges();
                _responseModel.Value = withdrw;
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

        [HttpPost("deposit")]
        public IActionResult UpdateDeposit(AdminTransactionModel d)
        {
            try
            {
                var deposit = _context.GetTransaction(d.TID);
                deposit.Fee = d.Fee;
                deposit.Approved = d.Approved ? DateTime.UtcNow : deposit.Approved;
                deposit.Status = (PaymentStatus)Enum.Parse(typeof(PaymentStatus),d.Status);

                _context.Entry(deposit).State = EntityState.Modified;
                _context.SaveChanges();
                _responseModel.Value = deposit;
            }
            catch (Exception ex)
            {
                _responseModel.Error = ex.Message;
                _responseModel.Value = ex;
            }
            return Ok(_responseModel);
        }

        [HttpGet("notifications")]
        public IActionResult Notifications()
        {
            try
            {
                _responseModel.Value = _context.GetPaymentNotifications();
            }
            catch (Exception ex)
            {
                _responseModel.Error = ex.Message;
                _responseModel.Value = ex;
            }
            return Ok(_responseModel);
        }

        [HttpPost("notification")]
        public IActionResult Notification(PaymentNotificationModel pnm)
        {
            try
            {
                var note = _context.GetPaymentNotification(pnm.ID);
                note.Treated = pnm.Treated;

                _context.Entry(note).State = EntityState.Modified;
                _context.SaveChanges();
                _responseModel.Value = note;
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cryptovip.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace cryptovip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly DBContext _context;
        private readonly IConfiguration _configuration;
        private readonly AppData _appData;
        private readonly ResponseModel _responseModel;

        public UserProfileController(DBContext context, ResponseModel responseModel, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
            _responseModel = responseModel;
            _appData = _configuration.GetSection("AppData").Get<AppData>();
        }

        [HttpGet]
        public IActionResult Get(string username)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    UserProfileModel userProfile = Util.GetProfile(username, _context);
                    _responseModel.Value = userProfile;                    
                }
                catch (Exception ex)
                {
                    _responseModel.Error = ex.Message;
                    _responseModel.Value = ex;
                }
            }
            return Ok(_responseModel);
        }

        [HttpGet("ewallets")]
        public IActionResult EWallets(string accountnumber)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    List<AccountModel> accounts = Util.GetAccounts(accountnumber, _context);
                    _responseModel.Value = accounts;
                }
                catch (Exception ex)
                {
                    _responseModel.Error = ex.Message;
                    _responseModel.Value = ex;
                }
            }
            return Ok(_responseModel);
        }

        [HttpPost]
        public IActionResult Create(UserProfileModel profile)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    UserProfileModel userProfile = Util.UpdateProfile(profile, _context);
                    _responseModel.Value = userProfile;

                }
                catch (Exception ex)
                {
                    _responseModel.Error = ex.Message;
                    _responseModel.Value = ex;
                }
            }
            else
            {
                return BadRequest();
            }
            return Ok(_responseModel);
        }

        [HttpPut("{id}")]
        public IActionResult Delete(int id, [FromBody] UserProfileModel value)
        {
            return Ok();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cryptovip.Models;
using crytopVipDb;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cryptovip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DBContext _context;
        private readonly IAuthenticateService _authenticateService;
        private readonly ResponseModel _responseModel;

        public UserController(DBContext context, ResponseModel responseModel, IAuthenticateService authenticateService)
        {
            _context = context;
            _authenticateService = authenticateService;
            _responseModel = responseModel;
        }

        [HttpPost("signup")]
        public ActionResult CreateUser(UserModel user)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    UserProfileModel userProfile = Util.Signup(user, _context);
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

        [HttpPost("login")]
        public ActionResult Login(UserModel user)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    UserProfileModel userProfile = _authenticateService.Authenticate(user);
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

        [HttpPut]
        public ActionResult UpdateUser(UserModel user)
        {
            return Ok();
        }

        [HttpDelete]
        public ActionResult DeleteUser(string userName)
        {
            return Ok();
        }

        [HttpGet]
        public ActionResult GetUser(string userName, string password)
        {
            return Ok();
        }
    }
}
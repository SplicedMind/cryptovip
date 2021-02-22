﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using cryptovip.Models;
using crytopVipDb;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace cryptovip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DBContext _context;
        private readonly IConfiguration _configuration;
        private readonly AppData _appData;
        private readonly ResponseModel _responseModel;

        public UserController(DBContext context, ResponseModel responseModel, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
            _responseModel = responseModel;
            _appData = _configuration.GetSection("AppData").Get<AppData>();
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
                    UserProfileModel userProfile = Authenticate(user);
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

        private UserProfileModel Authenticate(UserModel user)
        {
            UserProfileModel _user = Util.Signin(user, _context);

            if (_user != null)
            {
                JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
                byte[] authKey = Encoding.ASCII.GetBytes(_appData.AuthKey);

                SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[] {
                        new Claim("username", _user.UserName),
                        new Claim("enbaled", _user.Enabled.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddMinutes(500),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(authKey), SecurityAlgorithms.HmacSha256Signature)
                };

                _user.Token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
            }
            return _user;
        }
    }
}
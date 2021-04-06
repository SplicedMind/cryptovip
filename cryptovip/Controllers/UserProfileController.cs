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
        public IActionResult Get()
        {
            return Ok(new UserProfileModel[] { });
        }

        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult Create([FromBody] UserProfileModel value)
        {
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Delete(int id, [FromBody] UserProfileModel value)
        {
            return Ok();
        }
    }
}

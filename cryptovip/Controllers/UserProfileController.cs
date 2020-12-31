using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cryptovip.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace cryptovip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
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
        public IActionResult Creat([FromBody] UserProfileModel value)
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

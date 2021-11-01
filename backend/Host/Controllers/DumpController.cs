using System.IO;
using System.Threading.Tasks;
using Kadzura.Web.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Host.Controllers
{
    /// <summary>
    /// </summary>
    [Route("api/v{version:apiVersion}/dump")]
    [ApiVersion("1")]
    [ApiController]
    [Authorize]
    public class DumpController : ControllerBase
    {

        [HttpGet]
        [ProducesResponseType(typeof(FileResult), StatusCodes.Status200OK)]
        [ApiVersionRange(1)]
        public async Task<IActionResult> Get()
        {
            return File(new FileStream("Kadzura.db", FileMode.Open), "application/vnd.sqlite3", "Kadzura.db");
        }
    }
}
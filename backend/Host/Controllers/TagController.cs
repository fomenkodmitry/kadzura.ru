using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Core.Models.Filter;
using Core.Services.Contracts;
using Database.Models;
using Kadzura.Extensions.Pagination.Models;
using Kadzura.Web.Extensions;

namespace Host.Controllers
{
    /// <summary>
    /// </summary>
    [Route("api/v{version:apiVersion}/tag")]
    [ApiVersion("1")]
    [ApiController]
    [Authorize]
    public class TagController : ControllerBase
    {
        private readonly ITagService _tagService;

        public TagController(ITagService tagService)
        {
            _tagService = tagService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(TagModel), StatusCodes.Status200OK)]
        [ApiVersionRange(1)]
        public async Task<IActionResult> Create([FromBody] TagModel requestDto)
        {
            return Ok(await _tagService.Create(requestDto));
        }
        
        [HttpGet]
        [ProducesResponseType(typeof(PagedData<TagModel>), StatusCodes.Status200OK)]
        [ApiVersionRange(1)]
        [AllowAnonymous]
        public async Task<IActionResult> Get([FromQuery] EntityFilter requestDto)
        {
            return Ok(await _tagService.GetList(requestDto.Paging, requestDto.Filters));
        }
    }
}
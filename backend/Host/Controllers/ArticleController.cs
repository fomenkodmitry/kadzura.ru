using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Core.Models.Filter;
using Core.Services.Contracts;
using Database.Models;
using Kadzura.Database.Pagination.Models;
using Kadzura.Web.Extensions;

namespace Host.Controllers
{
    /// <summary>
    /// </summary>
    [Route("api/v{version:apiVersion}/article")]
    [ApiVersion("1")]
    [ApiController]
    [Authorize]
    public class ArticleController : ControllerBase
    {
        private readonly IArticleService _articleService;

        public ArticleController(IArticleService articleService)
        {
            _articleService = articleService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(ArticleModel), StatusCodes.Status200OK)]
        [ApiVersionRange(1)]
        public async Task<ActionResult<ArticleModel>> Create([FromBody] ArticleModel requestDto)
        {
            return Ok(await _articleService.Create(requestDto));
        }
        
        [HttpGet]
        [ProducesResponseType(typeof(PagedData<ArticleModel>), StatusCodes.Status200OK)]
        [ApiVersionRange(1)]
        [AllowAnonymous]
        public async Task<ActionResult<PagedData<ArticleModel>>> Get([FromQuery] EntityFilter requestDto)
        {
            return Ok(await _articleService.GetList(requestDto.Paging, requestDto.Filters));
        }
        
        [HttpDelete("{id}")]
        [ProducesResponseType( StatusCodes.Status204NoContent)]
        [ApiVersionRange(1)]
        public async Task<IActionResult> Delete(int id)
        {
            await _articleService.Delete(id);
            return NoContent();
        }
    }
}
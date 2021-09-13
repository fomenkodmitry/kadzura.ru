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
    [Route("api/v{version:apiVersion}/interview-question")]
    [ApiVersion("1")]
    [ApiController]
    [Authorize]
    public class InterviewQuestionController : ControllerBase
    {
        private readonly IInterviewQuestionService _interviewQuestionService;

        public InterviewQuestionController(IInterviewQuestionService interviewQuestionService)
        {
            _interviewQuestionService = interviewQuestionService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(InterviewQuestionModel), StatusCodes.Status200OK)]
        [ApiVersionRange(1)]
        public async Task<IActionResult> Create([FromBody] InterviewQuestionModel requestDto)
        {
            requestDto.FullText = requestDto.Answer + " " + requestDto.Question;
            return Ok(await _interviewQuestionService.Create(requestDto));
        }
        
        [HttpGet]
        [ProducesResponseType(typeof(PagedData<InterviewQuestionModel>), StatusCodes.Status200OK)]
        [ApiVersionRange(1)]
        [AllowAnonymous]
        public async Task<IActionResult> Get([FromQuery] EntityFilter requestDto)
        {
            return Ok(await _interviewQuestionService.GetList(requestDto.Paging, requestDto.Filters));
        }
    }
}
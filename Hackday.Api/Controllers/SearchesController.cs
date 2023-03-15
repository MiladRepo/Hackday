
using Microsoft.AspNetCore.Mvc;

namespace Hackday.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchesController : ControllerBase
    {
        private readonly HackContext _context;

        public SearchesController(HackContext context) => _context = context;

        [HttpGet]
        public ActionResult<IEnumerable<Site>> GetSites()
        {
            return _context.Sites.ToList();
        } 

    }
}
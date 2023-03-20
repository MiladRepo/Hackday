using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Hackday.Api.Models;

namespace Hackday.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchesController : ControllerBase
    {
        private readonly HackContext _context;

        public SearchesController(HackContext context) => _context = context;

        [HttpGet]
        public ActionResult<IEnumerable<Site>> GetSitesByQuery(string? query)
        {
            if (string.IsNullOrEmpty(query))
                return _context.Sites.Include(x => x.Links).ToList();

            return _context.Sites.Include(x => x.Links).Where(x => x.Name.ToLower().Contains(query.ToLower()) || x.Description.Contains(query.ToLower())).ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Site> GetSiteById(int id)
        {
            return _context.Sites.Include(x => x.Links).FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public ActionResult AddSite(PostSiteRequest site)
        {
            var newSite = new Site
            {
                Name = site.Name,
                Description = site.Description,
                Location = site.Location
            };

            _context.Sites.Add(newSite);
            _context.SaveChanges();

            return Created("", newSite);
        }

        [HttpPost("{id}/link")]
        public ActionResult AddLink(int id, PostLinkRequest link)
        {
            var getSite = _context.Sites.FirstOrDefault(x => x.Id == id);

            if (getSite == null) return NotFound();

            var newLink = new Link
            {
                Name = link.Name,
                Location = link.Location,
                Site = getSite
            };

            _context.Links.Add(newLink);
            _context.SaveChanges();

            return Created("", newLink);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteSite(int id)
        {
            var getone = _context.Sites.Include(x => x.Links).FirstOrDefault(x => x.Id == id);
            if (getone == null) return NotFound();

            _context.Sites.Remove(getone);
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}/link")]
        public ActionResult DeleteLink(int id)
        {
            var getone = _context.Links.FirstOrDefault(x => x.Id == id);
            if (getone == null) return NotFound();

            _context.Links.Remove(getone);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
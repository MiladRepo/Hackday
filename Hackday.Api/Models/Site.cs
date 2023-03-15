
namespace Hackday.Api
{
    public class Site
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Location { get; set; }
        public required string Description { get; set; }

        public virtual IEnumerable<Link>? Links {get;set;}
    }
}
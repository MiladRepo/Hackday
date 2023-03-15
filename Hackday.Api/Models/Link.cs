using System.Text.Json.Serialization;
namespace Hackday.Api
{
    public class Link
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Location { get; set; }
        // [JsonIgnore] maybe use it
        public virtual Site? Site {get;set;}
    }
}
using System.Text.Json.Serialization;

namespace Hackday.Api.Models
{
    public class PostLinkRequest
    {
        public required string Name {get;set;}
        public required string Location {get;set;}
    }
}
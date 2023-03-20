using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
namespace Hackday.Api.Models
{
    public class PostSiteRequest
    {
        public required string Name {get;set;}
        public required string Location {get;set;}
        public string? Description {get;set;}
    }
}
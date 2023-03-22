using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Hackday.Api
{
    public class HackContext : DbContext
    {
        public HackContext(DbContextOptions<HackContext> options) : base(options){}

        public DbSet<Site> Sites {get;set;} = default!;
        public DbSet<Link> Links {get;set;} = default!;

        // protected override void OnModelCreating(ModelBuilder builder)
        // {
        //     builder.HasDefaultContainer("Dogs");

        //     builder.Entity<Site>()
        //      .ToContainer(nameof(Site))
        //      .HasPartitionKey(x=> x.)
        //      .HasNoDiscriminator();

        //     builder.Entity<Dog>().Property(x => x.Name).HasColumnName("Name");
        //     builder.Entity<Dog>().Property(x => x.BirthYear).HasColumnName("Year");
        // }

        public static void Seed(HackContext context)
        {
            if(context.Sites.ToList().Any()) return;

            context.Sites.Add(new Site { Name = "Dog", Description = "dog", Location = "hej" });
            context.SaveChanges();
        }
        
    }
}
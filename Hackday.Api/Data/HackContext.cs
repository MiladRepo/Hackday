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
        
    }
}
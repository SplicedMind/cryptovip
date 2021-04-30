using crytopVipDb.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;

namespace cryptovip
{
    public class DBContext : DbContext
    {
        IConfiguration configuration;
        public DBContext(DbContextOptions<DBContext> options, IConfiguration _configuration) : base(options)
        {
            configuration = _configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string conStr = configuration["ConnectionStrings:cyrptoVipDb"];
            optionsBuilder.UseMySQL(conStr);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelbuilder.entity<userprofile>().hasa<user>();
            //modelbuilder.entity<user>().hasannotation()
            //modelbuilder.entity<user>().haskey(u => u.id);

            //modelBuilder.Entity<User>()
            //    .HasOne<UserProfile>(u => u.UserProfile)
            //    .WithOne(up => up.User)
            //    .HasForeignKey<UserProfile>(up => up.UserName)
            //    .OnDelete(DeleteBehavior.Restrict);

            //modelBuilder.Entity<UserSecurityQuestionAnswer>()
            //    .HasOne<User>(usq => usq.User)
            //    .WithMany(u => u.UserSecurityQuestionAnswers)
            //    .HasForeignKey(usq => usq.UserName)
            //    .OnDelete(DeleteBehavior.Restrict);

            //modelBuilder.Entity<UserSecurityQuestionAnswer>()
            //    .HasOne<SecurityQuestion>(usq => usq.SecurityQuestion)
            //    .WithMany(sq => sq.UserSecurityQuestionAnswers)
            //    .HasForeignKey(usq => usq.SecurityQuestionId)
            //    .OnDelete(DeleteBehavior.Restrict);
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Accounts> Accounts { get; set; }
        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<Transactions> Transactions { get; set; }
        public DbSet<PaymentOptions> PaymentOptions { get; set; }
        public DbSet<SecurityQuestion> SecurityQuestions { get; set; }
        public DbSet<UserSecurityQuestionAnswer> UserSecurityQuestionAnswers { get; set; }
    }
}

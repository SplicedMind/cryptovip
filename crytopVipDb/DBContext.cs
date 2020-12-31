using crytopVipDb.Entities;
using Microsoft.EntityFrameworkCore;
using System;

namespace crytopVipDb
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options): base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasKey(u => u.UserName);

            modelBuilder.Entity<User>()
                .HasOne<UserProfile>(u => u.UserProfile)
                .WithOne(up => up.User)
                .HasForeignKey<UserProfile>(up => up.UserName)
                .OnDelete(DeleteBehavior.Restrict);
                
            modelBuilder.Entity<UserSecurityQuestionAnswer>()
                .HasOne<User>(usq => usq.User)
                .WithMany(u => u.UserSecurityQuestionAnswers)
                .HasForeignKey(usq => usq.UserName)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<UserSecurityQuestionAnswer>()
                .HasOne<SecurityQuestion>(usq => usq.SecurityQuestion)
                .WithMany(sq => sq.UserSecurityQuestionAnswers)
                .HasForeignKey(usq => usq.SecurityQuestionId)
                .OnDelete(DeleteBehavior.Restrict);
        }

        public DbSet<User> Users { get; set; }
        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<SecurityQuestion> SecurityQuestions { get; set; }
        public DbSet<UserSecurityQuestionAnswer> UserSecurityQuestionAnswers { get; set; }

    }
}

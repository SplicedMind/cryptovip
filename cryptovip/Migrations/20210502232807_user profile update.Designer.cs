﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using cryptovip;

namespace cryptovip.Migrations
{
    [DbContext(typeof(DBContext))]
    [Migration("20210502232807_user profile update")]
    partial class userprofileupdate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.4");

            modelBuilder.Entity("crytopVipDb.Entities.Accounts", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<string>("AccountNumber")
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)");

                    b.Property<string>("Currency")
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)");

                    b.Property<byte?>("PaymentOptionID")
                        .HasColumnType("tinyint");

                    b.Property<string>("ReceivingAddress")
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)");

                    b.Property<int?>("UserProfileID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("PaymentOptionID");

                    b.HasIndex("UserProfileID");

                    b.HasIndex(new[] { "AccountNumber", "Currency" }, "AccountNumber_Currency")
                        .IsUnique();

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("crytopVipDb.Entities.PaymentOptions", b =>
                {
                    b.Property<byte>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("tinyint");

                    b.Property<string>("Address")
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)");

                    b.Property<string>("Currency")
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)");

                    b.Property<byte>("MinimumConfirmation")
                        .HasColumnType("tinyint");

                    b.Property<string>("Network")
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)");

                    b.HasKey("ID");

                    b.HasIndex(new[] { "Currency" }, "Currency")
                        .IsUnique();

                    b.ToTable("PaymentOptions");
                });

            modelBuilder.Entity("crytopVipDb.Entities.SecurityQuestion", b =>
                {
                    b.Property<byte>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("tinyint");

                    b.Property<string>("Question")
                        .HasMaxLength(500)
                        .HasColumnType("varchar(500)");

                    b.HasKey("ID");

                    b.ToTable("SecurityQuestions");
                });

            modelBuilder.Entity("crytopVipDb.Entities.Transactions", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<string>("AccountNumber")
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)");

                    b.Property<DateTime>("Approved")
                        .HasColumnType("datetime");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime");

                    b.Property<decimal>("Credit")
                        .HasColumnType("decimal(18, 2)");

                    b.Property<string>("Currency")
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)");

                    b.Property<decimal>("Debit")
                        .HasColumnType("decimal(18, 2)");

                    b.Property<byte?>("PaymentOptionID")
                        .HasColumnType("tinyint");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int?>("UserProfileID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("PaymentOptionID");

                    b.HasIndex("UserProfileID");

                    b.HasIndex(new[] { "Status" }, "Status");

                    b.ToTable("Transactions");
                });

            modelBuilder.Entity("crytopVipDb.Entities.User", b =>
                {
                    b.Property<string>("UserName")
                        .HasMaxLength(320)
                        .HasColumnType("varchar(320)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("varchar(500)");

                    b.HasKey("UserName");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("crytopVipDb.Entities.UserProfile", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .HasMaxLength(500)
                        .HasColumnType("varchar(500)");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("datetime");

                    b.Property<bool>("Enabled")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)");

                    b.Property<string>("MiddleName")
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)");

                    b.Property<string>("Phone")
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)");

                    b.Property<string>("ReferralUserName")
                        .HasMaxLength(320)
                        .HasColumnType("varchar(320)");

                    b.Property<string>("UserName")
                        .HasMaxLength(320)
                        .HasColumnType("varchar(320)");

                    b.Property<string>("VIPAccountNumber")
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)");

                    b.HasKey("ID");

                    b.HasIndex("UserName")
                        .IsUnique();

                    b.HasIndex(new[] { "VIPAccountNumber" }, "VIPAccountNumber")
                        .IsUnique();

                    b.ToTable("UserProfiles");
                });

            modelBuilder.Entity("crytopVipDb.Entities.UserSecurityQuestionAnswer", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<string>("Answer")
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)");

                    b.Property<byte>("SecurityQuestionID")
                        .HasColumnType("tinyint");

                    b.Property<string>("UserName")
                        .HasMaxLength(320)
                        .HasColumnType("varchar(320)");

                    b.Property<string>("UserName1")
                        .HasColumnType("varchar(320)");

                    b.HasKey("ID");

                    b.HasIndex("SecurityQuestionID");

                    b.HasIndex("UserName1");

                    b.ToTable("UserSecurityQuestionAnswers");
                });

            modelBuilder.Entity("crytopVipDb.Entities.Accounts", b =>
                {
                    b.HasOne("crytopVipDb.Entities.PaymentOptions", "PaymentOption")
                        .WithMany()
                        .HasForeignKey("PaymentOptionID");

                    b.HasOne("crytopVipDb.Entities.UserProfile", "UserProfile")
                        .WithMany()
                        .HasForeignKey("UserProfileID");

                    b.Navigation("PaymentOption");

                    b.Navigation("UserProfile");
                });

            modelBuilder.Entity("crytopVipDb.Entities.Transactions", b =>
                {
                    b.HasOne("crytopVipDb.Entities.PaymentOptions", "PaymentOption")
                        .WithMany()
                        .HasForeignKey("PaymentOptionID");

                    b.HasOne("crytopVipDb.Entities.UserProfile", "UserProfile")
                        .WithMany()
                        .HasForeignKey("UserProfileID");

                    b.Navigation("PaymentOption");

                    b.Navigation("UserProfile");
                });

            modelBuilder.Entity("crytopVipDb.Entities.UserProfile", b =>
                {
                    b.HasOne("crytopVipDb.Entities.User", "User")
                        .WithOne("UserProfile")
                        .HasForeignKey("crytopVipDb.Entities.UserProfile", "UserName");

                    b.Navigation("User");
                });

            modelBuilder.Entity("crytopVipDb.Entities.UserSecurityQuestionAnswer", b =>
                {
                    b.HasOne("crytopVipDb.Entities.SecurityQuestion", "SecurityQuestion")
                        .WithMany("UserSecurityQuestionAnswers")
                        .HasForeignKey("SecurityQuestionID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("crytopVipDb.Entities.User", "User")
                        .WithMany("UserSecurityQuestionAnswers")
                        .HasForeignKey("UserName1");

                    b.Navigation("SecurityQuestion");

                    b.Navigation("User");
                });

            modelBuilder.Entity("crytopVipDb.Entities.SecurityQuestion", b =>
                {
                    b.Navigation("UserSecurityQuestionAnswers");
                });

            modelBuilder.Entity("crytopVipDb.Entities.User", b =>
                {
                    b.Navigation("UserProfile");

                    b.Navigation("UserSecurityQuestionAnswers");
                });
#pragma warning restore 612, 618
        }
    }
}

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
    [Migration("20210410115247_channelMaxLength increase")]
    partial class channelMaxLengthincrease
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.4");

            modelBuilder.Entity("crytopVipDb.Entities.PaymentOptions", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Channel")
                        .HasMaxLength(30)
                        .HasColumnType("varchar(30)");

                    b.Property<string>("Network")
                        .HasMaxLength(10)
                        .HasColumnType("varchar(10)");

                    b.HasKey("ID");

                    b.ToTable("PaymentOptions");
                });

            modelBuilder.Entity("crytopVipDb.Entities.SecurityQuestion", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<string>("Question")
                        .HasMaxLength(500)
                        .HasColumnType("varchar(500)");

                    b.HasKey("Id");

                    b.ToTable("SecurityQuestions");
                });

            modelBuilder.Entity("crytopVipDb.Entities.Transactions", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<string>("AccountNumber")
                        .HasMaxLength(15)
                        .HasColumnType("varchar(15)");

                    b.Property<DateTime>("Approved")
                        .HasColumnType("datetime");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime");

                    b.Property<decimal>("Credit")
                        .HasColumnType("decimal(18, 2)");

                    b.Property<decimal>("Debit")
                        .HasColumnType("decimal(18, 2)");

                    b.Property<int>("PaymentOptionID")
                        .HasColumnType("int");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("AccountNumber");

                    b.HasIndex("PaymentOptionID");

                    b.ToTable("Transactions");
                });

            modelBuilder.Entity("crytopVipDb.Entities.User", b =>
                {
                    b.Property<string>("UserName")
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("varchar(500)");

                    b.HasKey("UserName");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("crytopVipDb.Entities.UserProfile", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

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

                    b.Property<byte[]>("ProfileImage")
                        .HasColumnType("varbinary(4000)");

                    b.Property<string>("ReferralUserName")
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("UserName")
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("VIPAccountNumber")
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)");

                    b.HasKey("Id");

                    b.HasIndex("UserName")
                        .IsUnique();

                    b.ToTable("UserProfiles");
                });

            modelBuilder.Entity("crytopVipDb.Entities.UserSecurityQuestionAnswer", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<string>("Answer")
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)");

                    b.Property<long>("SecurityQuestionId")
                        .HasColumnType("bigint");

                    b.Property<string>("UserName")
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("UserName1")
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("SecurityQuestionId");

                    b.HasIndex("UserName1");

                    b.ToTable("UserSecurityQuestionAnswers");
                });

            modelBuilder.Entity("crytopVipDb.Entities.Transactions", b =>
                {
                    b.HasOne("crytopVipDb.Entities.PaymentOptions", "PaymentOption")
                        .WithMany()
                        .HasForeignKey("PaymentOptionID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("PaymentOption");
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
                        .HasForeignKey("SecurityQuestionId")
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
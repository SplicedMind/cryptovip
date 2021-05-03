using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

namespace cryptovip.Migrations
{
    public partial class fix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PaymentOptions",
                columns: table => new
                {
                    ID = table.Column<byte>(type: "tinyint", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Currency = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: true),
                    Network = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: true),
                    MinimumConfirmation = table.Column<byte>(type: "tinyint", nullable: false),
                    Address = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentOptions", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "SecurityQuestions",
                columns: table => new
                {
                    ID = table.Column<byte>(type: "tinyint", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Question = table.Column<string>(type: "varchar(500)", maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SecurityQuestions", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserName = table.Column<string>(type: "varchar(320)", maxLength: 320, nullable: false),
                    Password = table.Column<string>(type: "varchar(500)", maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserName);
                });

            migrationBuilder.CreateTable(
                name: "UserProfiles",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    LastName = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false),
                    FirstName = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false),
                    MiddleName = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "datetime", nullable: false),
                    Phone = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: true),
                    Address = table.Column<string>(type: "varchar(500)", maxLength: 500, nullable: true),
                    VIPAccountNumber = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: true),
                    Enabled = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ReferralUserName = table.Column<string>(type: "varchar(320)", maxLength: 320, nullable: true),
                    UserName = table.Column<string>(type: "varchar(320)", maxLength: 320, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProfiles", x => x.ID);
                    table.ForeignKey(
                        name: "FK_UserProfiles_Users_UserName",
                        column: x => x.UserName,
                        principalTable: "Users",
                        principalColumn: "UserName",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserSecurityQuestionAnswers",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    SecurityQuestionID = table.Column<byte>(type: "tinyint", nullable: false),
                    Answer = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: true),
                    UserName = table.Column<string>(type: "varchar(320)", maxLength: 320, nullable: true),
                    UserName1 = table.Column<string>(type: "varchar(320)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserSecurityQuestionAnswers", x => x.ID);
                    table.ForeignKey(
                        name: "FK_UserSecurityQuestionAnswers_SecurityQuestions_SecurityQuesti~",
                        column: x => x.SecurityQuestionID,
                        principalTable: "SecurityQuestions",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserSecurityQuestionAnswers_Users_UserName1",
                        column: x => x.UserName1,
                        principalTable: "Users",
                        principalColumn: "UserName",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    AccountNumber = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: true),
                    UserProfileID = table.Column<int>(type: "int", nullable: true),
                    Currency = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: true),
                    Capital = table.Column<decimal>(type: "decimal(18, 2)", nullable: false),
                    ROI = table.Column<decimal>(type: "decimal(18, 2)", nullable: false),
                    Commission = table.Column<decimal>(type: "decimal(18, 2)", nullable: false),
                    PaymentOptionID = table.Column<byte>(type: "tinyint", nullable: true),
                    ReceivingAddress = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: true),
                    Network = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Accounts_PaymentOptions_PaymentOptionID",
                        column: x => x.PaymentOptionID,
                        principalTable: "PaymentOptions",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Accounts_UserProfiles_UserProfileID",
                        column: x => x.UserProfileID,
                        principalTable: "UserProfiles",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Transactions",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    AccountNumber = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: true),
                    UserProfileID = table.Column<int>(type: "int", nullable: true),
                    Currency = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: true),
                    PaymentOptionID = table.Column<byte>(type: "tinyint", nullable: true),
                    Created = table.Column<DateTime>(type: "datetime", nullable: false),
                    Approved = table.Column<DateTime>(type: "datetime", nullable: false),
                    Debit = table.Column<decimal>(type: "decimal(18, 2)", nullable: false),
                    Credit = table.Column<decimal>(type: "decimal(18, 2)", nullable: false),
                    Fee = table.Column<decimal>(type: "decimal(18, 2)", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transactions", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Transactions_PaymentOptions_PaymentOptionID",
                        column: x => x.PaymentOptionID,
                        principalTable: "PaymentOptions",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Transactions_UserProfiles_UserProfileID",
                        column: x => x.UserProfileID,
                        principalTable: "UserProfiles",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "AccountNumber_Currency",
                table: "Accounts",
                columns: new[] { "AccountNumber", "Currency" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_PaymentOptionID",
                table: "Accounts",
                column: "PaymentOptionID");

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_UserProfileID",
                table: "Accounts",
                column: "UserProfileID");

            migrationBuilder.CreateIndex(
                name: "Currency",
                table: "PaymentOptions",
                column: "Currency",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_PaymentOptionID",
                table: "Transactions",
                column: "PaymentOptionID");

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_UserProfileID",
                table: "Transactions",
                column: "UserProfileID");

            migrationBuilder.CreateIndex(
                name: "Status",
                table: "Transactions",
                column: "Status");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfiles_UserName",
                table: "UserProfiles",
                column: "UserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "VIPAccountNumber",
                table: "UserProfiles",
                column: "VIPAccountNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserSecurityQuestionAnswers_SecurityQuestionID",
                table: "UserSecurityQuestionAnswers",
                column: "SecurityQuestionID");

            migrationBuilder.CreateIndex(
                name: "IX_UserSecurityQuestionAnswers_UserName1",
                table: "UserSecurityQuestionAnswers",
                column: "UserName1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Accounts");

            migrationBuilder.DropTable(
                name: "Transactions");

            migrationBuilder.DropTable(
                name: "UserSecurityQuestionAnswers");

            migrationBuilder.DropTable(
                name: "PaymentOptions");

            migrationBuilder.DropTable(
                name: "UserProfiles");

            migrationBuilder.DropTable(
                name: "SecurityQuestions");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}

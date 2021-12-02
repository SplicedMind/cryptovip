using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

namespace cryptovip.Migrations
{
    public partial class PaymentNotification : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PaymentNotifications",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Currency = table.Column<string>(type: "varchar(767)", nullable: true),
                    Amount = table.Column<decimal>(type: "decimal(18, 2)", nullable: false),
                    Address = table.Column<string>(type: "varchar(767)", nullable: true),
                    Date = table.Column<DateTime>(type: "datetime", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentNotifications", x => x.ID);
                });

            migrationBuilder.CreateIndex(
                name: "Address_Index",
                table: "PaymentNotifications",
                column: "Address");

            migrationBuilder.CreateIndex(
                name: "Currency_Index",
                table: "PaymentNotifications",
                column: "Currency");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PaymentNotifications");
        }
    }
}

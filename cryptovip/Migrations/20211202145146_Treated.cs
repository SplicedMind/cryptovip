using Microsoft.EntityFrameworkCore.Migrations;

namespace cryptovip.Migrations
{
    public partial class Treated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Treated",
                table: "PaymentNotifications",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Treated",
                table: "PaymentNotifications");
        }
    }
}

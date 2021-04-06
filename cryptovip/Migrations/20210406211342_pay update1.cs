using Microsoft.EntityFrameworkCore.Migrations;

namespace cryptovip.Migrations
{
    public partial class payupdate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Network",
                table: "PaymentOptions",
                type: "varchar(10)",
                maxLength: 10,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Network",
                table: "PaymentOptions");
        }
    }
}

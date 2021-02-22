using Microsoft.EntityFrameworkCore.Migrations;

namespace crytopVipDb.Migrations
{
    public partial class userprofileupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Enabled",
                table: "UserProfiles",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Enabled",
                table: "UserProfiles");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace FastFoodAppServer.Migrations
{
    public partial class update_of_Accessory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OrderlinesId",
                table: "Accessory");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Accessory",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Accessory");

            migrationBuilder.AddColumn<string>(
                name: "OrderlinesId",
                table: "Accessory",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}

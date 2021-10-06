using Microsoft.EntityFrameworkCore.Migrations;

namespace FastFoodAppServer.Migrations
{
    public partial class Database_Restructure : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_AspNetUserLogins_LoginProvider_loginProviderKey",
                table: "Customers");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderLines_Accessory_AccessoryId",
                table: "OrderLines");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_Accessory_AccessoryId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_AccessoryId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_OrderLines_AccessoryId",
                table: "OrderLines");

            migrationBuilder.DropIndex(
                name: "IX_Customers_LoginProvider_loginProviderKey",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "AccessoryId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "AccessoryId",
                table: "OrderLines");

            migrationBuilder.DropColumn(
                name: "LoginProvider",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "TelephoneNumber",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "loginProviderKey",
                table: "Customers");

            migrationBuilder.AddColumn<string>(
                name: "AccessoriesAdded",
                table: "Products",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CustomerId",
                table: "Orders",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "Accessories",
                table: "OrderLines",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Customers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Customers_UserId",
                table: "Customers",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_AspNetUsers_UserId",
                table: "Customers",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_AspNetUsers_UserId",
                table: "Customers");

            migrationBuilder.DropIndex(
                name: "IX_Customers_UserId",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "AccessoriesAdded",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Accessories",
                table: "OrderLines");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Customers");

            migrationBuilder.AddColumn<int>(
                name: "AccessoryId",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "CustomerId",
                table: "Orders",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "AccessoryId",
                table: "OrderLines",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LoginProvider",
                table: "Customers",
                type: "nvarchar(128)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Customers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TelephoneNumber",
                table: "Customers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "loginProviderKey",
                table: "Customers",
                type: "nvarchar(128)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Products_AccessoryId",
                table: "Products",
                column: "AccessoryId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderLines_AccessoryId",
                table: "OrderLines",
                column: "AccessoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Customers_LoginProvider_loginProviderKey",
                table: "Customers",
                columns: new[] { "LoginProvider", "loginProviderKey" });

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_AspNetUserLogins_LoginProvider_loginProviderKey",
                table: "Customers",
                columns: new[] { "LoginProvider", "loginProviderKey" },
                principalTable: "AspNetUserLogins",
                principalColumns: new[] { "LoginProvider", "ProviderKey" },
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderLines_Accessory_AccessoryId",
                table: "OrderLines",
                column: "AccessoryId",
                principalTable: "Accessory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Accessory_AccessoryId",
                table: "Products",
                column: "AccessoryId",
                principalTable: "Accessory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

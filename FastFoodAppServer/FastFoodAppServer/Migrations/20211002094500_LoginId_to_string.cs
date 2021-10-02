using Microsoft.EntityFrameworkCore.Migrations;

namespace FastFoodAppServer.Migrations
{
    public partial class LoginId_to_string : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_AspNetUserLogins_LoginProvider_loginProviderKey",
                table: "Customers");

            migrationBuilder.AlterColumn<string>(
                name: "loginProviderKey",
                table: "Customers",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(128)");

            migrationBuilder.AlterColumn<string>(
                name: "LoginProvider",
                table: "Customers",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(128)");

            migrationBuilder.AlterColumn<string>(
                name: "LoginId",
                table: "Customers",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_AspNetUserLogins_LoginProvider_loginProviderKey",
                table: "Customers",
                columns: new[] { "LoginProvider", "loginProviderKey" },
                principalTable: "AspNetUserLogins",
                principalColumns: new[] { "LoginProvider", "ProviderKey" },
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_AspNetUserLogins_LoginProvider_loginProviderKey",
                table: "Customers");

            migrationBuilder.AlterColumn<string>(
                name: "loginProviderKey",
                table: "Customers",
                type: "nvarchar(128)",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "LoginProvider",
                table: "Customers",
                type: "nvarchar(128)",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "LoginId",
                table: "Customers",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_AspNetUserLogins_LoginProvider_loginProviderKey",
                table: "Customers",
                columns: new[] { "LoginProvider", "loginProviderKey" },
                principalTable: "AspNetUserLogins",
                principalColumns: new[] { "LoginProvider", "ProviderKey" },
                onDelete: ReferentialAction.Cascade);
        }
    }
}

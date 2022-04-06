using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Event",
                columns: table => new
                {
                    EventId = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    Title = table.Column<string>(type: "varchar(70)", maxLength: 70, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Date = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Description = table.Column<string>(type: "varchar(256)", maxLength: 256, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Category = table.Column<string>(type: "varchar(30)", maxLength: 30, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    City = table.Column<string>(type: "varchar(30)", maxLength: 30, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Venue = table.Column<string>(type: "varchar(30)", maxLength: 30, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Event", x => x.EventId);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Event",
                columns: new[] { "EventId", "Category", "City", "Date", "Description", "Title", "Venue" },
                values: new object[,]
                {
                    { new Guid("1e7d64d4-c5b1-4f8a-aca4-8f0438d5a1f6"), "drinks", "London", new DateTime(2022, 8, 5, 17, 34, 4, 432, DateTimeKind.Local).AddTicks(7571), "Event 4 months in the future", "Future Event 4", "Yet another pub" },
                    { new Guid("535b0387-c330-49df-8317-c2b304d1ee60"), "music", "London", new DateTime(2022, 6, 5, 17, 34, 4, 432, DateTimeKind.Local).AddTicks(7563), "Event 2 months in the future", "Future Event 2", "02 Arena" },
                    { new Guid("5bfabe3a-ef6e-497d-9b2d-664d7f9f19c3"), "drinks", "London", new DateTime(2022, 2, 5, 17, 34, 4, 432, DateTimeKind.Local).AddTicks(7517), "Event 2 months ago", "Past Event 1", "Pub" },
                    { new Guid("6fc1b26a-84a1-4588-9894-a9ad4ddba2da"), "music", "London", new DateTime(2022, 10, 5, 17, 34, 4, 432, DateTimeKind.Local).AddTicks(7578), "Event 6 months in the future", "Future Event 6", "Roundhouse Camden" },
                    { new Guid("92a26a4e-461a-47a8-b585-51b2e998bb75"), "film", "London", new DateTime(2022, 12, 5, 17, 34, 4, 432, DateTimeKind.Local).AddTicks(7591), "Event 8 months in the future", "Future Event 8", "Cinema" },
                    { new Guid("94ab1324-0c42-4046-a985-82c95dce37b8"), "travel", "London", new DateTime(2022, 11, 5, 17, 34, 4, 432, DateTimeKind.Local).AddTicks(7587), "Event 7 months in the future", "Future Event 7", "Somewhere on the Thames" },
                    { new Guid("bfeeb167-7fd0-4425-9d9a-17b75960a7f2"), "drinks", "London", new DateTime(2022, 9, 5, 17, 34, 4, 432, DateTimeKind.Local).AddTicks(7575), "Event 5 months in the future", "Future Event 5", "Just another pub" },
                    { new Guid("cb99fa2e-3216-40eb-b0a0-99c05db1db0c"), "culture", "Paris", new DateTime(2022, 3, 5, 17, 34, 4, 432, DateTimeKind.Local).AddTicks(7555), "Event 1 month ago", "Past Event 2", "Louvre" },
                    { new Guid("f2b25220-03b7-4fdb-8ddb-aaef7f0fbf9a"), "culture", "London", new DateTime(2022, 5, 5, 17, 34, 4, 432, DateTimeKind.Local).AddTicks(7560), "Event 1 month in the future", "Future Event 1", "Natural History Museum" },
                    { new Guid("f5f20ef4-54a0-46f0-8bb6-121255ff9d09"), "drinks", "London", new DateTime(2022, 7, 5, 17, 34, 4, 432, DateTimeKind.Local).AddTicks(7567), "Event 3 months in the future", "Future Event 3", "Another pub" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Event");
        }
    }
}

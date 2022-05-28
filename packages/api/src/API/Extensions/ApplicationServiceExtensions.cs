namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<DataContext>(opt =>
            {
                var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

                string connStr;

                if (env == "Development")
                {
                    connStr = config.GetConnectionString("DefaultConnection");
                }
                else
                {
                    var mysqlHost = Environment.GetEnvironmentVariable("MYSQL_HOST");
                    var mysqlPort = Environment.GetEnvironmentVariable("MYSQL_PORT");
                    var mysqlUser = Environment.GetEnvironmentVariable("MYSQL_USER");
                    var mysqlPass = Environment.GetEnvironmentVariable("MYSQL_PASSWORD");
                    var mysqlDb = Environment.GetEnvironmentVariable("MYSQL_DATABASE");

                    connStr = $"Server={mysqlHost};Port={mysqlPort};User Id={mysqlUser};Password={mysqlPass};Database={mysqlDb};";
                }

                var serverVersion = new MySqlServerVersion(new Version(8, 0, 23));

                opt.UseMySql(connStr, serverVersion);
            });
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials()
                        .WithExposedHeaders("WWW-Authenticate", "Pagination")
                        .WithOrigins("http://localhost:3000");
                });
            });
            services.AddMediatR(typeof(EventList.Handler).Assembly);
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);
            services.AddScoped<IUserAccessor, UserAccessor>();
            services.AddScoped<IPhotoAccessor, PhotoAccessor>();
            services.AddScoped<EmailSender>();
            services.Configure<CloudinarySettings>(config.GetSection("Cloudinary"));
            services.AddSignalR();

            return services;
        }
    }
}

﻿namespace WebApi.Modules;

using WebApi.Modules.Common.FeatureFlags;
using Microsoft.EntityFrameworkCore;
using Microsoft.FeatureManagement;
using Persistence;
using Domain;
using Persistence.Factories;
using Domain.Events;
using Persistence.Repositories.Events;

public static class SQLServerExtensions
{
    public static IServiceCollection AddSQLServer(this IServiceCollection services, IConfiguration config)
    {
        IFeatureManager featureManager = services
            .BuildServiceProvider()
            .GetRequiredService<IFeatureManager>();

        bool isEnabled = featureManager
            .IsEnabledAsync(nameof(CustomFeature.SQLServer))
            .ConfigureAwait(false)
            .GetAwaiter()
            .GetResult();

        if (isEnabled)
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

                var serverVersion = new MySqlServerVersion(new Version(8, 0, 27));

                opt.UseMySql(connStr, serverVersion);
            });
            services.AddScoped<IEventRepository, EventRepository>();
        }

        services.AddScoped<IEntityFactory, EntityFactory>();

        return services;
    }
}
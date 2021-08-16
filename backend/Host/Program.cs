using System;
using Kadzura.NLog.Configuration;
using Database;
using Host.Extensions;
using Kadzura.Web.Extensions;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NLog;
using NLog.Web;

namespace Host
{
    public class Program
    {
        public static void Main(string[] args)
        {
            NLogLayoutRenderers.RegisterAll();

            var nlogBuilder = NLogBuilder.ConfigureNLog("NLog.config");

            var logger = nlogBuilder.GetCurrentClassLogger();


            try
            {
                logger.Debug("Init host");

                var host = CreateWebHostBuilder(args).Build();

                var configuration = host.Services.GetService<IConfiguration>();
                var appSettings = new AppSettingsBuilder(configuration).Build();

                if (appSettings.ApplyMigrationsOnStartup)
                {
                    logger.Debug("Applying database migrations...");

                    using (var container = host.Services.CreateScope())
                    {
                        var context = container.ServiceProvider.GetRequiredService<Context>();

                        context.Database.Migrate();
						context.InitData();
					}
                }

                host.Run();
            }
            catch (Exception ex)
            {
                //NLog: catch setup errors
                logger.Error(ex, "Stopped program because of exception: ");
                throw;
            }
            finally
            {
                // Ensure to flush and stop internal timers/threads before application-exit (Avoid segmentation fault on Linux)
                LogManager.Shutdown();
            }
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            KestrelHost.CreateKestrelHostBuilder(args)
                .UseStartup<Startup>()
                .UseNLog();
    }
}

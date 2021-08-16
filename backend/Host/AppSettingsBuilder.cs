using Microsoft.Extensions.Configuration;

namespace Host
{
    internal class AppSettingsBuilder
    {
        private IConfiguration _configuration;

        public AppSettingsBuilder(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public AppSettings Build()
        {
            var appSettings = new AppSettings();

            _configuration.Bind(appSettings);

            appSettings.SqlConnectionString = _configuration.GetConnectionString("DefaultConnection");
            appSettings.ApplyMigrationsOnStartup = (bool)_configuration.GetValue(typeof(bool), "ConnectionStrings:ApplyMigrationsOnStartup");

            return appSettings;
        }
    }
}

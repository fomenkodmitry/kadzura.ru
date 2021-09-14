using Kadzura.Auth.Extensions;
using Microsoft.Extensions.Caching.StackExchangeRedis;

namespace Host
{
    internal class AppSettings
    {
        public string SqlConnectionString { get; set; }

        public bool ApplyMigrationsOnStartup { get; set; }

        public AuthConfigBase AuthConfig { get; set; }

    }
}

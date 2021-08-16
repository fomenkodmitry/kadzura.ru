using Kadzura.Auth.Extensions;
using Kadzura.Web.Extensions.Options;
using Microsoft.Extensions.Caching.StackExchangeRedis;
using Microsoft.Extensions.DependencyInjection;

namespace Host
{
    public partial class Startup
    {
        private void BindConfiguration(IServiceCollection services, AppSettings appSettings)
        {
            services.Configure<RedisCacheOptions>(Configuration.GetSection("RedisConfig"));
            services.Configure<LocalizationMiddlewareOptions>(Configuration.GetSection("LocalizationMiddlewareConfig"));
            services.Configure<AuthConfigBase>(Configuration.GetSection("AuthConfig"));
        }
    }
}

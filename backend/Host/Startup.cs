using Kadzura.Auth.Extensions;
using Kadzura.Extensions.Filtration.Binder;
using Kadzura.Swagger.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Common;
using Kadzura.Extensions.Filtration;
using Kadzura.Web.Extensions.Extensions;
using Microsoft.Extensions.Hosting;

namespace Host
{
    public partial class Startup
    {
        private readonly AppSettings _appSettings;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

            var appSettingsBuilder = new AppSettingsBuilder(configuration);

            _appSettings = appSettingsBuilder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSwagger(o => o.UseApiName("Anika")
                .AddJwtBearerSecurityDefinition()
                .AddAdditionalDefinition<ErrorCodes>(Common.Resources.Exceptions.ResourceManager)
                .AddDefaultErrorResponseOptions(ro => ro.AddDefaultErrorResponse()));

            services.AddSwaggerGen(o => o.ParameterFilter<FiltersSwaggerParamFilter>());
            
            BindConfiguration(services, _appSettings);

            services.AddHealthChecks();

            AddInjectionService(services, _appSettings);

            services.AddCors();
            services.ConfigureAuth(_appSettings.AuthConfig)
                .AddControllers(options =>
                {
                    options.ModelBinderProviders.Insert(0, new FiltersBinderProvider());
                })  
                .AddNewtonsoftJson(options =>
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                );
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IApiVersionDescriptionProvider provider)
        {
            app.UseCors(x => x
                .SetIsOriginAllowed(p => true)
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .WithExposedHeaders("Content-Disposition")
            );

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseVersionMiddleware();
            app.UseRequestResponseLogging();
            app.UseCorrelationId();
            app.UseContextContainer();

            app.AddSwaggerEndpoints(provider);
            app.AddHealthCheckEndpoints();

            app.UseAuthentication();
            app.UseLocalization();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(opt => { opt.MapControllers(); });
        }
    }
}

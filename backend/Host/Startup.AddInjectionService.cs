using System;
using System.IO;
using Core.Services;
using Core.Services.Contracts;
using Database;
using Database.Repository;
using Database.Repository.Contracts;
using Kadzura.FileManager.Extensions;
using Microsoft.Extensions.DependencyInjection;
using Kadzura.Web.Extensions.Extensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json.Converters;

namespace Host
{
    public partial class Startup
    {
        private void AddInjectionService(IServiceCollection services, AppSettings appSettings)
        {
            AddCore(services, appSettings);
            AddDatabases(services, appSettings);
            AddHttpClients(services, appSettings);
            AddOtherDependency(services, appSettings);
            AddRepository(services, appSettings);
            AddServices(services, appSettings);
        }

        private void AddCore(IServiceCollection services, AppSettings appSettings)
        {
            services.ConfigureMvc(opt =>
            {
                opt.AddISO8601DateTimeStandardHandling();
                opt.AddJsonConverter(new StringEnumConverter());
                opt.AddExceptionLogging();
                opt.AddDefaultResponseOptions(x =>
                {
                    x.AddDefaultErrorResponse();
                });
                opt.AddJsonConverter();
            });
        }

        private void AddOtherDependency(IServiceCollection services, AppSettings appSettings)
        {
            services.AddSingleton<IMemoryCache, MemoryCache>();
            services.AddFileStore();
        }

        private void AddHttpClients(IServiceCollection services, AppSettings appSettings)
        {
            services.AddCorrelationIdRequestHandler();
            services.AddErrorMessageResponseHandler();
        }

        private void AddDatabases(IServiceCollection services, AppSettings appSettings)
        {
            services.AddDbContext<Context>(options =>
                options.UseSqlite("Data Source="+Path.Combine(Environment.CurrentDirectory, appSettings.SqlConnectionString)));
        }

        private void AddRepository(IServiceCollection services, AppSettings appSettings)
        {
            services.AddTransient<ITagRepository, TagRepository>();
            services.AddTransient<IArticleRepository, ArticleRepository>();
            services.AddTransient<IInterviewQuestionRepository, InterviewQuestionRepository>();
        }
        
        private void AddServices(IServiceCollection services, AppSettings appSettings)
        {
            services.AddTransient<IAuthService, AuthService>();
            services.AddTransient<IArticleService, ArticleService>();
            services.AddTransient<ITagService, TagService>();
            services.AddTransient<IInterviewQuestionService, InterviewQuestionService>();
        }
    }
}

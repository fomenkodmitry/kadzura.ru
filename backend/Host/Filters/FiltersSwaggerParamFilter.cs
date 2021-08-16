using System.Collections.Generic;
using Kadzura.Extensions.Filtration.Models;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Host.Filters
{
    public class FiltersSwaggerParamFilter: IParameterFilter
    {
        public void Apply(OpenApiParameter parameter, ParameterFilterContext context)
        {
            if (parameter.In == ParameterLocation.Query && context?.PropertyInfo?.PropertyType == typeof(IReadOnlyCollection<FilterContainer>))
            {
                parameter.Schema.Type = "string";
            }
        }
    }
}
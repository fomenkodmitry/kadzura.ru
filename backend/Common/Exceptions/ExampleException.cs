using System.Collections.Generic;
using Kadzura.Common.Exceptions.Localized;

namespace Common.Exceptions
{
    public class ExampleException : LocalizedBusinessLogicException
    {
        public ExampleException(string text)
            : base(ErrorCodes.Example, Resources.Exceptions.ResourceManager,
                new Dictionary<string, object> { { nameof(text), text } })
        { }
    }
}
using System;
using System.Collections.Generic;
using Kadzura.Common.Exceptions.Localized;

namespace Common.Exceptions
{
    public class NotFoundExampleException : LocalizedDataNotFoundException
    {
        public NotFoundExampleException(Guid testGuid)
            : base(ErrorCodes.NotFoundExample, Resources.Exceptions.ResourceManager,
                new Dictionary<string, object>
                {
                    {nameof(testGuid), testGuid},
                })
        {
        }
    }
}
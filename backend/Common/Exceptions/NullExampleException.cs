using Kadzura.Common.Exceptions.Localized;

namespace Common.Exceptions
{
    public class NullExampleException : LocalizedInvalidArgumentsException
    {
        public NullExampleException()
            : base(ErrorCodes.NullExample, Resources.Exceptions.ResourceManager)
        { }
    }
}
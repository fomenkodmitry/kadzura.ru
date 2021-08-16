using System;

namespace Core.Extensions
{
    public static class DateTimeExtensions
    {
        public static DateTimeOffset ToZeroOffset(this DateTimeOffset dateTimeOffset)
        {
            return new DateTimeOffset(dateTimeOffset.DateTime, TimeSpan.Zero);
        }

        public static DateTimeOffset ToDateTimeOffset(this DateTime dateTime, TimeSpan offset)
        {
            return new DateTimeOffset(dateTime, offset);
        }
    }
}

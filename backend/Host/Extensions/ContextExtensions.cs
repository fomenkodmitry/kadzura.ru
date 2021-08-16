using Database;

namespace Host.Extensions
{
	/// <summary>
	/// Context extensions
	/// </summary>
	public static class ContextExtensions
	{
		/// <summary>
		/// Init data
		/// </summary>
		/// <param name="context"></param>
		public static void InitData(this Context context)
		{
			context.SaveChanges();
		}

	}
}

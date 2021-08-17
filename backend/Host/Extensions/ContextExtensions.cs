using System;
using System.Linq;
using Database;
using Database.Models;

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
			var needInit = context.Admins.FirstOrDefault() == null;
			if(!needInit)
				return;
			
			Console.WriteLine("Создание админа");
			Console.WriteLine("Логин");
			var login = Console.ReadLine();
			Console.WriteLine("Хэшированный пароль");
			var password = Console.ReadLine();
			context.Admins.Add(new AdminModel()
			{
				AdminGuid = Guid.NewGuid().ToString(),
				Login = login,
				Password = password
			});
			context.SaveChanges();
		}

	}
}

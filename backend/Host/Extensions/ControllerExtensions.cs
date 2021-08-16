using Microsoft.AspNetCore.Mvc;
using Common;
using System;
using System.Security.Claims;

namespace Host.Extensions
{
    /// <summary>
    /// Controller extensions
    /// </summary>
    public static class ControllerExtensions
    {
        
        /// <summary>
        /// Retreive uset role from auth context data
        /// </summary>
        /// <param name="controller"></param>
        /// <returns></returns>
        public static string GetUserRole(this ControllerBase controller)
        {
            if (controller.User == null)
                return UserRoles.Anonymous;

            return controller.User.FindFirst(ClaimsIdentity.DefaultRoleClaimType)?.Value;
        }
    }
}

﻿using System;
using FastFoodAppServer.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(FastFoodAppServer.Areas.Identity.IdentityHostingStartup))]
namespace FastFoodAppServer.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<FastFoodAppServerContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("FastFoodAppServerContextConnection")));

                services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<FastFoodAppServerContext>();
            });
        }
    }
}
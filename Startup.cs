using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Elias_BlazorApp5.Areas.Identity;
using Elias_BlazorApp5.Data;

namespace Elias_BlazorApp5
{
    public class Startup
    {
        public class Fraction
        {
            public int num { get; set; }
            public int den { get; set; }

            public Fraction()
            {
            }
        } 
        public static class Globales
        {
            public static int cnt2 = 30;
            public static int intentos = 2;
            public static int prospectos = 0;
            public static string turno = "";
             public static string Background = "red";
            public static int participantes = 0;
            public static string[] listpart = new string[2];
            public static Dictionary<string, int>  dictionary = new Dictionary<string, int>();

            public static int anteriorX = 99;
            public static int anteriorY = 99;
            public static Fraction[,] arrayData = new Fraction[4, 3];
            public static Fraction[,] arrayVisible = new Fraction[4, 3];
            public static List<Fraction> list1 = new List<Fraction> { };
            public static List<string> aciertos = new List<string> { };



            public static void InitMatrix()
            {
                Random rnd = new Random();

                list1.Add(new Fraction { num = 3, den = 5 });
                list1.Add(new Fraction { num = 6, den = 10 });
                list1.Add(new Fraction { num = 2, den = 5 });
                list1.Add(new Fraction { num = 6, den = 15 });
                list1.Add(new Fraction { num = 4, den = 6 });
                list1.Add(new Fraction { num = 2, den = 3 });
                list1.Add(new Fraction { num = 3, den = 15 });
                list1.Add(new Fraction { num = 2, den = 10 });
                list1.Add(new Fraction { num = 2, den = 6 });
                list1.Add(new Fraction { num = 3, den = 9 });
                list1.Add(new Fraction { num = 3, den = 6 });
                list1.Add(new Fraction { num = 2, den = 4 });


                for (int i = 0; i < 4; i++)
                {
                    var local_i = i;
                    for (int j = 0; j < 3; j++)
                    {
                        
                        var numerador = rnd.Next(5) + 1;
                        var denominador = rnd.Next(8) + 2;
                        Fraction f1 = new Fraction { num = numerador, den = denominador };
                        arrayVisible[i, j] = new Fraction { num = 99, den = 99 };
                        arrayData[i, j] = f1;
                    }

                }
                arrayData[0, 0] = new Fraction { num = 3, den = 5 };
                arrayData[1, 1] = new Fraction { num = 6, den = 10 };
                arrayData[2, 2] = new Fraction { num = 2, den = 5 };
                arrayData[3, 0] = new Fraction { num = 6, den = 15 };
                arrayData[0, 1] = new Fraction { num = 4, den = 6 };
                arrayData[1, 2] = new Fraction { num = 2, den = 3 };
                arrayData[2, 0] = new Fraction { num = 3, den = 15 };
                arrayData[3, 1] = new Fraction { num = 2, den = 10 };
                arrayData[0, 2] = new Fraction { num = 2, den = 6 };
                arrayData[1, 0] = new Fraction { num = 3, den = 9 };
                arrayData[2, 1] = new Fraction { num = 3, den = 6 };
                arrayData[3, 2] = new Fraction { num = 2, den = 4 };


            }
            
        }
            
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection")));
            services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = false)
                .AddEntityFrameworkStores<ApplicationDbContext>();
            services.AddRazorPages();
            services.AddServerSideBlazor();
            services.AddScoped<AuthenticationStateProvider, RevalidatingIdentityAuthenticationStateProvider<IdentityUser>>();
            services.AddSingleton<WeatherForecastService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapBlazorHub();
                endpoints.MapFallbackToPage("/_Host");
            });
        }
    }
}

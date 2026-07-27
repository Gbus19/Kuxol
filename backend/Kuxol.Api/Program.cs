using System.Text;
using Kuxol.Api.Configuration;
using Kuxol.Api.Handlers.Events;
using Kuxol.Api.Repositories;
using Kuxol.Api.Services;
using Kuxol.Application.Auth.Me;
using Kuxol.Application.Features.Auth.ForgotPassword;
using Kuxol.Application.Features.Auth.Login;
using Kuxol.Application.Features.Auth.RefreshToken;
using Kuxol.Application.Features.Auth.Register;
using Kuxol.Application.Features.Auth.ResetPassword;
using Kuxol.Application.Features.Auth.VerifyEmail;
using Kuxol.Domain.Interfaces;
using Kuxol.Domain.Settings;
using Kuxol.Infrastructure.Data;
using Kuxol.Infrastructure.Repositories;
using Kuxol.Infrastructure.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Configuración JWT
builder.Services.Configure<JwtSettings>(
    builder.Configuration.GetSection("Jwt"));

builder.Services.Configure<EmailSettings>(
    builder.Configuration.GetSection("Email"));

var jwt = builder.Configuration
    .GetSection("Jwt")
    .Get<JwtSettings>()!;

// JWT
builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters =
            new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,

                ValidIssuer = jwt.Issuer,
                ValidAudience = jwt.Audience,

                IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(jwt.Key))
            };
    });

builder.Services.AddAuthorization();

// Controllers
builder.Services.AddControllers();

// Swagger
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Description = "Escribe: Bearer {tu_token}",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT"
    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

// Base de datos
builder.Services.AddDbContext<KuxolDbContext>(options =>
{
    var connection =
        builder.Configuration.GetConnectionString("DefaultConnection");

    options.UseMySql(
        connection!,
        ServerVersion.AutoDetect(connection));
});

// Repositorios
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<EventRepository>();

// Servicios
builder.Services.AddScoped<IPasswordHasher, PasswordHasher>();
builder.Services.AddScoped<IJwtService, JwtService>();
builder.Services.AddScoped<IEmailService, EmailService>();

// Handlers Auth
builder.Services.AddScoped<RegisterHandler>();
builder.Services.AddScoped<LoginHandler>();
builder.Services.AddScoped<RefreshTokenHandler>();
builder.Services.AddScoped<VerifyEmailHandler>();
builder.Services.AddScoped<ForgotPasswordHandler>();
builder.Services.AddScoped<ResetPasswordHandler>();
builder.Services.AddScoped<MeHandler>();

// Handlers Events
builder.Services.AddScoped<CreateEventHandler>();
builder.Services.AddScoped<GetUserEventsHandler>();
builder.Services.AddScoped<GetEventHandler>();
builder.Services.AddScoped<UpdateEventHandler>();
builder.Services.AddScoped<DeleteEventHandler>();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("Frontend");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
using Kuxol.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Kuxol.Infrastructure.Data;

public class KuxolDbContext : DbContext
{
    public KuxolDbContext(DbContextOptions<KuxolDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();

    public DbSet<Event> Events => Set<Event>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(KuxolDbContext).Assembly);

        // ==========================
        // User
        // ==========================
        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("Users");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.FirstName)
                .HasMaxLength(100)
                .IsRequired();

            entity.Property(x => x.LastName)
                .HasMaxLength(100)
                .IsRequired();

            entity.Property(x => x.Email)
                .HasMaxLength(255)
                .IsRequired();

            entity.HasIndex(x => x.Email)
                .IsUnique();

            entity.Property(x => x.PasswordHash)
                .HasMaxLength(500)
                .IsRequired();

            entity.Property(x => x.RefreshToken)
                .HasMaxLength(500);

            entity.Property(x => x.EmailVerificationToken)
                .HasMaxLength(500);

            entity.Property(x => x.PasswordResetToken)
                .HasMaxLength(500);

            entity.Property(x => x.EmailVerified)
                .HasDefaultValue(false);
        });

        // ==========================
        // Event
        // ==========================
        modelBuilder.Entity<Event>(entity =>
        {
            entity.ToTable("Events");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.Name)
                .HasMaxLength(150)
                .IsRequired();

            entity.Property(x => x.Slug)
                .HasMaxLength(180)
                .IsRequired();

            entity.HasIndex(x => x.Slug)
                .IsUnique();

            entity.Property(x => x.Description)
                .HasMaxLength(500);

            entity.Property(x => x.Venue)
                .HasMaxLength(200);

            entity.HasIndex(x => x.UserId);

            entity.HasIndex(x => x.StartDate);

            entity.HasOne(x => x.User)
                .WithMany(x => x.Events)
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        });
    }
}
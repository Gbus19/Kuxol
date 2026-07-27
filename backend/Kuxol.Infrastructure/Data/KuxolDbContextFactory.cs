using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Kuxol.Infrastructure.Data;

public class KuxolDbContextFactory : IDesignTimeDbContextFactory<KuxolDbContext>
{
    public KuxolDbContext CreateDbContext(string[] args)
    {
        const string connectionString =
            "server=localhost;port=3306;database=Kuxol;user=kuxol;password=kuxol123;";

        var optionsBuilder = new DbContextOptionsBuilder<KuxolDbContext>();

        optionsBuilder.UseMySql(
            connectionString,
            ServerVersion.AutoDetect(connectionString));

        return new KuxolDbContext(optionsBuilder.Options);
    }
}
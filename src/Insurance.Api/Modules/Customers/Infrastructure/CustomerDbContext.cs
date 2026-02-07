using Insurance.Api.Modules.Customers.Domain;
using Microsoft.EntityFrameworkCore;

namespace Insurance.Api.Modules.Customers.Infraestructure;

public class CustomerDbContext : DbContext
{
    public CustomerDbContext(DbContextOptions<CustomerDbContext> options) : base(options)
    { }
    
    public DbSet<Customer> Customers { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>(builder =>
        {
            builder.HasKey(c => c.Id);
            
            builder.OwnsOne(c => c.Cpf, cpf =>
            {
                cpf.Property(c => c.Value)
                    .HasColumnName("cpf")
                    .HasMaxLength(11)
                    .IsRequired();
            });
            
            builder.OwnsMany(c => c.Emails, e =>
            {
                e.ToTable("customer_emails");
                e.WithOwner().HasForeignKey("customer_id");
                e.Property<Guid>("Id");
                e.HasKey("Id");

                e.Property(p => p.Value)
                    .HasColumnName("email")
                    .IsRequired();

                e.Property(p => p.Type)
                    .HasColumnName("type")
                    .IsRequired();
            });
            
            builder.OwnsMany(c => c.Phones, p =>
            {
                p.ToTable("customer_phones");
                p.WithOwner().HasForeignKey("customer_id");
                p.Property<Guid>("Id");
                p.HasKey("Id");

                p.Property(x => x.Number)
                    .HasColumnName("number")
                    .IsRequired();

                p.Property(x => x.Type)
                    .HasColumnName("type")
                    .IsRequired();
            });
        });
    }

}
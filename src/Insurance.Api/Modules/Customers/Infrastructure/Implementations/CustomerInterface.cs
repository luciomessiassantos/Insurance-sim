using Insurance.Api.Modules.Customers.Domain;
using Insurance.Api.Modules.Customers.Infraestructure;
using Insurance.Api.Modules.Customers.Infrastructure.Interfaces;

namespace Insurance.Api.Modules.Customers.Infrastructure.Implementations;

public class CustomerInterface(CustomerDbContext context) : ICustomerRepository
{
    public async Task<Customer> CreateCustomer(Customer customer)
    {
        var result = await context.Customers.AddAsync(customer);
    }

    public Task<Customer> GetCustomer(string customerId)
    {
        throw new NotImplementedException();
    }

    public Task<List<Customer>> GetCustomers()
    {
        throw new NotImplementedException();
    }

    public Task<Customer> UpdateCustomer(string customerId, Customer customer)
    {
        throw new NotImplementedException();
    }

    public Task DeleteCustomer(string customerId)
    {
        throw new NotImplementedException();
    }
}
using Insurance.Api.Modules.Customers.Domain;

namespace Insurance.Api.Modules.Customers.Infrastructure.Interfaces;

public interface ICustomerRepository
{
    Task<Customer> CreateCustomer(Customer customer);
    Task<Customer> GetCustomer(string customerId);
    Task<List<Customer>> GetCustomers();
    
    Task<Customer> UpdateCustomer(string customerId, Customer customer);
    
    Task DeleteCustomer(string customerId);
}
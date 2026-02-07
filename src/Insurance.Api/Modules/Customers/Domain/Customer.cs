using Insurance.Api.Modules.Customers.Domain.ValueObjects;

namespace Insurance.Api.Modules.Customers.Domain;

public class Customer
{
    public Guid Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    
    public required CPF Cpf { get; set; }
    
    private readonly List<Email> _emails = [];
    public IReadOnlyCollection<Email> Emails => _emails;

    private readonly List<PhoneNumber> _phones = [];
    public IReadOnlyCollection<PhoneNumber> Phones => _phones;
    
    protected Customer() {}

    public Customer(string firstName, string lastName, CPF cpf)
    {
        FirstName = firstName;
        LastName = lastName;
        Cpf = cpf;
    }

    public void AddEmail(Email email) => _emails.Add(email);
    public void AddPhone(PhoneNumber phone) => _phones.Add(phone);

}
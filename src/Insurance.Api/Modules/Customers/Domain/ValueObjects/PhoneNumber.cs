namespace Insurance.Api.Modules.Customers.Domain.ValueObjects;

public sealed class PhoneNumber
{
    public string Number { get; private set; }
    public string Type { get; private set; }

    private PhoneNumber() {}

    public PhoneNumber(string number, string type)
    {
        if (string.IsNullOrWhiteSpace(number))
            throw new AppDomainUnloadedException("Telefone inválido");

        Number = number;
        Type = type;
    }
}
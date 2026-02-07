using System.Text.RegularExpressions;

namespace Insurance.Api.Modules.Customers.Domain.ValueObjects;

public sealed class Email
{
    public string Value { get; private set; }
    public string Type { get; private set; }

    private Email() {}

    public Email(string value, string type)
    {
        if (!IsValid(value))
            throw new AppDomainUnloadedException("Email inválido");

        Value = value;
        Type = type;
    }

    private static bool IsValid(string email)
    {
        return Regex.IsMatch(email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$");
    }
}
;
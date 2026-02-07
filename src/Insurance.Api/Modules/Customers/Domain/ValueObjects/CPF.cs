using System.Text.RegularExpressions;

namespace Insurance.Api.Modules.Customers.Domain.ValueObjects;

public class CPF
{
    public string Value { get; }

    private CPF() { }

    public CPF(string value)
    {
        if (!IsValid(value))
        {
            throw new AppDomainUnloadedException("CPF inválido");
        }
        
        Value = value;
    }


    private static bool IsValid(string cpf)
    {
        return Regex.IsMatch(cpf, @"(^\\d{3}\x2E\\d{3}\x2E\\d{3}\x2D\\d{2}$)");
    }
}
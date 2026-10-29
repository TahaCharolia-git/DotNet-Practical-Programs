using System;

class BankAccount
{
    public string AccountNumber { get; set; }

    private double balance;

    public double Balance
    {
        get { return balance; }
        set
        {
            if (value < 0)
            {
                throw new ArgumentException("Balance cannot be negative");
            }
            balance = value;
        }
    }

    public BankAccount(string accountNumber, double balance)
    {
        AccountNumber = accountNumber;
        Balance = balance;
    }

    public void Deposit(double amount)
    {
        Balance = Balance + amount;
    }

    public void Withdraw(double amount)
    {
        if (amount > balance)
        {
            throw new ArgumentException("Insufficient balance");
        }
        Balance = Balance - amount;
    }
}

class Program
{
    static void Main()
    {
        BankAccount acc = new BankAccount("ACC1001", 5000);

        Console.WriteLine("Account Number : " + acc.AccountNumber);
        Console.WriteLine("Balance        : " + acc.Balance);
        Console.WriteLine();

        acc.Deposit(2000);
        Console.WriteLine("After Deposit 2000  : " + acc.Balance);

        acc.Withdraw(1500);
        Console.WriteLine("After Withdraw 1500 : " + acc.Balance);
        Console.WriteLine();

        Console.WriteLine("Setting balance = -500");
        try
        {
            acc.Balance = -500;
        }
        catch (ArgumentException e)
        {
            Console.WriteLine("Exception : " + e.Message);
        }
        Console.WriteLine("Balance is still : " + acc.Balance);
        Console.WriteLine();

        Console.WriteLine("Withdrawing 99999");
        try
        {
            acc.Withdraw(99999);
        }
        catch (ArgumentException e)
        {
            Console.WriteLine("Exception : " + e.Message);
        }
        Console.WriteLine("Balance is still : " + acc.Balance);
        Console.WriteLine();

        Console.WriteLine("Creating account with negative balance");
        try
        {
            BankAccount acc2 = new BankAccount("ACC1002", -100);
        }
        catch (ArgumentException e)
        {
            Console.WriteLine("Exception : " + e.Message);
        }
    }
}


using System;

delegate int Calculate(int a, int b);

class Program
{
    static int Add(int a, int b)
    {
        return a + b;
    }

    static int Subtract(int a, int b)
    {
        return a - b;
    }

    static int Multiply(int a, int b)
    {
        return a * b;
    }

    static int Divide(int a, int b)
    {
        return a / b;
    }

    static void Main()
    {
        Calculate calc;

        calc = Add;
        Console.WriteLine("Addition: " + calc(10, 5));

        calc = Subtract;
        Console.WriteLine("Subtraction: " + calc(10, 5));

        calc = Multiply;
        Console.WriteLine("Multiplication: " + calc(10, 5));

        calc = Divide;
        Console.WriteLine("Division: " + calc(10, 5));
    }
}

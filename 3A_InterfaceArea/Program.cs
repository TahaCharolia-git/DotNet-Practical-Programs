using System;

interface IArea
{
    double CalculateArea();
}

class Circle : IArea
{
    private double radius;

    public Circle(double radius)
    {
        this.radius = radius;
    }

    public double CalculateArea()
    {
        return Math.PI * radius * radius;
    }
}

class Rectangle : IArea
{
    private double length;
    private double width;

    public Rectangle(double length, double width)
    {
        this.length = length;
        this.width = width;
    }

    public double CalculateArea()
    {
        return length * width;
    }
}

class Program
{
    static void Main()
    {
        IArea circle = new Circle(7);
        Console.WriteLine("Radius = 7");
        Console.WriteLine("Area of Circle = " + circle.CalculateArea().ToString("0.00"));
        Console.WriteLine();

        IArea rectangle = new Rectangle(10, 5);
        Console.WriteLine("Length = 10, Width = 5");
        Console.WriteLine("Area of Rectangle = " + rectangle.CalculateArea().ToString("0.00"));
    }
}

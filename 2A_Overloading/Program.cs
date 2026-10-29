using System;

class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }

    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }

    public double Add(double a, double b)
    {
        return a + b;
    }

    public int Multiply(int a, int b)
    {
        return a * b;
    }

    public double Multiply(double a, double b)
    {
        return a * b;
    }
}

class Student
{
    public string Name;
    public int RollNo;
    public string Course;

    public Student()
    {
        Name = "Unknown";
        RollNo = 0;
        Course = "Not Assigned";
        Console.WriteLine("Constructor with 0 parameters called");
    }

    public Student(string name)
    {
        Name = name;
        RollNo = 0;
        Course = "Not Assigned";
        Console.WriteLine("Constructor with 1 parameter called");
    }

    public Student(string name, int rollNo)
    {
        Name = name;
        RollNo = rollNo;
        Course = "Not Assigned";
        Console.WriteLine("Constructor with 2 parameters called");
    }

    public Student(string name, int rollNo, string course)
    {
        Name = name;
        RollNo = rollNo;
        Course = course;
        Console.WriteLine("Constructor with 3 parameters called");
    }

    public void Display()
    {
        Console.WriteLine("Name   : " + Name);
        Console.WriteLine("RollNo : " + RollNo);
        Console.WriteLine("Course : " + Course);
        Console.WriteLine();
    }
}

class Program
{
    static void Main()
    {
        Calculator calc = new Calculator();

        Console.WriteLine("Function Overloading");
        Console.WriteLine("Add(10, 20) = " + calc.Add(10, 20));
        Console.WriteLine("Add(10, 20, 30) = " + calc.Add(10, 20, 30));
        Console.WriteLine("Add(2.5, 3.5) = " + calc.Add(2.5, 3.5));
        Console.WriteLine("Multiply(6, 7) = " + calc.Multiply(6, 7));
        Console.WriteLine("Multiply(2.5, 4.0) = " + calc.Multiply(2.5, 4.0));

        Console.WriteLine();
        Console.WriteLine("Constructor Overloading");
        Console.WriteLine();

        Student s1 = new Student();
        s1.Display();

        Student s2 = new Student("Rahul Sharma");
        s2.Display();

        Student s3 = new Student("Priya Verma", 101);
        s3.Display();

        Student s4 = new Student("Amit Kumar", 102, "BCA");
        s4.Display();
    }
}

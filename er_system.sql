CREATE TABLE er_system.Employees (
    EmployeeID INT PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    DateOfBirth DATE,
    Gender VARCHAR(10),
    cotactnumber VARCHAR(15),
    email VARCHAR(50),
    Address VARCHAR(255),
    department VARCHAR(50),
    position VARCHAR(50),
    Joiningdate DATE,
    salary DECIMAL(10, 2)
);

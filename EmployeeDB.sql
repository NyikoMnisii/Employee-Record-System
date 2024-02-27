-- EmployeeDB database
CREATE DATABASE IF NOT EXISTS EmployeeDB;
USE EmployeeDB;

 -- Employees table
CREATE TABLE IF NOT EXISTS Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DateOfBirth DATE,
    Gender VARCHAR(10),
    ContactNumber VARCHAR(15),
    Email VARCHAR(100),
    Address VARCHAR(255),
    Department VARCHAR(50),
    Position VARCHAR(50),
    JoiningDate DATE,
    Salary DECIMAL(10, 2),
);

-- Example: Adding an index on the Email column for faster searches
CREATE INDEX idx_email ON Employees (Email);

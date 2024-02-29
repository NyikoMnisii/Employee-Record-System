<?php
// Retrieve form data from POST request
$EmployeeID = $_POST['EmployeeID'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$DateOfBirth = $_POST['DateOfBirth'];
$Gender = $_POST['Gender'];
$cotactnumber = $_POST['cotactnumber'];
$email = $_POST['email'];
$Address = $_POST['Address'];
$department = $_POST['department'];
$position = $_POST['position'];
$Joiningdate = $_POST['Joiningdate'];
$salary = $_POST['salary'];



// Your MySQL database connection code goes here
$servername = "Local instance";
$username = "root";
$password = "Nyiko";
$dbname = "er_system";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert data into MySQL database
$sql = "INSERT INTO your_table_name (EmployeeID, firstname, lastname, DateOfBirth, Gender, cotactnumber, email, Address, department, position, Joiningdate, salary)
VALUES ('$EmployeeID', '$firstname', '$lastname', '$DateOfBirth', '$Gender', '$cotactnumber', '$email', '$Address', '$department', '$position', '$Joiningdate', '$salary')";


if ($conn->query($sql) === TRUE) {
    echo "Record added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>

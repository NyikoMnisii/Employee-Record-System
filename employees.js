// Include this script at the end of your HTML file or in a separate file

$(document).ready(function () {
    // Fetch and display employees on page load
    // Use AJAX to fetch data from your backend API endpoint

    // Example AJAX call
    $.ajax({
        url: '/employees',
        method: 'GET',
        success: function (data) {
            // Populate the employee table with data
            populateEmployeeTable(data);
        },
        error: function (error) {
            console.error('Error fetching employee data:', error);
        }
    });

    // Function to populate employee table
    function populateEmployeeTable(data) {
        // Clear existing data
        $('#employeeTableBody').empty();

        // Iterate through each employee and append to the table
        data.forEach(function (employee) {
            $('#employeeTableBody').append(`
                <tr>
                    <td>${employee.EmployeeID}</td>
                    <td>${employee.FirstName}</td>
                    <td>${employee.LastName}</td>
                    <td>${employee.Email}</td>
                    <!-- Add more columns as needed -->
                    <td>
                        <button class="btn btn-info btn-sm" data-toggle="modal" data-target="#editEmployeeModal" data-id="${employee.EmployeeID}">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteEmployee(${employee.EmployeeID})">Delete</button>
                    </td>
                </tr>
            `);
        });
    }

    // Add Employee Form Submission
    $('#addEmployeeForm').submit(function (e) {
        e.preventDefault();
        // Use AJAX to send the form data to your backend for processing
        // Update the employee table after a successful addition
    });

    // Edit Employee Form Submission
    $('#editEmployeeForm').submit(function (e) {
        e.preventDefault();
        // Use AJAX to send the form data to your backend for processing
        // Update the employee table after a successful update
    });

    // Function to delete an employee
    window.deleteEmployee = function (employeeId) {
        // Use AJAX to send a request to your backend to delete the employee
        // Update the employee table after a successful deletion
    };
});

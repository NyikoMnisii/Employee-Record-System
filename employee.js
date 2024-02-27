document.addEventListener("DOMContentLoaded", function () {
    // Fetch and display all employees
    fetchEmployees();

    // Add event listener for search input
    document.getElementById("searchInput").addEventListener("input", function () {
        searchEmployees(this.value);
    });
});

function fetchEmployees() {
    // Fetch employees from your backend API endpoint
    fetch("/employees")
        .then(response => response.json())
        .then(data => displayEmployees(data));
}

function displayEmployees(employees) {
    const tableBody = document.getElementById("employeeTableBody");
    tableBody.innerHTML = "";

    employees.forEach(employee => {
        const row = `<tr>
                        <td>${employee.EmployeeID}</td>
                        <td>${employee.FirstName}</td>
                        <td>${employee.LastName}</td>
                        <td>${employee.Email}</td>
                        <td>
                            <button class="btn btn-info btn-sm" onclick="showEmployeeDetails(${employee.EmployeeID})">Details</button>
                        </td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

function searchEmployees(searchTerm) {
    // Fetch and display filtered employees based on search term
    fetch(`/employees?search=${searchTerm}`)
        .then(response => response.json())
        .then(data => displayEmployees(data));
}

function showEmployeeDetails(employeeID) {
    // Fetch and display details for a specific employee
    fetch(`/employees/${employeeID}`)
        .then(response => response.json())
        .then(employee => {
            const detailsContent = document.getElementById("employeeDetailsContent");
            detailsContent.innerHTML = `
                <p><strong>Employee ID:</strong> ${employee.EmployeeID}</p>
                <p><strong>First Name:</strong> ${employee.FirstName}</p>
                <p><strong>Last Name:</strong> ${employee.LastName}</p>
                <p><strong>Email:</strong> ${employee.Email}</p>
                <!-- Add more details as needed -->

                <button class="btn btn-warning btn-sm" onclick="editEmployee(${employee.EmployeeID})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteEmployee(${employee.EmployeeID})">Delete</button>
            `;
            document.getElementById("employeeDetails").style.display = "block";
        });
}

function editEmployee(employeeID) {
    // Implement functionality to edit employee details
    // Redirect or show a modal with a form for editing
}

function deleteEmployee(employeeID) {
    // Implement functionality to delete an employee
    // Confirm with the user before deleting
}

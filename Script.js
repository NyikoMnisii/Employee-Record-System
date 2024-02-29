function submitForm() {
    // Get form data
    var EmployeeID = document.getElementById("EmployeeID").value;
    var FirstName = document.getElementById("firstname").value;
    var LastName = document.getElementById("lastname").value;
    var DateOfBirth = document.getElementById("DateOfBirth").value;
    var Gender = document.getElementById("gender").value;
    var ContactNumber = document.getElementById("contactnumber").value;
    var Email = document.getElementById("email").value;
    var Address = document.getElementById("Address").value;
    var Department = document.getElementById("department").value;
    var Position = document.getElementById("position").value;
    var JoiningDate = document.getElementById("Joiningdate").value;
    var Salary = document.getElementById("salary").value;

    // Create a FormData object to send data to server
    var formData = new FormData();
    formData.append("EmployeeID", EmployeeID);
    formData.append("firstname", FirstName);
    formData.append("lastname", LastName);
    formData.append("DateOfBirth", DateOfBirth);
    formData.append("Gender", Gender);
    formData.append("contactnumber", ContactNumber);
    formData.append("email", Email);
    formData.append("Address", Address);
    formData.append("department", Department);
    formData.append("position", Position);
    formData.append("Joiningdate", JoiningDate);
    formData.append("salary", Salary);
  
    // Send form data to the server using XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "Submit.php", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Handle the server response here if needed
        console.log(xhr.responseText);
      }
    };
    xhr.send(formData);
  }
  
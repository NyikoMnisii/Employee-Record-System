from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://EmployeeDB'  # Replace with your MySQL connection string
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Employee(db.Model):
    EmployeeID = db.Column(db.Integer, primary_key=True)
    FirstName = db.Column(db.Varchar(50))
    LastName = db.Column(db.Varchar(50))
    DateOfBirth = db.Column(db.Date)
    Gender = db.Column(db.Varchar(10))
    ContactNumber = db.Column(db.Varchar(15))
    Email = db.Column(db.Varchar(100))
    Address = db.Column(db.Varchar(255))
    Department = db.Column(db.Varchar(50))
    Position = db.Column(db.Varchar(50))
    JoiningDate = db.Column(db.Date)
    Salary = db.Column(db.DECIMAL(10, 2))

# Create tables
db.create_all()

# API Endpoints

# Create Employee
@app.route('/employees', methods=['POST'])
def create_employee():
    data = request.json
    new_employee = Employee(**data)
    db.session.add(new_employee)
    db.session.commit()
    return jsonify({"message": "Employee created successfully"}), 201

# Read all employees
@app.route('/employees', methods=['GET'])
def get_all_employees():
    employees = Employee.query.all()
    result = [{"EmployeeID": emp.EmployeeID, "FirstName": emp.FirstName, "LastName": emp.LastName, "Email": emp.Email} for emp in employees]
    return jsonify(result)

# Read one employee by ID
@app.route('/employees/<int:employee_id>', methods=['GET'])
def get_employee_by_id(employee_id):
    employee = Employee.query.get(employee_id)
    if employee:
        return jsonify({"EmployeeID": employee.EmployeeID, "FirstName": employee.FirstName, "LastName": employee.LastName, "Email": employee.Email})
    else:
        return jsonify({"message": "Employee not found"}), 404

# Update employee by ID
@app.route('/employees/<int:employee_id>', methods=['PUT'])
def update_employee(employee_id):
    employee = Employee.query.get(employee_id)
    if not employee:
        return jsonify({"message": "Employee not found"}), 404

    data = request.json
    for key, value in data.items():
        setattr(employee, key, value)

    db.session.commit()
    return jsonify({"message": "Employee updated successfully"})

# Delete employee by ID
@app.route('/employees/<int:employee_id>', methods=['DELETE'])
def delete_employee(employee_id):
    employee = Employee.query.get(employee_id)
    if not employee:
        return jsonify({"message": "Employee not found"}), 404

    db.session.delete(employee)
    db.session.commit()
    return jsonify({"message": "Employee deleted successfully"})

if __name__ == '__main__':
    app.run(debug=True)

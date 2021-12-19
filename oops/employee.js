"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(_name, _department, _id) {
        this.name = _name;
        this.department = _department;
        this.id = _id;
    }
    Employee.prototype.print = function () {
        console.log(this.name + " " + this.department);
    };
    return Employee;
}());
exports["default"] = Employee;
// var emp = new Employee("Manu", "IT", 123);
// emp.print();

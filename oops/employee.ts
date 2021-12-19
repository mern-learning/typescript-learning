export default class Employee {
  name: string;
  department: string;
  id: number;

  constructor(_name, _department, _id) {
    this.name = _name;
    this.department = _department;
    this.id = _id;
  }

  print(): void {
    console.log(this.name + " " + this.department);
  }
}

// var emp = new Employee("Manu", "IT", 123);
// emp.print();


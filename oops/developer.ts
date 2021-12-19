import Employee from "./employee";
import iDeveloper from "./iDeveloper";

export default class Developer extends Employee implements iDeveloper {
  projectName: string;

  constructor(_name, _department, _id, _projectName) {
    super(_name, _department, _id);
    this.projectName = _projectName;
  }

  writeCode() {
    console.log("Writting code");
  }

  printProjectName(): void {
    console.log(this.projectName);
  }

  invite(): void {
    console.log("invited");
  }
}

var dev = new Developer("Sumi", "Dev", 111, "TS");
dev.print();
dev.writeCode();
dev.printProjectName();

class Company {
  name: string;
  type: string;
  estd: number;
  location: string;
  constructor(_name, _type, _estd, _location) {
    this.name = _name;
    this.type = _type;
    this.estd = _estd;
    this.location = _location;
  }
  samplecode() {
    console.log(`my company name is ${this.name} and here `);
  }
}
var newcom = new Company("manu", "one", 2, "berlin");
newcom.samplecode();


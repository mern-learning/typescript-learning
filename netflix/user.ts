import APIService from "./api-service";
import BaseModel from "./base-model";

export class User extends BaseModel {
  name: string;
  dateObBirth: Date;

  constructor(_id, _name, _dob) {
    super();
    this.id = _id;
    this.name = _name;
    this.dateObBirth = _dob;
  }

  add() {
    new APIService<User>().add(new User(this.id, this.name, this.dateObBirth));
  }
  list() {
    new APIService<User>().list(new User(this.id, this.name, this.dateObBirth));
  }
  show() {
    new APIService<User>().show(new User(this.id, this.name, this.dateObBirth));
  }
  update() {
    new APIService<User>().update(new User(this.id, this.name, this.dateObBirth));
  }
  delete() {
    new APIService<User>().delete(new User(this.id, this.name, this.dateObBirth));
  }
}

var user = new User(1, 'Manu', '2021');
user.add();

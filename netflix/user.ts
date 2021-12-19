import APIService from "./api-service";
import BaseModel from "./base-model";

export class User extends BaseModel {
  id: number;
  name: string;
  dateObBirth: Date;

  add() {
    new APIService<User>().add(new User());
  }
  list() {
    new APIService<User>().list(new User());
  }
  show() {
    new APIService<User>().show(new User());
  }
  update() {
    new APIService<User>().update(new User());
  }
  delete() {
    new APIService<User>().add(new User());
  }
}

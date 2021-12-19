import BaseModel from "./base-model";
import APIService from "./api-service";

export class Genre extends BaseModel {
  name: String;

  add() {
    new APIService<Genre>().add(new Genre());
  }
  list() {
    new APIService<Genre>().list(new Genre());
  }
  show() {
    new APIService<Genre>().show(new Genre());
  }
  update() {
    new APIService<Genre>().update(new Genre());
  }
  delete() {
    new APIService<Genre>().add(new Genre());
  }
}

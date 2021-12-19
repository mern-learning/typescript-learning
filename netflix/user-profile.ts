import BaseModel from "./base-model";
import { User } from "./user";
import APIService from "./api-service";

export class UserProfile extends BaseModel {
  user: User;
  name: String;
  isAgeRestricted: Boolean;

  add() {
    new APIService<UserProfile>().add(new UserProfile());
  }
  list() {
    new APIService<UserProfile>().list(new UserProfile());
  }
  show() {
    new APIService<UserProfile>().show(new UserProfile());
  }
  update() {
    new APIService<UserProfile>().update(new UserProfile());
  }
  delete() {
    new APIService<UserProfile>().add(new UserProfile());
  }
}

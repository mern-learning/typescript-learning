import BaseModel from "./base-model";

export default class APIService<Xyz extends BaseModel> {
  add(record: Xyz) {
    console.log("add record " + record);
  }
}

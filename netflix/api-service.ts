import BaseModel from "./base-model";

export default class APIService<Model extends BaseModel> {
  list(record: Model) {
    console.log("add record " + record);
  }

  show(record: Model) {
    console.log("add record " + record);
  }
  add(record: Model) {
    console.log("add record " + record);
  }

  update(record: Model) {
    console.log("add record " + record);
  }

  delete(record: Model) {
    console.log("add record " + record);
  }
}

import BaseModel from "./base-model";

export default class APIService<Model extends BaseModel> {
  list(record: Model) {
    console.log("add record " + record.id);
  }

  show(record: Model) {
    console.log("add record " + record);
  }

  add(record: Model) {
    console.log("add record " + record.id);
  }

  update(record: Model) {
    console.log("add record " + record);
  }

  delete(record: Model) {
    console.log("add record " + record);
  }
}

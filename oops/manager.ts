import IDeveloper from "./iDeveloper";

class Manager {
  developer: IDeveloper;

  scheduleMeeting() {
    console.log("schedule meeting");
    this.developer.invite();
  }
}

var manager = new Manager();
manager.scheduleMeeting();

"use strict";
exports.__esModule = true;
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.scheduleMeeting = function () {
        console.log("schedule meeting");
        this.developer.invite();
    };
    return Manager;
}());
var manager = new Manager();
manager.scheduleMeeting();

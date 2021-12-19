"use strict";
exports.__esModule = true;
var APIService = /** @class */ (function () {
    function APIService() {
    }
    APIService.prototype.list = function (record) {
        console.log("add record " + record.id);
    };
    APIService.prototype.show = function (record) {
        console.log("add record " + record);
    };
    APIService.prototype.add = function (record) {
        console.log("add record " + record.id);
    };
    APIService.prototype.update = function (record) {
        console.log("add record " + record);
    };
    APIService.prototype["delete"] = function (record) {
        console.log("add record " + record);
    };
    return APIService;
}());
exports["default"] = APIService;

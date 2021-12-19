"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var employee_1 = require("./employee");
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(_name, _department, _id, _projectName) {
        var _this = _super.call(this, _name, _department, _id) || this;
        _this.projectName = _projectName;
        return _this;
    }
    Developer.prototype.writeCode = function () {
        console.log("Writting code");
    };
    Developer.prototype.printProjectName = function () {
        console.log(this.projectName);
    };
    Developer.prototype.invite = function () {
        console.log("invited");
    };
    return Developer;
}(employee_1["default"]));
exports["default"] = Developer;
var dev = new Developer("Sumi", "Dev", 111, "TS");
dev.print();
dev.writeCode();
dev.printProjectName();

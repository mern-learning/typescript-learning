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
exports.User = void 0;
var api_service_1 = require("./api-service");
var base_model_1 = require("./base-model");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(_id, _name, _dob) {
        var _this = _super.call(this) || this;
        _this.id = _id;
        _this.name = _name;
        _this.dateObBirth = _dob;
        return _this;
    }
    User.prototype.add = function () {
        new api_service_1["default"]().add(new User(this.id, this.name, this.dateObBirth));
    };
    User.prototype.list = function () {
        new api_service_1["default"]().add(new User(this.id, this.name, this.dateObBirth));
    };
    User.prototype.show = function () {
        new api_service_1["default"]().add(new User(this.id, this.name, this.dateObBirth));
    };
    User.prototype.update = function () {
        new api_service_1["default"]().add(new User(this.id, this.name, this.dateObBirth));
    };
    User.prototype["delete"] = function () {
        new api_service_1["default"]().add(new User(this.id, this.name, this.dateObBirth));
    };
    return User;
}(base_model_1["default"]));
exports.User = User;
var user = new User(1, 'Manu', '2021');
user.add();

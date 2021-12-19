var Company = /** @class */ (function () {
    function Company(_name, _type, _estd, _location) {
        this.name = _name;
        this.type = _type;
        this.estd = _estd;
        this.location = _location;
    }
    Company.prototype.samplecode = function () {
        console.log("my company name is ".concat(this.name, " and here "));
    };
    return Company;
}());
var newcom = new Company("manu", "one", 2, "berlin");
newcom.samplecode();

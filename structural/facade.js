var PlumbingSysthem = /** @class */ (function () {
    function PlumbingSysthem() {
    }
    PlumbingSysthem.prototype.setPressure = function (v) { };
    PlumbingSysthem.prototype.turnOn = function () { };
    PlumbingSysthem.prototype.turnOff = function () { };
    return PlumbingSysthem;
}());
var ElectricalSysthem = /** @class */ (function () {
    function ElectricalSysthem() {
    }
    ElectricalSysthem.prototype.setVoltage = function (v) { };
    ElectricalSysthem.prototype.turnOn = function () { };
    ElectricalSysthem.prototype.turnOff = function () { };
    return ElectricalSysthem;
}());
var House = /** @class */ (function () {
    function House() {
        this.plumbing = new PlumbingSysthem();
        this.electrical = new ElectricalSysthem();
    }
    House.prototype.turnOnSysthems = function () {
        this.plumbing.setPressure(500);
        this.plumbing.turnOn();
        this.electrical.setVoltage(130);
        this.electrical.turnOn();
    };
    House.prototype.shutDown = function () {
        this.plumbing.turnOff();
        this.electrical.turnOff();
    };
    return House;
}());
var client = new House();
client.turnOnSysthems();
client.shutDown();

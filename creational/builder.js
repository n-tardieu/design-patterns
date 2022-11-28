"use strict";
// class Plane {
//     constructor(
//         public name: string,
//         public motor: boolean,
//         public wings: boolean,
//         public pilote: boolean
//     ) {}
// }
exports.__esModule = true;
// new Plane('A320', true, true, true)
var Plane = /** @class */ (function () {
    function Plane(name, motor, wings, pilote) {
        this.name = name;
        this.motor = motor;
        this.wings = wings;
        this.pilote = pilote;
    }
    Plane.prototype.addMotor = function () {
        this.motor = true;
        return this; // return object
    };
    Plane.prototype.addWings = function () {
        this.wings = true;
        return this; // return object
    };
    Plane.prototype.addPilote = function () {
        this.pilote = true;
        return this; // return object
    };
    return Plane;
}());
var myPlane = new Plane('A321');
console.log(myPlane);
myPlane
    .addPilote()
    .addMotor()
    .addWings();
console.log(myPlane);

/**
 * First idea
 */
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
var Human = /** @class */ (function () {
    function Human() {
    }
    return Human;
}());
var Dev = /** @class */ (function (_super) {
    __extends(Dev, _super);
    function Dev() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dev;
}(Human));
// but not work for complexe code
var dev = {
    name: 'no name',
    coding: function () {
        return '<h1>Hello word</h1>';
    }
};
/**
 * Prototype solution
 */
var human = Object.create(dev, { name: { value: 'Matthew' } });
console.log(human.name);
//  console.log(human.coding());
// we can always get prototypes of object
var proto = human.__proto__;
// same result but better way
//const proto = Object.getPrototypeOf(human)
//console.log(proto);

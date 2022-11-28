var os = 'ios';
var IOSButton = /** @class */ (function () {
    function IOSButton() {
    }
    return IOSButton;
}());
var AndroidButton = /** @class */ (function () {
    function AndroidButton() {
    }
    return AndroidButton;
}());
// without factory Pattern
var customButton = os === 'ios' ? new IOSButton() : new AndroidButton();
var customButton2 = os === 'ios' ? new IOSButton() : new AndroidButton();
var customButton3 = os === 'ios' ? new IOSButton() : new AndroidButton();
// with factory
var ButtonFactory = /** @class */ (function () {
    function ButtonFactory() {
    }
    ButtonFactory.prototype.createButton = function (os) {
        if (os === 'ios') {
            return new IOSButton();
        }
        else {
            return new AndroidButton();
        }
    };
    return ButtonFactory;
}());
var factory = new ButtonFactory();
var btn1 = factory.createButton(os);

var Settings = /** @class */ (function () {
    function Settings() {
        this.mode = 'dark';
    }
    //  private constructor() { }
    Settings.getInstance = function () {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    };
    return Settings;
}());
/**
 * The client code.
 */
function clientCode() {
    // const s1 = Settings.getInstance();
    // const s2 = Settings.getInstance();
    var s1 = new Settings();
    var s2 = new Settings();
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    }
    else {
        console.log('Singleton failed, variables contain different instances.');
    }
}
clientCode();

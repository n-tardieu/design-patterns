class Settings {
    static instance: Settings;
    public readonly mode = 'dark'

    private constructor() { }

    static getInstance(): Settings {
        if (!Settings.instance) {
            Settings.instance = new Settings(); // lazy initialization
        }

        return Settings.instance
    }
}
/**
 * The client code.
 */
function clientCode() {
    const s1 = Settings.getInstance();
    const s2 = Settings.getInstance();

    // const s1 = new Settings();
    // const s2 = new Settings();


    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();

// this works too 
const settings = {
    dark: 'true'
}

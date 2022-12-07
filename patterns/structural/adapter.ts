class Iphone {
    usbC() {
        console.log("Charging with usb C");
    }
}

class AndroidPhone {
    usb() {
        console.log("Charging..");
    }
}

interface AdapterIphoneInterface {
    usb(): undefined
}

class AdapterIphone {
    private iphone
    constructor(iphone: Iphone) {
        this.iphone = iphone
    }

    usb() {
        console.log("Adapter plugged !");
        this.iphone.usbC()
    }
}

const myPhone = new Iphone()
const adapter = new AdapterIphone(myPhone)
adapter.usb()


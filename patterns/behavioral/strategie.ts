interface vendorInterface {
    sellCoffee(): void
}

class Vendor1 implements vendorInterface {
    sellCoffee() {
        return 150
    }
}

class Vendor2 implements vendorInterface {
    sellCoffee() {
        return 100
    }
}

class Vendor3 implements vendorInterface {
    sellCoffee() {
        return 120
    }
}

class Strategy {
    coffeeShope!: vendorInterface

    setStrategy(coffeeShope: vendorInterface) {
        this.coffeeShope = coffeeShope
    }

    sellCoffe() {
        return this.coffeeShope?.sellCoffee()
    }
}

const vendor1 = new Vendor1()
const coffeeShope = new Strategy()
coffeeShope.setStrategy(vendor1)

console.log(coffeeShope.sellCoffe());

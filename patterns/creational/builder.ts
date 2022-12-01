// class Plane {
//     constructor(
//         public name: string,
//         public motor: boolean,
//         public wings: boolean,
//         public pilote: boolean
//     ) {}
// }

// new Plane('A320', true, true, true)

class Plane {
    constructor(
        public name?: string,
        public motor?: boolean,
        public wings?: boolean,
        public pilote?: boolean
    ) { }

    addMotor() {
        this.motor = true
        return this // return object
    }

    addWings() {
        this.wings = true
        return this // return object

    }

    addPilote() {
        this.pilote = true
        return this // return object
    }

}

const myPlane = new Plane('A321')
console.log(myPlane);

myPlane
    .addPilote()
    .addMotor()
    .addWings()


console.log(myPlane);

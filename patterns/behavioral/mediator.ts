class Airplane {

    name!: string;
    land!: boolean;

    constructor(name: string) {
        this.name = name
        this.land = false
    }

    onLand() {
        this.land = true
    }
}

class Runway {
    name!: string;
    clear!: boolean;

    constructor(name: string) {
        this.name = name
        this.clear = true
    }

    setNotClear() {
        this.clear = false
    }
}

interface interfaceTowerMediator {
    clearForLanding(runway: Runway, plane: Airplane): void
}

// mediator
class TowerMediator implements interfaceTowerMediator {

    clearForLanding(runway: Runway, airplane: Airplane) {
        if (runway.clear) {
            console.log(`Landing ${runway.name} was clear for Plane ${airplane.name}`);
            runway.setNotClear()
            airplane.onLand()
        } else {
            console.log(`!!! WARNING !!! -> Landing ${runway.name} was not clear for Plane ${airplane.name} `);
        }
    }
}

const runway25A = new Runway("runway25A")
const runway25B = new Runway("runway25B")
const runway7 = new Runway("runway7")

const a = new Airplane("A380")
const b = new Airplane("B381")
const c = new Airplane("C382")

const mediator = new TowerMediator()
mediator.clearForLanding(runway25A, a)
mediator.clearForLanding(runway7, b)
mediator.clearForLanding(runway25A, c)
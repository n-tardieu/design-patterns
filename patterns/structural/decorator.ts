// Exemple 1 :
interface Cake {
    cook(): string;
    cost(): number;
}

class ConcreteCake implements Cake {
    public cook(): string {
        return 'Cake';
    }
    public cost(): number {
        return 5;
    }
}

class Decorator implements Cake {
    protected component: Cake;

    constructor(component: Cake) {
        this.component = component;
    }
    public cook(): string {
        return this.component.cook();
    }

    public cost(): number {
        return this.component.cost()
    }
}

class ConcreteDecoratorA extends Decorator {

    public cook(): string {
        return `${super.cook()} + supp. chocolat`;
    }
    public cost(): number {
        return (super.cost() + 2)
    }
}

class ConcreteDecoratorB extends Decorator {
    public cook(): string {
        return `${super.cook()} + supp. Matcha`;
    }
    public cost(): number {
        return (super.cost() + 5)
    }
}

function makeCake(cake: Cake) {
    return { cook: cake.cook(), cost: cake.cost() }
}


const concreteCake = new ConcreteCake();
console.log('Client: I\'ve got a simple cake:');
const simpleCake = makeCake(concreteCake);
console.log(`Recipe: ${simpleCake.cook}`);
console.log(`Cost: ${simpleCake.cost}`);
console.log(``);



const cakeWithDecorator1 = new ConcreteDecoratorA(concreteCake);
const cakeWithDecorator2 = new ConcreteDecoratorB(cakeWithDecorator1);

console.log('Client: Now I\'ve got a decorated cake with two decorator:');
const cakeCustom = makeCake(cakeWithDecorator2);
console.log(`Recipe: ${cakeCustom.cook}`);
console.log(`Cost: ${cakeCustom.cost}`);


// Exemple 2 without interface defines operations that can be altered by decorators.: 
class CupCake {
    public flavour
    public color;
    public cost

    constructor(flavour: 'vanilla' | 'chocolate', color: string) {
        this.flavour = flavour;
        this.color = color;
        this.cost = 3;
    }
}

//decorator 1
const addSprinkles = (cupcake: CupCake) => {
    const cost = cupcake.cost + 1;
    return { ...cupcake, hasSprinkles: true, cost };
}

//decorator 2
const addSkittles = (cupcake: CupCake) => {
    const cost = cupcake.cost + 2;
    return { ...cupcake, hasSprinkles: true, cost };
}

const vanilla = new CupCake('vanilla', 'blue');
const sprinkledVanilla = addSprinkles(vanilla);
const skittleVanilla = addSkittles(vanilla);

const fullDecoratedVanilla = addSkittles(sprinkledVanilla); //A combination of both sprinke decorator and skittle decorator.
// console.log(vanilla.cost); //3
// console.log(sprinkledVanilla.cost); //4
// console.log(skittleVanilla.cost); //5
// console.log(fullDecoratedVanilla.cost); //5


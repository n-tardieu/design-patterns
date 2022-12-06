// Go idea but not resolve all solution
class Human { }

// not work for complexe code, you depend class
class Dev extends Human { }


/**
 * Prototype solution
 */

const dev = {
    name: 'no name',
    coding() {
        return '<h1>Hello word</h1>'
    }
}

const human = Object.create(dev, { name: { value: 'Matthew' } });

console.log(human.name);
//  console.log(human.coding());

// we can always get prototypes of object
const proto = human.__proto__;

// same result but better way
//const proto = Object.getPrototypeOf(human)
//console.log(proto);

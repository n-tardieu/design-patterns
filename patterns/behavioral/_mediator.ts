// Exemple 1 :
class Airplane {
    land() { }
}

class Runway {
    clear!: boolean;
}

// mediator
class Tower {
    clearForLanding(runway: Runway, plane: Airplane){
        if(runway.clear){
            console.log(`Plane ${plane} is clear for landing`);
        }
    }
}

const runway25A = new Runway()
const runway25B = new Runway()
const runway7 = new Runway()

const a = new Airplane()
const b = new Airplane()
const c = new Airplane()


// Exemple 2 : 

import express from 'express';
const app = express();

function logger(req: express.Request, res: express.Response, next: express.NextFunction){
    console.log('Resquest ', req.method);
}

app.use(logger) // <= logger middleware
interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}
class ConcreteSubject implements Subject {

    public state!: number;
    private observers: Observer[] = [];

    /**
     * The subscription management methods.
     */
    public subscribe(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log(`Subject: Observer ${observer.name} has been subscribeed already.`);
        }

        console.log(`Subject : ${observer.name} -> subscribeed an observer.`);
        this.observers.push(observer);
    }

    /**
    * Stop an observer
    */
    public unsubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log(`Subject: ${observer.name} -> unsubscribeed an observer.`);
    }

    /**
     * Trigger an update in each subscriber.
     */
    public notify(): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    /**
     * Usually, the subscription logic is only a fraction of what a Subject can
     * really do. Subjects commonly hold some important business logic, that
     * triggers a notification method whenever something important is about to
     * happen (or after it).
     */
    public someBusinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
       // this.state = Math.floor(Math.random() * 2 + 1);
        this.state = 0

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

/**
 * The Observer interface declares the update method, used by subjects.
 */
interface Observer {
    // Receive update from subject.
    update(subject: Subject): void;

    // for demo
    name: string
}

/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * subscribeed to.
 */
class Toaster implements Observer {
    name = "Toaster"
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && (subject.state == 0 || subject.state == 1)) {
            console.log('Toaster: Reacted to the event.');
        } else {
            console.log('Toaster: No reacted to the event.');
        }
    }
}

class Logger implements Observer {
    name = "Logger"

    public update(subject: Subject): void {

        if (subject instanceof ConcreteSubject && (subject.state == 0 || subject.state == 2)) {
            console.log('Logger: Reacted to the event.');
        } else {
            console.log('Logger: No reacted to the event.');
        }
    }
}

/**
 * The client code.
 */

const subject = new ConcreteSubject();

const toaster = new Toaster();
subject.subscribe(toaster);

const logger = new Logger();
subject.subscribe(logger);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.unsubscribe(toaster);

subject.someBusinessLogic();
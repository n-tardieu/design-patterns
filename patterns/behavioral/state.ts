// without state

// class Developer {
//     think(mood: string) {
//         switch (mood) {
//             case 'happy':
//                 return 'I am happy';
//             case 'Sad':
//                 return 'I am sad';
//             default:
//                 return 'I am neutral'
//         }
//     }
// }

interface State {
    think(): string;
}

class Developer {
    private state: State;

    constructor() {
        this.state = new HappyState();
    }

    think() {
        return this.state.think()
    }

    changeState(state: State) {
        this.state = state
    }
}

class HappyState implements State {
    think(): string {
        return 'I am happy !';
    }

}

class SadState implements State {
    think(): string {
        return 'I am sad !';
    }
}

let user1 = new Developer()
console.log("Dev said : ", user1.think());
console.log('..');

user1.changeState(new SadState())
console.log("Dev said after changeState : ", user1.think());
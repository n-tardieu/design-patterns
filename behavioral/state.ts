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

class Developer {
    state: State;

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

interface State {
    think(): string;
}

class HappyState implements State {
    think(): string {
        return 'I am happy';
    }

}

class SadState implements State {
    think(): string {
        return 'I am sad';
    }
}
import { Game } from './Game';

let _APP = null;

class SnakeJS extends Game {

    constructor() {
        super();
    }

    Play() {
        setInterval(() => {
            this.Game();
        }, 50)
    }

}

function Main() {
    _APP = new SnakeJS();
    _APP.Play();
}

Main();
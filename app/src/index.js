import { Game } from './Game';

let _APP = null;

class Snake extends Game {

    constructor() {
        super();
    }

}

function _Main() {
    _APP = new Snake();
}

_Main();
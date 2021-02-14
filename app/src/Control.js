export class Control {

    constructor() {
        this._DOWN = { x: 0, y: 10 };
        this._UP = { x: 0, y: -10 };
        this._RIGHT = { x: 10, y: 0 };
        this._LEFT = { x: -10, y: 0 };
        this._currentDirection = this._RIGHT;
    }

    EventHandler() {
        document.addEventListener('keydown', (event) => {
            switch(event.key) {
                case 'ArrowUp':
                    this._currentDirection = this._UP;
                    break;
                case 'ArrowDown':
                    this._currentDirection = this._DOWN;
                    break;
                case 'ArrowLeft':
                    this._currentDirection = this._LEFT;
                    break;
                case 'ArrowRight':
                    this._currentDirection = this._RIGHT;
                    break;
                default:
                    break;
            }
        });
    }

    GetCurrentDirection() {
        return this._currentDirection;
    }

}
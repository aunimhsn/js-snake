import { MathHelper } from './MathHelper';
import { Draw } from './Draw';

export class Snake {

    constructor() {
        this._x = MathHelper.GetRandomInt(0, 40) * 10;
        this._y = MathHelper.GetRandomInt(0, 40) * 10;
        this._size = 1;

        this._Draw = new Draw(document.getElementById('snake'));
    }

    DrawConfig() {
        return {
            color: '#333333', 
            x: this._x,
            y: this._y, 
            width: 10, 
            height: 10
        }
    }

    /**
     * Coordinate representing the snake direction
     * @param {object} coord { x: number, y: number }
     * 
     */
    Move(coord) {
        this._Draw.ClearRectangle(this.DrawConfig());

        this._x += coord.x;
        this._y += coord.y;

        // Allow the snake to go throught the canvas size
        this._x = (this._x === 400) ? 0 : this._x;
        this._y = (this._y === 400) ? 0 : this._y;
        this._x = (this._x === -10) ? 390 : this._x;
        this._y = (this._y === -10) ? 390 : this._y;
        
        this._Draw.DrawRectangle(this.DrawConfig());
    }

}
import { MathHelper } from './MathHelper';

export class Candy {

    constructor() {
        this._x = MathHelper.GetRandomInt(0, 40) * 10;
        this._y = MathHelper.GetRandomInt(0, 40) * 10;
    }

    DrawConfig() {
        return {
            color: '#2cdb5d', 
            x: this._x,
            y: this._y, 
            width: 10, 
            height: 10
        }
    }

    /**
     * 
     * 
     * @param {[{ x, y }]} snake current snake position
     */
    ResetCandyPosition(snake) {
        this._x = MathHelper.GetRandomInt(0, 40) * 10;
        this._y = MathHelper.GetRandomInt(0, 40) * 10;

        for(let i = 0 ; i < snake.length ; i++) {
            if ((this._x == snake[i].x) && (this._y == snake[i].y)) {
                this._x = MathHelper.GetRandomInt(0, 40) * 10;
                this._y = MathHelper.GetRandomInt(0, 40) * 10;

                i = 0; // Reset position until the candy is on the snake
            }
        }
    }

}
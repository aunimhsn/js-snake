import { MathHelper } from './MathHelper';
import { Draw } from './Draw';
import { Candy } from './Candy';

export class Snake {

    constructor() {
        this._x = MathHelper.GetRandomInt(0, 40) * 10;
        this._y = MathHelper.GetRandomInt(0, 40) * 10;
        this._size = 2;
        this._tail = [{ x: this._x - 10,  y: this._y - 0 }]; // Tail logic
        this._snake = this._tail.concat([{ x: this._x, y: this._y }]); // Don't draw candy on the snake !

        this._Draw = new Draw(document.getElementById('snake'));
    }

    DrawHead() {
        return {
            color: '#333333', 
            x: this._x,
            y: this._y, 
            width: 10, 
            height: 10
        }
    }

    /**
     * 
     * @returns Array
     */
    DrawTail() {
        let drawTail = [];

        this._tail.forEach((elem) => {
            drawTail.push({
                color: '#999999', 
                x: elem.x,
                y: elem.y, 
                width: 10, 
                height: 10
            });
        });

        return drawTail;
    }

    /**
     * Move the entire snake
     * 
     * Coordinate representing the snake direction
     * @param {object} coord { x: number, y: number }
     */
    Move(coord) {
        this.MoveHead(coord);
        this.MoveTail(coord);
    }

    /**
     * Coordinate representing the snake direction
     * @param {object} coord { x: number, y: number }
     * 
     */
    MoveHead(coord) {
        this._Draw.ClearRectangle(this.DrawHead());

        this._x += coord.x;
        this._y += coord.y;

        this._Draw.DrawRectangle(this.DrawHead());
    }

    MoveTail(coord) {
        if (this._size > 1) {
            this._Draw.ClearRectangle(this._tail.pop());
            this._tail.unshift({ x: this._x - coord.x,  y: this._y - coord.y });

            let drawTail = this.DrawTail();
            drawTail.forEach((elem) => {
                this._Draw.DrawRectangle(elem);
            })
        }
    }

    /**
     * Candy
     * @param {object} candy refer to Candy.js
     * @param @param {object} coord { x: number, y: number } Coordinate representing the snake direction
     * 
     */
    Eat(candy, coord) {
        // Detect collision
        if ((this._x === candy._x) && (this._y === candy._y)) {
            this._size++;
            this._tail.push({ x: this._x - coord.x,  y: this._y - coord.y });

            candy.ResetCandyPosition(this._snake);
            this._Draw.DrawRectangle(candy.DrawConfig());

            return true;
        }

        return false;
    }

    /**
     * 
     * 
     */
    HitTail() {
        let result = false;
        this._tail.forEach((elem) => {
            if ((elem.x === this._x) && (elem.y === this._y)) {
                result =  true;
            }
        })

        return result;
    }

    /**
     * 
     * 
     */
    HitCanvasBorder() {
        return ((this._x < 0) || (this._x > 390) || (this._y < 0) || (this._y > 390))
    }

}
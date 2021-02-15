import { MathHelper } from './MathHelper';
import { Draw } from './Draw';
import { Candy } from './Candy';

export class Snake {

    constructor() {
        this._x = MathHelper.GetRandomInt(0, 40) * 10;
        this._y = MathHelper.GetRandomInt(0, 40) * 10;
        this._size = 2;
        this._pathHistory = [{ x: this._x - 10,  y: this._y - 0 }]; // Tail logic

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
        let tail = [];

        this._pathHistory.forEach((elem) => {
            tail.push({
                color: '#999999', 
                x: elem.x,
                y: elem.y, 
                width: 10, 
                height: 10
            });
        });

        return tail;
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

        // Allow the snake to go throught the canvas size
        this._x = (this._x === 400) ? 0 : this._x;
        this._y = (this._y === 400) ? 0 : this._y;
        this._x = (this._x === -10) ? 390 : this._x;
        this._y = (this._y === -10) ? 390 : this._y;

        this._Draw.DrawRectangle(this.DrawHead());
    }

    MoveTail(coord) {

        if (this._size > 1) {
            this._Draw.ClearRectangle(this._pathHistory.pop());
            // let erase = this._pathHistory.pop();
            this._pathHistory.unshift({ x: this._x - coord.x,  y: this._y - coord.y });
            console.log(this._pathHistory);


            let tail = this.DrawTail();
            tail.forEach((elem) => {
                this._Draw.DrawRectangle(elem);
            })
                
    
        }

        // this._Draw.DrawRectangle(this.DrawTrace(this._pathHistory[this._pathHistory.length - 1]));
        

        // if (this._pathHistory.length) {
        //     let tail = this.DrawTail();
        //     this._Draw.ClearRectangle(tail[0])
        //     this._pathHistory[0].x += coord.x;
        //     this._pathHistory[0].y += coord.y;
    
        //     // Allow the snake to go throught the canvas size
        //     this._pathHistory[0].x = (this._pathHistory[0].y === 400) ? 0 : this._pathHistory[0].x;
        //     this._pathHistory[0].y = (this._pathHistory[0].y === 400) ? 0 : this._pathHistory[0].y;
        //     this._pathHistory[0].x = (this._pathHistory[0].x === -10) ? 390 : this._pathHistory[0].x;
        //     this._pathHistory[0].y = (this._pathHistory[0].y === -10) ? 390 : this._pathHistory[0].y;
    
        //     this._Draw.DrawRectangle(tail[0])
        // }
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
            this._pathHistory.push({ x: this._x - coord.x,  y: this._y - coord.y });

            candy.ResetCandyPosition();
            this._Draw.DrawRectangle(candy.DrawConfig());
        }
    }


}
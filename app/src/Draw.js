import { MathHelper } from './MathHelper';

export class Draw {

    constructor(canvas) {
        this._canvas = canvas;
        this._ctx = canvas.getContext('2d');
    }

    DrawRectangle(params) {
        this._ctx.beginPath();
        this._ctx.fillStyle = params.color;
        this._ctx.rect(params.x, params.y, params.width, params.height);
        this._ctx.fill();
        this._ctx.closePath();
    }

    ClearRectangle(params) {
        this._ctx.beginPath();
        this._ctx.fillStyle = '#ffffff';
        this._ctx.rect(params.x, params.y, 10, 10);
        this._ctx.fill();
        this._ctx.closePath();
    }

    Background() {
        return {
            color: '#ffffff', 
            x: 0,
            y: 0, 
            width: 400, 
            height: 400
        }
    }

}
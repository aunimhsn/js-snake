export class Draw {

    constructor(canvas) {
        this._canvas = canvas;
        this._ctx = canvas.getContext('2d');
    }

    Draw(params) {
        this._ctx.beginPath();
        this._ctx.fillStyle = params.color;
        this._ctx.rect(params.x, params.y, params.width, params.height);
        this._ctx.fill();
    }

}
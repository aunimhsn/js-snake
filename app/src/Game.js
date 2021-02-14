import { Draw } from './Draw';
import { Snake } from './Snake';

export class Game {

    constructor() {
        this._Initialize()
        
        this._Draw = new Draw(this._canvas);
        this._Draw.Draw({
            color: '#ffffff', 
            x: 0, 
            y: 0, 
            width: this._canvasWidth, 
            height: this._canvasHeight
        });

        this._Draw.Draw(Snake.GetConfig());
    }

    _Initialize() {
        this._canvas = document.getElementById('snake');
        this._canvasWidth = this._canvas.width;
        this._canvasHeight = this._canvas.height;
        this._ctx = this._canvas.getContext('2d');
        this._scale = 10;
        this._rows = this._canvasHeight / this._scale;
        this._columns = this._canvasWidth / this._scale;
    }

}
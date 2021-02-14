import { Control } from './Control';
import { Draw } from './Draw';
import { Snake } from './Snake';

export class Game {

    constructor() {
        // Canvas
        this._Draw = new Draw(document.getElementById('snake'));

        // Background
        this._Draw.DrawRectangle(this._Draw.Background())

        // Snake
        this._Snake = new Snake();
        this._Draw.DrawRectangle(this._Snake.DrawConfig());

        // Control
        this._Control = new Control();
        this._Control.EventHandler();
    }

    Game() {
        this._Snake.Move(this._Control.GetCurrentDirection());
    }

}
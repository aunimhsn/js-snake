import { Control } from './Control';
import { Draw } from './Draw';
import { Snake } from './Snake';
import { Candy } from './Candy';

export class Game {

    constructor() {
        // Canvas
        this._Draw = new Draw(document.getElementById('snake'));

        // Background
        this._Draw.DrawRectangle(this._Draw.Background())

        // Control
        this._Control = new Control();
        this._Control.EventHandler();

        // Snake
        this._Snake = new Snake();
        this._Draw.DrawRectangle(this._Snake.DrawHead());

        // Candy
        this._Candy = new Candy();
        this._Draw.DrawRectangle(this._Candy.DrawConfig());
    }

    Restart() {
        // Background
        this._Draw.DrawRectangle(this._Draw.Background())

        // Control
        this._Control = new Control();
        this._Control.EventHandler();

        // Snake
        this._Snake = new Snake();
        this._Draw.DrawRectangle(this._Snake.DrawHead());

        // Candy
        this._Candy = new Candy();
        this._Draw.DrawRectangle(this._Candy.DrawConfig());
    }

    Game() {
        this._Snake.Move(this._Control.GetCurrentDirection());
        this._Snake.Eat(this._Candy, this._Control.GetCurrentDirection());
        
        // Lose conditions... 
        if (this._Snake.HitTail() 
         || this._Snake.HitCanvasBorder()) {
            this.Restart();
        }
    }



}
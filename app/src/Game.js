import { Control } from './Control';
import { Draw } from './Draw';
import { Snake } from './Snake';
import { Candy } from './Candy';

export class Game {

    constructor() {
        // Canvas
        this._Draw = new Draw(document.getElementById('snake'));

        // Score
        this._Score = 0;

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
        // Score
        this._Score = 0;

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
        
        if(this._Snake.Eat(this._Candy, this._Control.GetCurrentDirection())) {
            this._Score++;
        }
        
        // Lose conditions... 
        if (this._Snake.HitTail() 
         || this._Snake.HitCanvasBorder()) {

            // Saving high-score
            if ((window.localStorage.getItem('highScore') === null)
              || this._Score > window.localStorage.getItem('highScore')) {
                window.localStorage.setItem('highScore', this._Score);
            }

            this.Restart();
        }

        document.querySelector('.score-value').innerHTML = this._Score;
        document.querySelector('.high-score-value').innerHTML = window.localStorage.getItem('highScore');

    }

}
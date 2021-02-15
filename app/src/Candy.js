import { MathHelper } from './MathHelper';

export class Candy {

    constructor() {
        this._x = MathHelper.GetRandomInt(0, 40) * 10;
        this._y = MathHelper.GetRandomInt(0, 40) * 10;
    }

    DrawConfig() {
        return {
            color: '#0e85cf', 
            x: this._x,
            y: this._y, 
            width: 10, 
            height: 10
        }
    }

    ResetCandyPosition() {
        this._x = MathHelper.GetRandomInt(0, 40) * 10;
        this._y = MathHelper.GetRandomInt(0, 40) * 10;
    }

}
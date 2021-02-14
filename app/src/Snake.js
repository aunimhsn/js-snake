import { MathHelper } from './MathHelper';

export class Snake {

    static GetConfig() {
        return {
            color: '#333333', 
            x: MathHelper.GetRandomInt(0, 40) * 10,
            y: MathHelper.GetRandomInt(0, 40) * 10, 
            width: 10, 
            height: 10
        }
    };

}
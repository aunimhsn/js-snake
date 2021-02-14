export class MathHelper {

    constructor() {

    }

    /**
     * 
     * @param {number} min Minimum value is inclusive
     * @param {number} max Maximum Value is exclusive
     */
    static GetRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min) + min);
    }

}
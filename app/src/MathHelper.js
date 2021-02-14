export class MathHelper {

    constructor() {

    }

    /**
     * 
     * @param { Minimum value is inclusive } min 
     * @param { Maximum value is exclusive } max 
     */
    static GetRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min) + min);
    }

}
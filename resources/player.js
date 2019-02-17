/**
 * Объект игрока
 * @type {{move(*): void, x: number, y: number}}
 */
let player = {
    x: config.nRows/2,
    y: config.nColumns/2,
    /**
     * Передвигает игрока
     * @param nextPoint объект новых координат игрока
     */
    move(nextPoint) {
        if (nextPoint.x < 0 || nextPoint.y < 0 || nextPoint.y >= config.nRows || nextPoint.x >= config.nColumns ) {
            console.log("Нипайду туда :(");
        } else {
            this.x = nextPoint.x;
            this.y = nextPoint.y;
        }
    }
};

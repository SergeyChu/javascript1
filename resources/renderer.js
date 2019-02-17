/**
 * Объект отрисовки карты
 * @type {{map: array, render(): void}}
 */
let renderer = {
    /**
     * Метод отрисовки карты
     */
    render() {

        let content = "";
        for(let i = 0; i < config.nRows; i++) {
            content += "<tr>"
            for (let j = 0; j < config.nColumns; j++) {
                if (player.x == j && player.y == i) {
                    content += "<td>X</td>";
                } else {
                    content += "<td>O</td>";
                }
            }
            content += "</tr>";
        }
        document.getElementById("gTableID").innerHTML = content;

    },

    clear() {
        console.clear();
        this.map = '';
    }
};

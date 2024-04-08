
class Sketch {
    constructor(container) {
        this.canvas = document.createElement("canvas");
        console.log(container.width)
        this.canvas.style = `
            width: 90%;
            margin: 10px;
            box-shadow: 2px 2px 10px black;
            background-color: aliceblue;
            flex: 1;
        `
        container.appendChild(this.canvas);
        this.paths = [];
        this.drawing = false;
    }

    #addEvenListeners() {
        this.canvas.onmousedown = (e) => {
            const mouse = this.#getMouse(e);
            this.paths.push(mouse);
            this.drawing = true;
        }
        this.canvas.onmousemove = (e) => {
            if (this.drawing) {
                const mouse = this.#getMouse(e);
                const lastPath = this.paths[this.paths.length - 1];
                lastPath.push(mouse);
            }
        }
        document.onmouseUp = (e) => {
            this.drawing = false;
        }
    }


    #getMouse = (evt) => {
        const rect = this.canvas.getBoundingClientRect();
        return [
            Math.round(evt.clientX - rect.left),
            Math.round(evt.clientY - rect.top)
        ];
    }

}
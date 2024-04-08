
class Sketch {
    constructor(container, size = 500) {

        this.undoBtn = document.createElement("button");
        this.undoBtn.innerHTML = "UNDO";
        container.appendChild(this.undoBtn);
        this.undoBtn.disabled = true;

        this.canvas = document.createElement("canvas");
        this.canvas.width = container.clientWidth;
        this.canvas.height = container.clientHeight - 100;
        this.canvas.style = `
            margin: 10px;
            box-shadow: 2px 2px 10px black;
            background-color: aliceblue;
        `;
        container.appendChild(this.canvas);
        this.paths = [];
        this.drawing = false;
        this.ctx = this.canvas.getContext('2d');

        this.#reset();
        this.#addEvenListeners();
    }

    #addEvenListeners() {
        this.canvas.onmousedown = (e) => {
            const mouse = this.#getMouse(e);
            this.paths.push([mouse]);
            this.drawing = true;
        }
        this.canvas.onmousemove = (e) => {
            if (this.drawing) {
                const mouse = this.#getMouse(e);
                const lastPath = this.paths[this.paths.length - 1];
                lastPath.push(mouse);
                this.#redraw();
            }
        }

        document.onmouseup = (e) => {
            this.drawing = false;
        }

        this.canvas.ontouchstart = (e) => {
            const loc = e.touches[0];
            this.canvas.onmousedown(loc);
        }

        this.canvas.ontouchmove = (e) => {
            const loc = e.touches[0];
            this.canvas.onmousemove(loc);
        }

        document.ontouchend = () => {
            document.onmouseup();
        }

        this.undoBtn.onclick = () => {
            this.paths.pop();
            this.#redraw();
        }
    }

    #redraw() {
        this.ctx.clearRect(0, 0,
            this.canvas.width, this.canvas.height);
        draw.paths(this.ctx, this.paths);
        if (this.paths.length > 0) {
            this.undoBtn.disabled = false;
        } else {
            this.undoBtn.disabled = true;
        }
    }

    #reset() {
        this.paths = [];
        this.isDrawing = false;
        this.#redraw();
    }

    #getMouse = (evt) => {
        const rect = this.canvas.getBoundingClientRect();
        return [
            Math.round(evt.clientX - rect.left),
            Math.round(evt.clientY - rect.top)
        ];
    }

}
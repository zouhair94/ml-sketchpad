
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
    }

}
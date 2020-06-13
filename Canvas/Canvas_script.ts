namespace L08_Canvas {
    document.addEventListener("DOMContentLoaded", init);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    interface Canvas {
        x: number;
        y: number;
        width: number;
        height: number;
    }

    interface Point {
        x: number;
        y: number;
    }
    
    function generateRandomCluster(_area: Canvas, _count: number): Point[] {
        let returnValue = new Array();
        for (let i: number = 0; i < _count; i++) {
            let newPoint: Point = {
                x: Math.random() * _area.width + _area.x,
                y: Math.random() * _area.height + _area.y
            };
            returnValue.push(newPoint);
        }
        return returnValue;
    }
    function init(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();


        let areaHumanCell: Canvas = {
            x: 0, y: 50, width: window.innerWidth, height: window.innerHeight / 3
        };
        let humanCellLocations = generateRandomCluster(areaHumanCell, 15);

        humanCellLocations.forEach(function (item) {
            drawHumanCell(item.x, item.y);
        });

        let areaAntiBody: Canvas = {
            x: 0, y: 50 + window.innerHeight / 3, width: window.innerWidth, height: window.innerHeight / 3
        };

        let antiPositionMin: Vector = { "x": 1000, "y": 300 };
        let antiPositionMax: Vector = { "x": 300, "y": 600 };
        for (let i: number = 0; i < 10; i++) {

            let X: number = Math.random() * (antiPositionMax.x - antiPositionMin.x) + antiPositionMin.x;
            let Y: number = Math.random() * (antiPositionMax.y - antiPositionMin.y) + antiPositionMin.y;

            drawAntiBody({ "x": X, "y": Y }, { "x": 20, "y": 20 });
        }
        let areaCorona: Canvas = {
            x: 0, y: innerHeight * 2 / 3, width: window.innerWidth, height: window.innerHeight / 8
        };

        let coronaLocations = generateRandomCluster(areaCorona, 10);
        coronaLocations.forEach(function (item) {
            drawVirus(item.x, item.y);
        });
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);

        gradient.addColorStop(1, "rgb(128,0,0)");
        gradient.addColorStop(0, "rgb(255,182,193)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);


        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;

        pattern.fillStyle = "Transparent";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();

        crc2.fillStyle = <CanvasPattern>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(3, 5, canvas.width, canvas.height);
    }

    function drawHumanCell(_x: number, _y: number): void {
        let cell: Path2D = new Path2D();
        cell.arc(_x, _y, 60, 0, 10 * Math.PI);
        crc2.fillStyle = "rgb(0,191,255)";
        crc2.fill(cell);
        crc2.stroke(cell);


        let inner: Path2D = new Path2D();
        inner.arc(_x, _y, 25, 0, 7 * Math.PI);
        crc2.strokeStyle = "black";
        crc2.fillStyle = "rgb(142,229,238)";
        crc2.lineWidth = 4;
        crc2.strokeStyle = "grey";
        crc2.fill(inner);
        crc2.stroke(inner);
    }

    function drawVirus(_x: number, _y: number): void {

        let Corona: Path2D = new Path2D();
        for (let i: number = 0; i < 10; i++) {
            Corona.moveTo(_x + 5, _y - 5);
            Corona.lineTo(_x + 40, _y + 20);
            Corona.moveTo(_x + 5, _y - 5);
            Corona.lineTo(_x - 40, _y - 20);
            Corona.moveTo(_x - 25, _y + 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x + 25, _y - 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x + 25, _y + 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x - 25, _y + 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x - 25, _y - 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x - 40, _y + 20);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x + 40, _y - 20);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x - 25, _y + 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x + 25, _y - 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x + 40, _y - 20);
            crc2.closePath();
            crc2.strokeStyle = "darkgreen";
            crc2.lineWidth = 7;
            crc2.fill(Corona);
            crc2.stroke(Corona);
        }

        let virusOutline: Path2D = new Path2D();
        virusOutline.arc(_x, _y, 30, 0, 4 * Math.PI);
        crc2.fillStyle = "rgb(127,255,0)";
        crc2.fill(virusOutline);
        crc2.stroke(virusOutline);

        let virus: Path2D = new Path2D();
        virus.arc(_x, _y, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "rgb(50,205,50)";
        crc2.fill(virus);
        crc2.stroke(virus);
    }

    function drawAntiBody(_position: Vector, _size: Vector): void {
        crc2.strokeStyle =  "rgb(209,188,138)";
        crc2.lineWidth = 3;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-7, 0);
        crc2.lineTo(-7, -25);
        crc2.moveTo(-7, -25);
        crc2.lineTo(-17, -35);
        crc2.moveTo(-15, -23);
        crc2.lineTo(-25, -33);
        crc2.moveTo(7, 0);
        crc2.lineTo(7, -25);
        crc2.moveTo(7, -25);
        crc2.lineTo(17, -35);
        crc2.moveTo(15, -23);
        crc2.lineTo(25, -33);
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
    }
}

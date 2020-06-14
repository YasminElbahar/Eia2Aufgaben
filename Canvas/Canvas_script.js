var Canvas;
(function (Canvas) {
    document.addEventListener("DOMContentLoaded", init);
    var canvas;
    var crc2;
    function generateRandomCluster(_area, _count) {
        var returnValue = new Array();
        for (var i = 0; i < _count; i++) {
            var newPoint = {
                x: Math.random() * _area.width + _area.x,
                y: Math.random() * _area.height + _area.y
            };
            returnValue.push(newPoint);
        }
        return returnValue;
    }
    function init() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        drawBackground();
        var areaHumanCell = {
            x: 0, y: 50, width: window.innerWidth, height: window.innerHeight / 3
        };
        var humanCellLocations = generateRandomCluster(areaHumanCell, 15);
        humanCellLocations.forEach(function (item) {
            drawHumanCell(item.x, item.y);
        });
        var areaAntiBody = {
            x: 0, y: 50 + window.innerHeight / 3, width: window.innerWidth, height: window.innerHeight / 3
        };
        var antiPositionMin = { "x": 1000, "y": 300 };
        var antiPositionMax = { "x": 300, "y": 600 };
        for (var i = 0; i < 10; i++) {
            var X = Math.random() * (antiPositionMax.x - antiPositionMin.x) + antiPositionMin.x;
            var Y = Math.random() * (antiPositionMax.y - antiPositionMin.y) + antiPositionMin.y;
            drawAntiBody({ "x": X, "y": Y }, { "x": 20, "y": 20 });
        }
        var areaCorona = {
            x: 0, y: innerHeight * 2 / 3, width: window.innerWidth, height: window.innerHeight / 8
        };
        var coronaLocations = generateRandomCluster(areaCorona, 10);
        coronaLocations.forEach(function (item) {
            drawVirus(item.x, item.y);
        });
    }
    function drawBackground() {
        var gradient = crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(1, "rgb(128,0,0)");
        gradient.addColorStop(0, "rgb(255,182,193)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        var pattern = document.createElement("canvas").getContext("2d");
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
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(3, 5, canvas.width, canvas.height);
    }
    function drawHumanCell(_x, _y) {
        var cell = new Path2D();
        cell.arc(_x, _y, 60, 0, 10 * Math.PI);
        crc2.fillStyle = "rgb(0,191,255)";
        crc2.fill(cell);
        crc2.stroke(cell);
        var inner = new Path2D();
        inner.arc(_x, _y, 25, 0, 7 * Math.PI);
        crc2.strokeStyle = "black";
        crc2.fillStyle = "rgb(142,229,238)";
        crc2.lineWidth = 4;
        crc2.strokeStyle = "grey";
        crc2.fill(inner);
        crc2.stroke(inner);
    }
    function drawVirus(_x, _y) {
        var Corona = new Path2D();
        for (var i = 0; i < 10; i++) {
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
        var virusOutline = new Path2D();
        virusOutline.arc(_x, _y, 30, 0, 4 * Math.PI);
        crc2.fillStyle = "rgb(127,255,0)";
        crc2.fill(virusOutline);
        crc2.stroke(virusOutline);
        var virus = new Path2D();
        virus.arc(_x, _y, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "rgb(50,205,50)";
        crc2.fill(virus);
        crc2.stroke(virus);
    }
    function drawAntiBody(_position, _size) {
        crc2.strokeStyle = "rgb(209,188,138)";
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
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas_script.js.map
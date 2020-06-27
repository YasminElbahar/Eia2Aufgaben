var L10;
(function (L10) {
    var Background = /** @class */ (function () {
        function Background(_position) {
            this.position = _position;
        }
        Background.prototype.draw = function (_position) {
            var gradient = L10.crc2.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(1, "rgb(128,0,0)");
            gradient.addColorStop(0, "rgb(255,182,193)");
            var pattern = document.createElement("canvas").getContext("2d");
            L10.crc2.fillStyle = gradient;
            L10.crc2.fillRect(0, 0, L10.crc2.canvas.width, L10.crc2.canvas.height);
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
            L10.crc2.fillStyle = L10.crc2.createPattern(pattern.canvas, "repeat");
            L10.crc2.fillRect(0, 0, L10.crc2.canvas.width, L10.crc2.canvas.height);
        };
        return Background;
    }());
    L10.Background = Background;
})(L10 || (L10 = {}));
//# sourceMappingURL=Background.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var L10;
(function (L10) {
    var Corona = /** @class */ (function (_super) {
        __extends(Corona, _super);
        function Corona(_position) {
            var _this = _super.call(this, _position) || this;
            _this.infected = false;
            if (_position)
                _this.position = _position.copy();
            else
                _this.velocity = new L10.Vector(0, 0);
            _this.radius = 5;
            _this.velocity = new L10.Vector(0, 0);
            _this.velocity.random(5, 10);
            return _this;
        }
        Corona.prototype.draw = function () {
            var Corona = new Path2D();
            for (var i = 0; i < 10; i++) {
                Corona.moveTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x + 40, this.position.y + 20);
                Corona.moveTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x - 40, this.position.y - 20);
                Corona.moveTo(this.position.x - 25, this.position.y + 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x + 25, this.position.y - 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x + 25, this.position.y + 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x - 25, this.position.y + 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x - 25, this.position.y - 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x - 40, this.position.y + 20);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x + 40, this.position.y - 20);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x - 25, this.position.y + 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x + 25, this.position.y - 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x + 40, this.position.y - 20);
                L10.crc2.closePath();
                L10.crc2.strokeStyle = "darkgreen";
                L10.crc2.lineWidth = 7;
                L10.crc2.fill(Corona);
                L10.crc2.stroke(Corona);
            }
            var virusOutline = new Path2D();
            virusOutline.arc(this.position.x, this.position.y, 30, 0, 4 * Math.PI);
            L10.crc2.fillStyle = "rgb(127,255,0)";
            L10.crc2.fill(virusOutline);
            L10.crc2.stroke(virusOutline);
            var virus = new Path2D();
            virus.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI);
            L10.crc2.fillStyle = "rgb(50,205,50)";
            L10.crc2.fill(virus);
            L10.crc2.stroke(virus);
        };
        Corona.prototype.move = function (_timeslice) {
            if (this.infected == false) {
                if (this.position.y < 250) {
                    _super.prototype.move.call(this, _timeslice * 2);
                }
                else {
                    _super.prototype.move.call(this, _timeslice);
                }
            }
        };
        Corona.prototype.isInfected = function () {
            if (this.position.y < 125) {
                return true;
            }
            else {
                return false;
            }
        };
        return Corona;
    }(L10.Cell));
    L10.Corona = Corona;
})(L10 || (L10 = {}));
//# sourceMappingURL=Corona.js.map
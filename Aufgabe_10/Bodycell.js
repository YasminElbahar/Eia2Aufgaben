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
    var Bodycell = /** @class */ (function (_super) {
        __extends(Bodycell, _super);
        function Bodycell(_position) {
            var _this = _super.call(this, _position) || this;
            if (_position)
                _this.position = _position.copy();
            else
                _this.velocity = new L10.Vector(0, 0);
            _this.radius = 20;
            _this.velocity = new L10.Vector(0, 0);
            _this.velocity.random(10, 30);
            return _this;
        }
        Bodycell.prototype.draw = function () {
            L10.crc2.save();
            L10.crc2.translate(this.position.x, this.position.y);
            var gradient = L10.crc2.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            L10.crc2.beginPath();
            L10.crc2.arc(this.position.x, this.position.y, this.radius, 10, 15 * Math.PI);
            L10.crc2.closePath();
            gradient.addColorStop(0, "#4B088A");
            L10.crc2.fillStyle = "#4B088A";
            L10.crc2.lineWidth = 10;
            L10.crc2.strokeStyle = "#FFFFFF";
            L10.crc2.stroke();
            L10.crc2.fill();
            L10.crc2.restore();
        };
        return Bodycell;
    }(L10.Cell));
    L10.Bodycell = Bodycell;
})(L10 || (L10 = {}));
//# sourceMappingURL=Bodycell.js.map
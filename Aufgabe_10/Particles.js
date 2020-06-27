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
    var Particle = /** @class */ (function (_super) {
        __extends(Particle, _super);
        function Particle(_position) {
            var _this = _super.call(this, _position) || this;
            if (_position)
                _this.position = _position.copy();
            else
                _this.velocity = new L10.Vector(0, 0);
            _this.velocity = new L10.Vector(0, 0);
            _this.velocity.random(150, 200);
            _this.radius = (Math.random() * 5) + 2;
            return _this;
        }
        Particle.prototype.draw = function () {
            console.log("draw Particles");
            var gradient = L10.crc2.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            L10.crc2.save();
            L10.crc2.beginPath();
            L10.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            L10.crc2.closePath();
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 50%)");
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
            gradient.addColorStop(0, "HSLA(0, 0%, 100%, 0%)");
            gradient.addColorStop(1, "#FF0040");
            L10.crc2.fillStyle = gradient;
            L10.crc2.fill();
            L10.crc2.restore();
        };
        Particle.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.x *= 0.1;
            offset.y *= _timeslice * 1.2;
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += L10.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += L10.crc2.canvas.height;
            }
            if (this.position.x > L10.crc2.canvas.width) {
                this.position.x -= L10.crc2.canvas.width;
            }
            if (this.position.y > L10.crc2.canvas.height) {
                this.position.y -= L10.crc2.canvas.height;
            }
        };
        return Particle;
    }(L10.Cell));
    L10.Particle = Particle;
})(L10 || (L10 = {}));
//# sourceMappingURL=Particles.js.map
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
    var Antibody = /** @class */ (function (_super) {
        __extends(Antibody, _super);
        function Antibody(_position) {
            var _this = _super.call(this, _position) || this;
            if (_position)
                _this.position = _position.copy();
            else
                _this.velocity = new L10.Vector(0, 0);
            _this.velocity = new L10.Vector(0, 0);
            _this.velocity.random(2, 6);
            _this.rotation = Math.random() * 360;
            return _this;
        }
        Antibody.prototype.draw = function () {
            var antibody = new Path2D();
            antibody.arc(this.position.x, this.position.y, 20, 0, 1.5 * Math.PI);
            antibody.moveTo(-7, 0);
            antibody.lineTo(-7, -25);
            antibody.moveTo(-7, -25);
            antibody.lineTo(-17, -35);
            antibody.moveTo(-15, -23);
            antibody.lineTo(-25, -33);
            antibody.moveTo(7, 0);
            antibody.lineTo(7, -25);
            antibody.moveTo(7, -25);
            antibody.lineTo(17, -35);
            antibody.moveTo(15, -23);
            antibody.lineTo(25, -33);
            antibody.closePath();
        };
        return Antibody;
    }(L10.Cell));
    L10.Antibody = Antibody;
})(L10 || (L10 = {}));
//# sourceMappingURL=Antibody.js.map
var L10;
(function (L10) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        Vector.prototype.add = function (_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        };
        Vector.prototype.scale = function (_scale) {
            this.x *= _scale;
            this.y *= _scale;
        };
        Vector.prototype.random = function (_minLength, _maxLength) {
            var length = _minLength + Math.random() * (_maxLength - _minLength);
            var direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        };
        Vector.prototype.copy = function () {
            return new Vector(this.x, this.y);
        };
        return Vector;
    }());
    L10.Vector = Vector;
})(L10 || (L10 = {}));
//# sourceMappingURL=Vector.js.map
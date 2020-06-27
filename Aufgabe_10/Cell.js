var L10;
(function (L10) {
    var Cell = /** @class */ (function () {
        function Cell(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10.Vector(0, 0);
            this.radius = 5;
            this.velocity = new L10.Vector(0, 0);
        }
        Cell.prototype.draw = function () { };
        Cell.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (L10.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += L10.crc2.canvas.height;
            if (this.position.x > (L10.crc2.canvas.width))
                this.position.x -= (L10.crc2.canvas.width);
            if (this.position.y > L10.crc2.canvas.height)
                this.position.y -= L10.crc2.canvas.height;
        };
        return Cell;
    }());
    L10.Cell = Cell;
})(L10 || (L10 = {}));
//# sourceMappingURL=Cell.js.map
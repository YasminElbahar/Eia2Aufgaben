var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2D.prototype.getX = function () { return this.x; };
    Point2D.prototype.getY = function () { return this.y; };
    Point2D.prototype.addToPoint = function (p) {
        this.x += p.x;
        this.y += p.y;
    };
    Point2D.prototype.subtractFromPoint = function (p) {
        this.x -= p.x;
        this.y -= p.y;
    };
    Point2D.prototype.multiplyPoint = function (factor) {
        this.x *= factor;
        this.y *= factor;
    };
    Point2D.prototype.stepTowards = function (p, speed) {
        if (Point2D.distanceBetweenTwoPoints(this, p) < 10) {
            this.x = p.x;
            this.y = p.y;
        }
        else {
            var diffVector = Point2D.SubtractTwoPoints(p, this);
            var distance = Point2D.distanceBetweenTwoPoints(this, p);
            diffVector.multiplyPoint(speed / distance);
            this.addToPoint(diffVector);
        }
    };
    Point2D.SubtractTwoPoints = function (p1, p2) {
        return new Point2D(p1.x - p2.x, p1.y - p2.y);
    };
    Point2D.distanceBetweenTwoPoints = function (p1, p2) {
        var xDiff = Math.pow(p2.getX() - p1.getX(), 2);
        var yDiff = Math.pow(p2.getY() - p1.getY(), 2);
        return Math.abs(Math.sqrt(xDiff + yDiff));
    };
    return Point2D;
}());

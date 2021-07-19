class Point2D {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getX() { return this.x; }
    public getY() { return this.y; }

    public addToPoint(p: Point2D) {
        this.x += p.x;
        this.y += p.y;
    }

    public subtractFromPoint(p: Point2D) {
        this.x -= p.x;
        this.y -= p.y;
    }

    public multiplyPoint(factor: number) {
        this.x *= factor;
        this.y *= factor;
    }
// Moves this point a step towards another given point
    // (eg. player position towards the ball's position)
    // Player #5 {x: 550, y: 230}
            // Ball {x: 600, y: 200}
            // diffVector = {x:50 , y:-30}
            // diff = 50
            // new diffVector = diffVector * (speed / distance)
            // new diffVector = {50, -30} * (3/5)
            // new diffVector = {30, -18}
            // Player's position += {30, -18}
    public stepTowards(p: Point2D, speed: number) {
        if (Point2D.distanceBetweenTwoPoints(this, p) < 10) {
            this.x = p.x;
            this.y = p.y;
        }
        else {
            let diffVector = Point2D.SubtractTwoPoints(p, this);
            let distance = Point2D.distanceBetweenTwoPoints(this, p);
            diffVector.multiplyPoint(speed/distance);
            this.addToPoint(diffVector);    
        }
    }

    static SubtractTwoPoints(p1: Point2D, p2: Point2D) {
        return new Point2D(p1.x - p2.x, p1.y - p2.y);
    }

    static distanceBetweenTwoPoints(p1: Point2D, p2: Point2D) {
        let xDiff = Math.pow(p2.getX() - p1.getX(), 2);
        let yDiff = Math.pow(p2.getY() - p1.getY(), 2);
        return Math.abs(Math.sqrt(xDiff + yDiff));
    }
}
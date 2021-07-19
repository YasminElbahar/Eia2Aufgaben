class RefereeGroup {
    private fieldReferee: FieldReferee;
    private upLineReferee: LineReferee;
    private downLineReferee: LineReferee;

    constructor() {
        this.fieldReferee = new FieldReferee(new Point2D(460, 250), 20);
        this.upLineReferee = new LineReferee(new Point2D(300, 5), 20);
        this.downLineReferee = new LineReferee(new Point2D(950, 700), 20);
    }

    public updateRefereePositions(ball: Ball) {
        this.fieldReferee.updatePosition(ball.getBallPos());
        this.upLineReferee.updatePosition(ball.getBallPos());
        this.downLineReferee.updatePosition(ball.getBallPos());
    }

    public drawReferees() {
        this.fieldReferee.drawReferee();
        this.upLineReferee.drawReferee();
        this.downLineReferee.drawReferee();
    }
}

abstract class Referee {
    protected speed: number;
    protected currentPos: Point2D;

    constructor(pos: Point2D, speed: number) {
        this.currentPos = pos;
        this.speed = speed;
    }

    public drawReferee() {
        let refereePos = this.currentPos;
        let canvas = document.getElementById("gameField") as HTMLCanvasElement;
        let crc2 = canvas.getContext('2d');
        crc2.fillStyle = 'pink';
        crc2.strokeStyle = '#323232';
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.arc(refereePos.getX(), refereePos.getY(), 20, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
    }

    public abstract updatePosition(ballPos: Point2D): void;
}

class FieldReferee extends Referee {
    public updatePosition(ballPos: Point2D) {
        let currentDistanceFromBall = Point2D.distanceBetweenTwoPoints(this.currentPos, ballPos);
        if (currentDistanceFromBall > 200) {
            this.currentPos.stepTowards(ballPos, this.speed);
        }
    }

}

class LineReferee extends Referee {
    public updatePosition(ballPos: Point2D) {
        let horizontalDistanceFromBall = Math.abs(this.currentPos.getX() - ballPos.getX());
        if (horizontalDistanceFromBall > 500) {
            this.currentPos.stepTowards(new Point2D(ballPos.getX(), this.currentPos.getY()), this.speed);
        }
        
    }
}
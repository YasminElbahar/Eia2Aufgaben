abstract class Player {
    protected speed: number;
    protected power: number;
    protected position: Point2D;
    protected currentPos: Point2D;
    protected isShooting: boolean;

    constructor(speed: number, power: number, position: Point2D) {
        this.speed = speed;
        this.power = power;
        this.position = position;
        this.currentPos = new Point2D(this.position.getX(), this.position.getY());
    }

    public getPosition(): Point2D {
        return this.position;
    }

    public getCurrentPosition(): Point2D {
        return this.currentPos;
    }

    public drawPlayer(canvas: HTMLCanvasElement, color: string) {
        this.drawPlayerBody(canvas, color);
        this.isShooting ? this.highlightPlayer("black") : this.highlightPlayer("#323232");
    }

    protected drawPlayerBody(canvas: HTMLCanvasElement, color: string) {
        let playerPos = this.getCurrentPosition();
        let crc2 = canvas.getContext('2d');
        crc2.fillStyle = color as string;
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.arc(playerPos.getX(), playerPos.getY(), 20, 0, 2 * Math.PI);
        crc2.fill();
    }

    protected highlightPlayer(color: string) {
        let playerPos = this.getCurrentPosition();
        let canvas = document.getElementById("gameField") as HTMLCanvasElement;
        let crc2 = canvas.getContext('2d');
        crc2.strokeStyle = color;
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.arc(playerPos.getX(), playerPos.getY(), 20, 0, 2 * Math.PI);
        crc2.stroke();
    }

    public updatePosition(ball: Ball, goal: Point2D, teamList: Array<Player>) {
        let currentDistanceFromBall = Point2D.distanceBetweenTwoPoints(this.currentPos, ball.getBallPos());
        let distanceFromBall = Point2D.distanceBetweenTwoPoints(this.position, ball.getBallPos());
        let distanceFromPosition = Point2D.distanceBetweenTwoPoints(this.position, this.currentPos);
        let speedFactor = parseFloat((<HTMLInputElement>document.getElementById("speed")).value);
        let currentSpeed = this.speed * speedFactor;

        if (distanceFromPosition > 300) {
            this.currentPos.stepTowards(this.position, currentSpeed);
        }
        else if (distanceFromBall <= 300 && currentDistanceFromBall > 10) {
            this.currentPos.stepTowards(ball.getBallPos(), currentSpeed);
        }
        else if (currentDistanceFromBall < 10) {
            this.shootBall(ball, goal, teamList);
        }
        else {
            this.currentPos.stepTowards(this.position, currentSpeed);
        }
    }

    public abstract shootBall(ball: Ball, goal: Point2D, teamList: Array<Player>): void;

    public setShootingOff() {
        this.isShooting = false;
    }
}

class UserPlayer extends Player {
    private team: UserTeam;
    private number: number;

    constructor(speed: number, power: number, team: UserTeam, position: Point2D, number: number) {
        super(speed, power, position);
        this.team = team;
        this.number = number;
    }

    public shootBall(ball: Ball, goal: Point2D) {
        if (!ball.getIsShot()) {
            this.isShooting = true;
            ball.setIsShot(true);
            document.getElementById('message')
            .innerText = `Waiting for [Player #${this.number} - Speed: ${this.speed} - Power: ${this.power}] to shoot...`;
            this.team.waitForUserToShoot(ball);
        }
    }
}

class ComputerPlayer extends Player {
    private team: ComputerTeam;

    constructor(speed: number, power: number, team: ComputerTeam, position: Point2D) {
        super(speed, power, position);
        this.team = team;
    }
    
    public shootBall(ball: Ball, goal: Point2D, teamList: Array<Player>) {
        if (!ball.getIsShot()) {
            // Decide Target (Target could be one friend or the goal)
            let target: Point2D = this.pickRandomTarget(goal, teamList);
            // Order Ball to go to that target
            ball.setTarget(target, this.power);
            document.getElementById('message').innerText = `Away team has the the ball`;
        }
    }

    private pickRandomTarget(goal: Point2D, teamList: Array<Player>) {
        let teammatesPositions: Array<Point2D> = teamList.filter(
            // Only players that are nearer to the goal
            player => player.getCurrentPosition().getX() <= this.getCurrentPosition().getX()
        ).map(player => player.getCurrentPosition());
        
        // Chances of shooting 50%
        let goals = [...Array(teammatesPositions.length+1)].map((_, i) => goal)
        let samples: Array<Point2D> = [...goals, ...teammatesPositions];
        let sample = samples[Math.floor(Math.random()*samples.length)];
        return new Point2D(sample.getX(), sample.getY());
    }
}
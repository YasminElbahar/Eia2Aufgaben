class Ball {
    private currPos: Point2D;
    private target: Point2D;
    private currSpeed: number;
    private isShot: boolean;

    constructor() {
        this.moveBallToCenter();
        this.isShot = false;
    }

    public drawBall(canvas: HTMLCanvasElement) {
        let crc2 = canvas.getContext('2d');
        crc2.fillStyle = 'cyan';
        crc2.beginPath();
        crc2.strokeStyle = 'black';
        crc2.lineWidth = 3;    
        crc2.arc(this.currPos.getX(), this.currPos.getY(), 15, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
    }

    public getBallPos() { return this.currPos; }

    public getIsShot() { return this.isShot; }

    public setIsShot(flag: boolean) { this.isShot = flag; }

    public calculateBallPosition() {
        if (this.checkIfGoal()) this.moveBallToCenter();
        else if (this.checkAtBoarders()) this.stopBallAtBoarder();
        else {
            this.currPos.stepTowards(this.target, this.currSpeed);
            this.currSpeed /= 1.15;
        }
    }

    public setTarget(target: Point2D, speed: number) {
        this.target = this.calculateAimTarget(target);
        this.currSpeed = speed;
        this.isShot = true;
        setTimeout(() => { this.isShot = false; }, 600);
    }

    private calculateAimTarget(target: Point2D) {
        let diffVector = Point2D.SubtractTwoPoints(target, this.currPos);
        diffVector.multiplyPoint(99999999);
        return diffVector;
    }

    private checkIfGoal(): boolean {
        if (this.currPos.getY() >= 300 && this.currPos.getY() <= 400) {
            // Check if goal for user
            if (this.currPos.getX() >= 1235) { this.addGoalOnDashboard("home"); return true; }

            // Check if goal for computer
            if (this.currPos.getX() <= 15) { this.addGoalOnDashboard("away"); return true; }
        }
        return false;
    }

    private addGoalOnDashboard(team: string) {
        let currentScore: number = parseInt(document.getElementById(`${team}Score`).innerText);
        document.getElementById(`${team}Score`).innerText = (currentScore+1).toString();
        document.getElementById('message').innerText = `Goaaaaal for the ${team} team`;
    }

    private checkAtBoarders(): boolean {
        return  this.currPos.getX() <= 15 ||
                this.currPos.getX() >= 1235 ||
                this.currPos.getY() <= 15 ||
                this.currPos.getY() >= 685
    }

    private stopBallAtBoarder() {
        if(this.currPos.getX() <= 15) this.currPos = new Point2D(20, this.currPos.getY());
        if(this.currPos.getY() <= 15) this.currPos = new Point2D(this.currPos.getX(), 20);
        if(this.currPos.getX() >= 1235) this.currPos = new Point2D(1230, this.currPos.getY());
        if(this.currPos.getY() >= 685) this.currPos = new Point2D(this.currPos.getX(), 680);
        this.currSpeed = 0.0000000001;
        document.getElementById('message').innerText = `Ball went outside the field`;
    }

    private moveBallToCenter() {
        this.currPos = new Point2D(622, 350);
        this.target = new Point2D(622, 350);
    }
}
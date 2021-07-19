var Ball = /** @class */ (function () {
    function Ball() {
        this.moveBallToCenter();
        this.isShot = false;
    }
    Ball.prototype.drawBall = function (canvas) {
        var crc2 = canvas.getContext('2d');
        crc2.fillStyle = 'cyan';
        crc2.beginPath();
        crc2.strokeStyle = 'black';
        crc2.lineWidth = 3;
        crc2.arc(this.currPos.getX(), this.currPos.getY(), 15, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
    };
    Ball.prototype.getBallPos = function () { return this.currPos; };
    Ball.prototype.getIsShot = function () { return this.isShot; };
    Ball.prototype.setIsShot = function (flag) { this.isShot = flag; };
    Ball.prototype.calculateBallPosition = function () {
        if (this.checkIfGoal())
            this.moveBallToCenter();
        else if (this.checkAtBoarders())
            this.stopBallAtBoarder();
        else {
            this.currPos.stepTowards(this.target, this.currSpeed);
            this.currSpeed /= 1.15;
        }
    };
    Ball.prototype.setTarget = function (target, speed) {
        var _this = this;
        this.target = this.calculateAimTarget(target);
        this.currSpeed = speed;
        this.isShot = true;
        setTimeout(function () { _this.isShot = false; }, 600);
    };
    Ball.prototype.calculateAimTarget = function (target) {
        var diffVector = Point2D.SubtractTwoPoints(target, this.currPos);
        diffVector.multiplyPoint(99999999);
        return diffVector;
    };
    Ball.prototype.checkIfGoal = function () {
        if (this.currPos.getY() >= 300 && this.currPos.getY() <= 400) {
            // Check if goal for user
            if (this.currPos.getX() >= 1235) {
                this.addGoalOnDashboard("home");
                return true;
            }
            // Check if goal for computer
            if (this.currPos.getX() <= 15) {
                this.addGoalOnDashboard("away");
                return true;
            }
        }
        return false;
    };
    Ball.prototype.addGoalOnDashboard = function (team) {
        var currentScore = parseInt(document.getElementById(team + "Score").innerText);
        document.getElementById(team + "Score").innerText = (currentScore + 1).toString();
        document.getElementById('message').innerText = "Goaaaaal for the " + team + " team";
    };
    Ball.prototype.checkAtBoarders = function () {
        return this.currPos.getX() <= 15 ||
            this.currPos.getX() >= 1235 ||
            this.currPos.getY() <= 15 ||
            this.currPos.getY() >= 685;
    };
    Ball.prototype.stopBallAtBoarder = function () {
        if (this.currPos.getX() <= 15)
            this.currPos = new Point2D(20, this.currPos.getY());
        if (this.currPos.getY() <= 15)
            this.currPos = new Point2D(this.currPos.getX(), 20);
        if (this.currPos.getX() >= 1235)
            this.currPos = new Point2D(1230, this.currPos.getY());
        if (this.currPos.getY() >= 685)
            this.currPos = new Point2D(this.currPos.getX(), 680);
        this.currSpeed = 0.0000000001;
        document.getElementById('message').innerText = "Ball went outside the field";
    };
    Ball.prototype.moveBallToCenter = function () {
        this.currPos = new Point2D(622, 350);
        this.target = new Point2D(622, 350);
    };
    return Ball;
}());

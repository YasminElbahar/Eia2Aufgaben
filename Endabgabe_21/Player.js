var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var Player = /** @class */ (function () {
    function Player(speed, power, position) {
        this.speed = speed;
        this.power = power;
        this.position = position;
        this.currentPos = new Point2D(this.position.getX(), this.position.getY());
    }
    Player.prototype.getPosition = function () {
        return this.position;
    };
    Player.prototype.getCurrentPosition = function () {
        return this.currentPos;
    };
    Player.prototype.drawPlayer = function (canvas, color) {
        this.drawPlayerBody(canvas, color);
        this.isShooting ? this.highlightPlayer("black") : this.highlightPlayer("#323232");
    };
    Player.prototype.drawPlayerBody = function (canvas, color) {
        var playerPos = this.getCurrentPosition();
        var crc2 = canvas.getContext('2d');
        crc2.fillStyle = color;
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.arc(playerPos.getX(), playerPos.getY(), 20, 0, 2 * Math.PI);
        crc2.fill();
    };
    Player.prototype.highlightPlayer = function (color) {
        var playerPos = this.getCurrentPosition();
        var canvas = document.getElementById("gameField");
        var crc2 = canvas.getContext('2d');
        crc2.strokeStyle = color;
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.arc(playerPos.getX(), playerPos.getY(), 20, 0, 2 * Math.PI);
        crc2.stroke();
    };
    Player.prototype.updatePosition = function (ball, goal, teamList) {
        var currentDistanceFromBall = Point2D.distanceBetweenTwoPoints(this.currentPos, ball.getBallPos());
        var distanceFromBall = Point2D.distanceBetweenTwoPoints(this.position, ball.getBallPos());
        var distanceFromPosition = Point2D.distanceBetweenTwoPoints(this.position, this.currentPos);
        var speedFactor = parseFloat(document.getElementById("speed").value);
        var currentSpeed = this.speed * speedFactor;
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
    };
    Player.prototype.setShootingOff = function () {
        this.isShooting = false;
    };
    return Player;
}());
var UserPlayer = /** @class */ (function (_super) {
    __extends(UserPlayer, _super);
    function UserPlayer(speed, power, team, position, number) {
        var _this = _super.call(this, speed, power, position) || this;
        _this.team = team;
        _this.number = number;
        return _this;
    }
    UserPlayer.prototype.shootBall = function (ball, goal) {
        if (!ball.getIsShot()) {
            this.isShooting = true;
            ball.setIsShot(true);
            document.getElementById('message')
                .innerText = "Waiting for [Player #" + this.number + " - Speed: " + this.speed + " - Power: " + this.power + "] to shoot...";
            this.team.waitForUserToShoot(ball);
        }
    };
    return UserPlayer;
}(Player));
var ComputerPlayer = /** @class */ (function (_super) {
    __extends(ComputerPlayer, _super);
    function ComputerPlayer(speed, power, team, position) {
        var _this = _super.call(this, speed, power, position) || this;
        _this.team = team;
        return _this;
    }
    ComputerPlayer.prototype.shootBall = function (ball, goal, teamList) {
        if (!ball.getIsShot()) {
            // Decide Target (Target could be one friend or the goal)
            var target = this.pickRandomTarget(goal, teamList);
            // Order Ball to go to that target
            ball.setTarget(target, this.power);
            document.getElementById('message').innerText = "Away team has the the ball";
        }
    };
    ComputerPlayer.prototype.pickRandomTarget = function (goal, teamList) {
        var _this = this;
        var teammatesPositions = teamList.filter(
        // Only players that are nearer to the goal
        function (player) { return player.getCurrentPosition().getX() <= _this.getCurrentPosition().getX(); }).map(function (player) { return player.getCurrentPosition(); });
        // Chances of shooting 50%
        var goals = __spreadArray([], Array(teammatesPositions.length + 1)).map(function (_, i) { return goal; });
        var samples = __spreadArray(__spreadArray([], goals), teammatesPositions);
        var sample = samples[Math.floor(Math.random() * samples.length)];
        return new Point2D(sample.getX(), sample.getY());
    };
    return ComputerPlayer;
}(Player));

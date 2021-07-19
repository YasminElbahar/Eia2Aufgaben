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
var RefereeGroup = /** @class */ (function () {
    function RefereeGroup() {
        this.fieldReferee = new FieldReferee(new Point2D(460, 250), 20);
        this.upLineReferee = new LineReferee(new Point2D(300, 5), 20);
        this.downLineReferee = new LineReferee(new Point2D(950, 700), 20);
    }
    RefereeGroup.prototype.updateRefereePositions = function (ball) {
        this.fieldReferee.updatePosition(ball.getBallPos());
        this.upLineReferee.updatePosition(ball.getBallPos());
        this.downLineReferee.updatePosition(ball.getBallPos());
    };
    RefereeGroup.prototype.drawReferees = function () {
        this.fieldReferee.drawReferee();
        this.upLineReferee.drawReferee();
        this.downLineReferee.drawReferee();
    };
    return RefereeGroup;
}());
var Referee = /** @class */ (function () {
    function Referee(pos, speed) {
        this.currentPos = pos;
        this.speed = speed;
    }
    Referee.prototype.drawReferee = function () {
        var refereePos = this.currentPos;
        var canvas = document.getElementById("gameField");
        var crc2 = canvas.getContext('2d');
        crc2.fillStyle = 'pink';
        crc2.strokeStyle = '#323232';
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.arc(refereePos.getX(), refereePos.getY(), 20, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
    };
    return Referee;
}());
var FieldReferee = /** @class */ (function (_super) {
    __extends(FieldReferee, _super);
    function FieldReferee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldReferee.prototype.updatePosition = function (ballPos) {
        var currentDistanceFromBall = Point2D.distanceBetweenTwoPoints(this.currentPos, ballPos);
        if (currentDistanceFromBall > 200) {
            this.currentPos.stepTowards(ballPos, this.speed);
        }
    };
    return FieldReferee;
}(Referee));
var LineReferee = /** @class */ (function (_super) {
    __extends(LineReferee, _super);
    function LineReferee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineReferee.prototype.updatePosition = function (ballPos) {
        var horizontalDistanceFromBall = Math.abs(this.currentPos.getX() - ballPos.getX());
        if (horizontalDistanceFromBall > 500) {
            this.currentPos.stepTowards(new Point2D(ballPos.getX(), this.currentPos.getY()), this.speed);
        }
    };
    return LineReferee;
}(Referee));

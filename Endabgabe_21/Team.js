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
var Team = /** @class */ (function () {
    function Team(color, formation) {
        this.color = color;
        this.formation = formation;
        this.teamList = this.generateTeamList(formation);
    }
    Team.prototype.drawPlayers = function (canvas) {
        var _this = this;
        this.teamList.forEach(function (player) { return player.drawPlayer(canvas, _this.color); });
    };
    Team.prototype.updatePlayerPositions = function (ball) {
        var _this = this;
        this.teamList.forEach(function (player) {
            return player.updatePosition(ball, _this.targetGoal, _this.teamList);
        });
    };
    Team.prototype.generatePlayerParams = function (formation) {
        var positions = Formation.resolveFormation(formation);
        return positions.map(function (position) {
            var speed = Math.floor(Math.random() * 10) + 15;
            var power = Math.floor(Math.random() * 30) + 30;
            return { "speed": speed, "power": power, "position": position };
        });
    };
    return Team;
}());
var UserTeamStatus;
(function (UserTeamStatus) {
    UserTeamStatus[UserTeamStatus["Idle"] = 0] = "Idle";
    UserTeamStatus[UserTeamStatus["Waiting"] = 1] = "Waiting";
    UserTeamStatus[UserTeamStatus["Shooting"] = 2] = "Shooting";
})(UserTeamStatus || (UserTeamStatus = {}));
;
var UserTeam = /** @class */ (function (_super) {
    __extends(UserTeam, _super);
    function UserTeam(color, formation) {
        var _this = _super.call(this, color, formation) || this;
        _this.targetGoal = new Point2D(1235, 350);
        _this.status = UserTeamStatus.Idle;
        _this.setShootingHandler();
        return _this;
    }
    UserTeam.prototype.updatePlayerPositions = function (ball) {
        var _this = this;
        this.teamList.forEach(function (player) {
            player.setShootingOff();
            player.updatePosition(ball, _this.targetGoal, _this.teamList);
        });
    };
    UserTeam.prototype.isWaiting = function () { return this.status === UserTeamStatus.Waiting; };
    UserTeam.prototype.isShooting = function () { return this.status !== UserTeamStatus.Idle; };
    UserTeam.prototype.waitForUserToShoot = function (ball) {
        this.status = UserTeamStatus.Waiting;
        this.ball = ball;
    };
    UserTeam.prototype.generateTeamList = function (formation) {
        var _this = this;
        return _super.prototype.generatePlayerParams.call(this, formation).map(function (params, idx) {
            return new UserPlayer(params.speed, params.power, _this, params.position, idx + 1);
        });
    };
    UserTeam.prototype.setShootingHandler = function () {
        this.setMouseHandler();
        this.setKeyBoardHandler();
    };
    UserTeam.prototype.setMouseHandler = function () {
        var _this = this;
        document.getElementById("gameField").addEventListener('click', function (event) {
            _this.handlerHelper(_this.getClickOnCanvas(event));
        });
    };
    UserTeam.prototype.setKeyBoardHandler = function () {
        var _this = this;
        document.body.addEventListener('keyup', function (event) {
            if (event.code === 'Space')
                _this.handlerHelper(_this.targetGoal);
        });
    };
    UserTeam.prototype.handlerHelper = function (target) {
        if (this.isWaiting()) {
            var shootingPower = parseInt(document.getElementById('power').value);
            this.ball.setTarget(target, shootingPower);
            this.updateShootingStatus();
            document.getElementById('message').innerText = "Home team has the ball";
        }
    };
    UserTeam.prototype.getClickOnCanvas = function (event) {
        var rect = document.getElementById("gameField").getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        return new Point2D(x, y);
    };
    UserTeam.prototype.updateShootingStatus = function () {
        var _this = this;
        this.status = UserTeamStatus.Shooting;
        setTimeout(function () { _this.status = UserTeamStatus.Idle; }, 600);
    };
    return UserTeam;
}(Team));
var ComputerTeam = /** @class */ (function (_super) {
    __extends(ComputerTeam, _super);
    function ComputerTeam(color, formation) {
        var _this = _super.call(this, color, formation) || this;
        _this.targetGoal = new Point2D(15, 350);
        return _this;
    }
    ComputerTeam.prototype.generateTeamList = function (formation) {
        var _this = this;
        return _super.prototype.generatePlayerParams.call(this, formation).map(function (params) { return new ComputerPlayer(params.speed, params.power, _this, _this.reversePosition(params.position)); });
    };
    ComputerTeam.prototype.reversePosition = function (position) {
        return new Point2D(1240 - position.getX(), position.getY());
    };
    return ComputerTeam;
}(Team));

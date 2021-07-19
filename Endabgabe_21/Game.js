var Game = /** @class */ (function () {
    function Game(canvas, homeTeam, awayTeam) {
        this.canvas = canvas;
        this.field = new Field();
        this.userTeam = homeTeam;
        this.computerTeam = awayTeam;
        this.ball = new Ball();
        this.refereeGroup = new RefereeGroup();
        this.updateInterval = 200;
        this.timer = new Timer(120, this.updateInterval);
        this.drawFrame();
    }
    Game.prototype.startGame = function () {
        var _this = this;
        var interval = setInterval(function () {
            // Check if waiting for user or not
            if (!_this.userTeam.isWaiting()) {
                // Check Timer
                if (_this.timer.isTimeUp()) {
                    _this.endGame();
                    clearInterval(interval);
                }
                else
                    _this.timer.tick();
                // Check each player near ball, moving or returning
                _this.userTeam.updatePlayerPositions(_this.ball);
                _this.computerTeam.updatePlayerPositions(_this.ball);
                _this.refereeGroup.updateRefereePositions(_this.ball);
                // Check ball near wall, player, goal
                _this.ball.calculateBallPosition();
                _this.updateFrame();
            }
        }, this.updateInterval);
    };
    Game.prototype.updateFrame = function () {
        this.clearFrame();
        this.drawFrame();
    };
    Game.prototype.drawFrame = function () {
        this.field.drawFieldBoarders(this.canvas);
        this.userTeam.drawPlayers(this.canvas);
        this.computerTeam.drawPlayers(this.canvas);
        this.refereeGroup.drawReferees();
        this.ball.drawBall(this.canvas);
        this.timer.displayCounter();
    };
    Game.prototype.clearFrame = function () {
        var crc2 = this.canvas.getContext("2d");
        crc2.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Game.prototype.endGame = function () {
        var homeScore = parseInt(document.getElementById("homeScore").innerText);
        var awayScore = parseInt(document.getElementById("awayScore").innerText);
        if (homeScore > awayScore)
            document.getElementById("message").innerText = "Time is up! Home is the winner!";
        else if (awayScore > homeScore)
            document.getElementById("message").innerText = "Time is up! Away is the winner!";
        else
            document.getElementById("message").innerText = "Time us up! Draw!";
    };
    return Game;
}());

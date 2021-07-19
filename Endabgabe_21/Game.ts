class Game {
    private canvas: HTMLCanvasElement
    private field: Field;
    private userTeam: UserTeam;
    private computerTeam: ComputerTeam;
    private refereeGroup: RefereeGroup;
    private ball: Ball;
    private timer: Timer;
    private updateInterval: number;

    constructor(canvas: HTMLCanvasElement, homeTeam: UserTeam, awayTeam: ComputerTeam) {
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

    public startGame() {
        let interval = setInterval(() => {
            // Check if waiting for user or not
            if (!this.userTeam.isWaiting()) {
                // Check Timer
                if (this.timer.isTimeUp()) {
                    this.endGame(); clearInterval(interval);
                }
                else this.timer.tick();
                // Check each player near ball, moving or returning
                this.userTeam.updatePlayerPositions(this.ball);
                this.computerTeam.updatePlayerPositions(this.ball);
                this.refereeGroup.updateRefereePositions(this.ball);
                // Check ball near wall, player, goal
                this.ball.calculateBallPosition();
                this.updateFrame();
            }
        }, this.updateInterval);
    }

    private updateFrame() {
        this.clearFrame();
        this.drawFrame();
    }

    private drawFrame() {
        this.field.drawFieldBoarders(this.canvas);
        this.userTeam.drawPlayers(this.canvas);
        this.computerTeam.drawPlayers(this.canvas);
        this.refereeGroup.drawReferees();
        this.ball.drawBall(this.canvas);
        this.timer.displayCounter();
    }

    private clearFrame() {
        let crc2 = this.canvas.getContext("2d");
        crc2.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private endGame() {
        let homeScore = parseInt(document.getElementById("homeScore").innerText);
        let awayScore = parseInt(document.getElementById("awayScore").innerText);
        if (homeScore > awayScore)
            document.getElementById("message").innerText = "Time is up! Home is the winner!";
        else if (awayScore > homeScore)
            document.getElementById("message").innerText = "Time is up! Away is the winner!";
        else document.getElementById("message").innerText = "Time us up! Draw!"
    }

}
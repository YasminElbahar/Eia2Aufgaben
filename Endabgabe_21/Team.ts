abstract class Team {
    protected color: string;
    protected formation: string;
    protected teamList: Array<Player>;
    protected targetGoal: Point2D;

    constructor(color: string, formation: string) {
        this.color = color;
        this.formation = formation;
        this.teamList = this.generateTeamList(formation);
    }

    public drawPlayers(canvas: HTMLCanvasElement) {
        this.teamList.forEach(player => player.drawPlayer(canvas, this.color));
    }

    public updatePlayerPositions(ball: Ball) {
        this.teamList.forEach(player =>
            player.updatePosition(ball, this.targetGoal, this.teamList)
        );
    }

    protected abstract generateTeamList(formation: string): Array<Player>;

    protected generatePlayerParams(formation: string) {
        let positions = Formation.resolveFormation(formation);
        return positions.map(position => {
            let speed = Math.floor(Math.random() * 10) + 15;
            let power = Math.floor(Math.random() * 30) + 30;
            return { "speed": speed, "power": power, "position": position }
        });
    }
}

enum UserTeamStatus { Idle, Waiting, Shooting };

class UserTeam extends Team {
    private status: UserTeamStatus;
    private ball: Ball;

    constructor(color: string, formation: string) {
        super(color, formation);
        this.targetGoal = new Point2D(1235, 350);
        this.status = UserTeamStatus.Idle;
        this.setShootingHandler();
    }

    updatePlayerPositions(ball: Ball) {
        this.teamList.forEach(player => {
            player.setShootingOff();
            player.updatePosition(ball, this.targetGoal, this.teamList);
        });

    }

    public isWaiting() { return this.status === UserTeamStatus.Waiting; }

    public isShooting() { return this.status !== UserTeamStatus.Idle; }

    public waitForUserToShoot(ball: Ball) {
        this.status = UserTeamStatus.Waiting;
        this.ball = ball;
    }

    protected generateTeamList(formation: string): Array<Player> {
        return super.generatePlayerParams(formation).map((params, idx) => 
            new UserPlayer(params.speed, params.power, this, params.position, idx+1)
        );
    }

    private setShootingHandler() {
        this.setMouseHandler();
        this.setKeyBoardHandler();
    }

    private setMouseHandler() {
        document.getElementById("gameField").addEventListener('click', event => {
            this.handlerHelper(this.getClickOnCanvas(event));
        });
    }

    private setKeyBoardHandler() {
        document.body.addEventListener('keyup', event => {
            if (event.code === 'Space') this.handlerHelper(this.targetGoal);
        });
    }

    private handlerHelper(target: Point2D) {
        if (this.isWaiting()) {
            let shootingPower = parseInt((<HTMLInputElement>document.getElementById('power')).value);
            this.ball.setTarget(target, shootingPower);
            this.updateShootingStatus();
            document.getElementById('message').innerText = `Home team has the ball`;
        }
    }

    private getClickOnCanvas(event: MouseEvent) {
        let rect = document.getElementById("gameField").getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        return new Point2D(x, y);
    }

    private updateShootingStatus() {
        this.status = UserTeamStatus.Shooting;
        setTimeout(() => { this.status = UserTeamStatus.Idle; }, 600);
    }
}

class ComputerTeam extends Team {
    constructor(color: string, formation: string) {
        super(color, formation);
        this.targetGoal = new Point2D(15, 350);
    }

    protected generateTeamList(formation: string): Array<Player> {
        return super.generatePlayerParams(formation).map(params => new ComputerPlayer(
            params.speed, params.power, this, this.reversePosition(params.position)
        ));
    }

    private reversePosition(position: Point2D) {
        return new Point2D(1240 - position.getX(), position.getY());
    }
}
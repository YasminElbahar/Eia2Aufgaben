class Timer {
    private currentTime: number;
    private interval: number;
    private timerDashboard: HTMLSpanElement;

    constructor(initialTime: number, interval: number) {
        this.currentTime = initialTime;
        this.interval = interval / 1000;
        this.timerDashboard = document.getElementById("timer") as HTMLSpanElement;
    }

    public tick() {
        this.currentTime =  Math.max(0, this.currentTime - this.interval);
    }

    public displayCounter() {
        let seconds = Math.floor(this.currentTime);
        let fraction = Math.floor((this.currentTime - seconds) * 100);
        this.timerDashboard.innerText = `${seconds}:${fraction}`
    }

    public isTimeUp(): boolean {
        return this.currentTime <= 0;
    }
}
var Timer = /** @class */ (function () {
    function Timer(initialTime, interval) {
        this.currentTime = initialTime;
        this.interval = interval / 1000;
        this.timerDashboard = document.getElementById("timer");
    }
    Timer.prototype.tick = function () {
        this.currentTime = Math.max(0, this.currentTime - this.interval);
    };
    Timer.prototype.displayCounter = function () {
        var seconds = Math.floor(this.currentTime);
        var fraction = Math.floor((this.currentTime - seconds) * 100);
        this.timerDashboard.innerText = seconds + ":" + fraction;
    };
    Timer.prototype.isTimeUp = function () {
        return this.currentTime <= 0;
    };
    return Timer;
}());

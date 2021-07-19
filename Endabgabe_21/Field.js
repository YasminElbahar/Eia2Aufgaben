var Field = /** @class */ (function () {
    function Field() {
    }
    Field.prototype.drawFieldBoarders = function (canvas) {
        var boarders = canvas.getContext("2d");
        boarders.fillStyle = "#FFFFFF";
        boarders.strokeStyle = '#FFFFFF';
        boarders.lineWidth = 5;
        this.fillOuterBoarders(boarders);
        this.fillCenterCircle(boarders);
        this.fillPenaltyBoxes(boarders);
    };
    Field.prototype.fillOuterBoarders = function (boarders) {
        boarders.fillRect(10, 10, 5, 680);
        boarders.fillRect(1235, 10, 5, 680);
        boarders.fillRect(10, 10, 1230, 5);
        boarders.fillRect(10, 685, 1230, 5);
    };
    Field.prototype.fillCenterCircle = function (boarders) {
        boarders.fillRect(620, 10, 5, 680);
        boarders.beginPath();
        boarders.arc(622.5, 350, 91.5, 0, 2 * Math.PI);
        boarders.stroke();
    };
    Field.prototype.fillPenaltyBoxes = function (boarders) {
        this.fillPenaltyOuterBoxes(boarders);
        this.fillPenaltyInnerBoxes(boarders);
        this.fillPenaltyCircles(boarders);
    };
    Field.prototype.fillPenaltyOuterBoxes = function (boarders) {
        boarders.fillRect(10, 160, 165, 5);
        boarders.fillRect(10, 555, 165, 5);
        boarders.fillRect(170, 160, 5, 400);
        boarders.fillRect(1070, 160, 165, 5);
        boarders.fillRect(1070, 555, 165, 5);
        boarders.fillRect(1070, 160, 5, 400);
    };
    Field.prototype.fillPenaltyInnerBoxes = function (boarders) {
        boarders.fillRect(10, 265, 55, 5);
        boarders.fillRect(10, 445, 55, 5);
        boarders.fillRect(60, 270, 5, 180);
        boarders.fillRect(1180, 265, 55, 5);
        boarders.fillRect(1180, 445, 55, 5);
        boarders.fillRect(1180, 270, 5, 180);
    };
    Field.prototype.fillPenaltyCircles = function (boarders) {
        boarders.beginPath();
        boarders.arc(120, 355, 91.5, -0.3 * Math.PI, 0.3 * Math.PI);
        boarders.stroke();
        boarders.beginPath();
        boarders.arc(1125, 355, 91.5, 0.7 * Math.PI, -0.7 * Math.PI);
        boarders.stroke();
    };
    return Field;
}());

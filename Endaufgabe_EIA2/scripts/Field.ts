class Field {
    public drawFieldBoarders(canvas: HTMLCanvasElement) {
        let boarders = canvas.getContext("2d");
        boarders.fillStyle = "#FFFFFF";
        boarders.strokeStyle = '#FFFFFF';
        boarders.lineWidth = 5;
        this.fillOuterBoarders(boarders);
        this.fillCenterCircle(boarders);
        this.fillPenaltyBoxes(boarders);
    }

    private fillOuterBoarders(boarders: CanvasRenderingContext2D) {
        boarders.fillRect(10, 10, 5, 680);
        boarders.fillRect(1235, 10, 5, 680);
        boarders.fillRect(10, 10, 1230, 5);
        boarders.fillRect(10, 685, 1230, 5);
    }

    private fillCenterCircle(boarders: CanvasRenderingContext2D) {
        boarders.fillRect(620, 10, 5, 680);
        boarders.beginPath();
        boarders.arc(622.5, 350, 91.5, 0, 2 * Math.PI);
        boarders.stroke();
    }

    private fillPenaltyBoxes(boarders: CanvasRenderingContext2D) {
        this.fillPenaltyOuterBoxes(boarders);
        this.fillPenaltyInnerBoxes(boarders);
        this.fillPenaltyCircles(boarders);
    }

    private fillPenaltyOuterBoxes(boarders: CanvasRenderingContext2D) {
        boarders.fillRect(10, 160, 165, 5);
        boarders.fillRect(10, 555, 165, 5);
        boarders.fillRect(170, 160, 5, 400);

        boarders.fillRect(1070, 160, 165, 5);
        boarders.fillRect(1070, 555, 165, 5);
        boarders.fillRect(1070, 160, 5, 400);
    }

    private fillPenaltyInnerBoxes(boarders: CanvasRenderingContext2D) {
        boarders.fillRect(10, 265, 55, 5);
        boarders.fillRect(10, 445, 55, 5);
        boarders.fillRect(60, 270, 5, 180);

        boarders.fillRect(1180, 265, 55, 5);
        boarders.fillRect(1180, 445, 55, 5);
        boarders.fillRect(1180, 270, 5, 180);
    }

    private fillPenaltyCircles(boarders: CanvasRenderingContext2D) {
        boarders.beginPath();
        boarders.arc(120, 355, 91.5, -0.3 * Math.PI, 0.3 * Math.PI);
        boarders.stroke();

        boarders.beginPath();
        boarders.arc(1125, 355, 91.5, 0.7 * Math.PI, -0.7 * Math.PI);
        boarders.stroke();
    }
}
var Formation = /** @class */ (function () {
    function Formation() {
    }
    Formation.resolveFormation = function (formation) {
        var result;
        switch (formation) {
            case '4-4-2':
                result = this.get442Formation();
                break;
            case '4-3-3':
                result = this.get433Formation();
                break;
            case '4-2-3-1':
                result = this.get4231Formation();
                break;
            default: result = this.get442Formation();
        }
        return result.map(function (p) { return new Point2D(p.x, p.y); });
    };
    Formation.get442Formation = function () {
        return [
            // Keeper
            { x: 40, y: 350 },
            // Defenders
            { x: 220, y: 70 },
            { x: 160, y: 260 },
            { x: 160, y: 435 },
            { x: 220, y: 630 },
            // MidFielders
            { x: 700, y: 70 },
            { x: 450, y: 200 },
            { x: 450, y: 550 },
            { x: 700, y: 630 },
            // Attackers
            { x: 950, y: 175 },
            { x: 950, y: 540 }
        ];
    };
    Formation.get433Formation = function () {
        return [
            // Keeper
            { x: 40, y: 350 },
            // Defenders
            { x: 220, y: 70 },
            { x: 160, y: 260 },
            { x: 160, y: 435 },
            { x: 220, y: 630 },
            // MidFielders
            { x: 650, y: 200 },
            { x: 450, y: 350 },
            { x: 650, y: 550 },
            // Attackers
            { x: 1030, y: 350 },
            { x: 950, y: 120 },
            { x: 950, y: 580 }
        ];
    };
    Formation.get4231Formation = function () {
        return [
            // Keeper
            { x: 40, y: 350 },
            // Defenders
            { x: 220, y: 70 },
            { x: 160, y: 260 },
            { x: 160, y: 435 },
            { x: 220, y: 630 },
            // MidFielders
            { x: 700, y: 70 },
            { x: 450, y: 200 },
            { x: 450, y: 550 },
            { x: 700, y: 630 },
            { x: 850, y: 350 },
            // Attackers
            { x: 1030, y: 350 },
        ];
    };
    return Formation;
}());

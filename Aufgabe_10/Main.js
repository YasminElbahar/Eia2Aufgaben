var L10;
(function (L10) {
    L10.infected = true;
    var cells = [];
    var background;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (!canvas) {
            return;
        }
        L10.crc2 = canvas.getContext("2d");
        createBackground();
        createCells();
        window.setInterval(animate, 20);
    }
    L10.handleLoad = handleLoad;
    function createBackground() {
        var x = 0;
        var y = 0;
        var position = new L10.Vector(x, y);
        var pattern = new L10.Background(position);
        pattern.draw(position);
        background = L10.crc2.getImageData(0, 0, L10.crc2.canvas.width, L10.crc2.canvas.height);
    }
    function createCells() {
        var x;
        var y;
        var particles = 400;
        var cell = 10;
        var antybody = 15;
        var bodycell = 50;
        for (var i = 0; i < particles; i++) {
            x = (Math.random() * L10.crc2.canvas.width);
            y = (Math.random() * L10.crc2.canvas.height);
            var position = new L10.Vector(x, y);
            var particles_1 = new particles_1(position);
            particles_1.draw();
            cell.push(particles_1);
        }
        for (var i = 0; i < antybody; i++) {
            x = (Math.random() * L10.crc2.canvas.width);
            y = (100 + Math.random() * L10.crc2.canvas.height / 1);
            var position = new L10.Vector(x, y);
            var antibody = new L10.Antibody(position);
            antibody.draw();
            cell.push(antibody);
        }
        for (var i = 0; i < bodycell; i++) {
            x = (Math.random() * L10.crc2.canvas.width);
            y = (500 + Math.random() * L10.crc2.canvas.height / 2);
            var position = new L10.Vector(x, y);
            var humancell = new L10.Bodycell(position);
            bodycell.draw();
            cell.push(bodycell);
        }
        for (var i = 0; i < cell; i++) {
            x = (Math.random() * L10.crc2.canvas.width);
            y = (100 + Math.random() * L10.crc2.canvas.height / 1.5);
            var position = new L10.Vector(x, y);
            var antybody_1 = new L10.Antibody(position);
            antybody_1.draw();
            cell.push(antybody_1);
        }
        for (var i = 0; i < cell; i++) {
            x = (Math.random() * L10.crc2.canvas.width);
            y = (100 + Math.random() * L10.crc2.canvas.height / 1.5);
            var position = new L10.Vector(x, y);
            var corona = new L10.Corona(position);
            corona.draw();
            cell.push(corona);
        }
    }
    function animate() {
        L10.crc2.putImageData(background, 0, 0);
        for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
            var zellesuperklasse = cells_1[_i];
            if (zellesuperklasse instanceof L10.Antibody || zellesuperklasse instanceof L10.Corona)
                zellesuperklasse.move(1 / 20);
            else if (zellesuperklasse instanceof L10.Bodycell)
                zellesuperklasse.move(1 / 20);
            else if (zellesuperklasse instanceof Particles)
                zellesuperklasse.move(1 / 80);
            zellesuperklasse.draw();
        }
    }
})(L10 || (L10 = {}));
//# sourceMappingURL=Main.js.map
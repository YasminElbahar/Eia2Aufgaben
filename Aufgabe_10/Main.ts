namespace L10 {

    export let crc2: CanvasRenderingContext2D;
    export let infected: boolean = true;

    let cells: Cell[] = [];
    let background: ImageData;

    window.addEventListener("load", handleLoad);

    export function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (!canvas) {
            return;
        }
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        createBackground();
        createCells();
        window.setInterval(animate, 20);
    }

    function createBackground(): void {
        let x: number = 0;
        let y: number = 0;
        let position: Vector = new Vector(x, y);
        let pattern: Background = new Background(position);
        pattern.draw(position);
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }



    function createCells(): void {
        let x: number;
        let y: number;
        let particles: number = 400;
        let cell: number = 10;
        let antybody: number = 15;
        let bodycell: number = 50;

        for (let i: number = 0; i < particles; i++) {

            x = (Math.random() * crc2.canvas.width);
            y = (Math.random() * crc2.canvas.height);

            let position: Vector = new Vector(x, y);
            let particles: Particles = new particles(position);
            particles.draw();
            cell.push(particles);
        }

        for (let i: number = 0; i < antybody; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (100 + Math.random() * crc2.canvas.height / 1);

            let position: Vector = new Vector(x, y);
            let antibody: Antibody = new Antibody(position);
            antibody.draw();
            cell.push(antibody);
        }

        for (let i: number = 0; i < bodycell; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (500 + Math.random() * crc2.canvas.height / 2);
            let position: Vector = new Vector(x, y);
            let humancell: Bodycell = new Bodycell(position);
            bodycell.draw();
            cell.push(bodycell);
        }

        for (let i: number = 0; i < cell; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (100 + Math.random() * crc2.canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let antybody: Antibody = new Antibody(position);
            antybody.draw();
            cell.push(antybody);
        }

        for (let i: number = 0; i < cell; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (100 + Math.random() * crc2.canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let corona: Corona = new Corona(position);
            corona.draw();
            cell.push(corona);
        }
    }

    function animate(): void {
        crc2.putImageData(background, 0, 0);
        for (let zellesuperklasse of cells) {
            if (zellesuperklasse instanceof Antibody || zellesuperklasse instanceof Corona)
                zellesuperklasse.move(1 / 20);
            else if (zellesuperklasse instanceof Bodycell)
                zellesuperklasse.move(1 / 20);
            else if (zellesuperklasse instanceof Particles)
                zellesuperklasse.move(1 / 80);
            zellesuperklasse.draw();
        }
    }
}
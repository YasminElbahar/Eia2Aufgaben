namespace L10 {

    export class Antibody extends Cell {
        
        rotation: number;
        constructor(_position?: Vector) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(2, 6);
            this.rotation = Math.random() * 360;
        }

        draw(): void {
            let antibody: Path2D = new Path2D();
            antibody.arc(this.position.x, this.position.y, 20, 0, 1.5 * Math.PI);
            antibody.moveTo(-7, 0);
            antibody.lineTo(-7, -25);
            antibody.moveTo(-7, -25);
            antibody.lineTo(-17, -35);
            antibody.moveTo(-15, -23);
            antibody.lineTo(-25, -33);
            antibody.moveTo(7, 0);
            antibody.lineTo(7, -25);
            antibody.moveTo(7, -25);
            antibody.lineTo(17, -35);
            antibody.moveTo(15, -23);
            antibody.lineTo(25, -33);
            antibody.closePath();
    
        }
    }}
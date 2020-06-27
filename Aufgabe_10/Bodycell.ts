namespace L10 {

    export class Bodycell extends Cell {
        constructor(_position?: Vector) {
            super(_position); 
            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);
            this.radius = 20;
            this.velocity = new Vector(0, 0);
            this.velocity.random(10, 30);
        }

        draw(): void {            
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.radius, 10, 15 * Math.PI);
            crc2.closePath(); 
            gradient.addColorStop(0, "#4B088A");
            crc2.fillStyle = "#4B088A";
            crc2.lineWidth = 10;
            crc2.strokeStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            crc2.restore();
        }
    }}

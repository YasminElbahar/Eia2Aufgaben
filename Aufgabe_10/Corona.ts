namespace L10 {

    export class Corona extends Cell {

        infected: boolean = false;

        constructor(_position?: Vector) {

            super(_position);

            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new Vector(0, 0);
            this.radius = 5;
            this.velocity = new Vector(0, 0);
            this.velocity.random(5, 10);
        }

        draw(): void {
            let Corona: Path2D = new Path2D();
            for (let i: number = 0; i < 10; i++) {
                Corona.moveTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x + 40, this.position.y + 20);
                Corona.moveTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x - 40, this.position.y - 20);
                Corona.moveTo(this.position.x - 25, this.position.y + 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x + 25, this.position.y - 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x + 25, this.position.y + 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x - 25, this.position.y + 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x - 25, this.position.y - 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x - 40, this.position.y + 20);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x + 40, this.position.y - 20);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x - 25, this.position.y + 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x + 25, this.position.y - 40);
                Corona.lineTo(this.position.x + 5, this.position.y - 5);
                Corona.lineTo(this.position.x + 40, this.position.y - 20);
                crc2.closePath();
                crc2.strokeStyle = "darkgreen";
                crc2.lineWidth = 7;
                crc2.fill(Corona);
                crc2.stroke(Corona);
            }


            let virusOutline: Path2D = new Path2D();
            virusOutline.arc(this.position.x, this.position.y, 30, 0, 4 * Math.PI);
            crc2.fillStyle = "rgb(127,255,0)";
            crc2.fill(virusOutline);
            crc2.stroke(virusOutline);

            let virus: Path2D = new Path2D();
            virus.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "rgb(50,205,50)";
            crc2.fill(virus);
            crc2.stroke(virus);
        }


        move(_timeslice: number): void {
            if (this.infected == false) {
                if (this.position.y < 250) {
                    super.move(_timeslice * 2);
                }
                else {
                    super.move(_timeslice);
                }
            }
        }

        isInfected(): boolean {
            if (this.position.y < 125) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
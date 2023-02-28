
const canvasHeight = 800;
const canvasWidth = 800;
const canvasMargin = 100;
const rows = 500;
const skip = 20;
const trueWidth = (canvasWidth - canvasMargin*2)

class Line {
    constructor(row, data) {
				this.baseY = canvasMargin + row * ((canvasHeight - canvasMargin*2)/rows);
        this.pos = createVector(canvasMargin, this.baseY);
        this.data = data.slice(0,data.length/4);
        this.row = row;
				this.speed = trueWidth / this.data.length;
				this.vel = createVector(this.speed, 0);
				this.index = 0;
    }

    render() {
				if (this.pos.x < canvasWidth - canvasMargin) {
						let old_pos = this.pos;
						let new_pos = createVector(this.pos.x + this.speed, this.baseY + (this.data[this.index]/10));
						this.index ++;
						stroke('#fff');
						strokeWeight(1);
						line(old_pos.x, old_pos.y, new_pos.x, new_pos.y);
						this.pos.set(new_pos);
				}
    }
}
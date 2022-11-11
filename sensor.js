class Sensor {
    constructor(car) {
        //car as an argument so that sensor know where car is
        this.car = car;
        this.rayCount = 5;//different direction
        this.rayLength = 150;//distance of rays
        this.raySpread = Math.PI / 2;//spread of reays in angle


        this.rays = [];
        this.readings = [];


    }


    update(roadBorders) {
        this.#castRays();
        this.readings = [];
        for (let i = 0; i < this.rays.length; i++) {
            this.readings.push(
                this.#getReading(this.rays[i], roadBorders)
            );
        }
    }


    #getReading(ray, roadBorders) {

        let touches = [];
        for (let i = 0; i < roadBorders.length; i++) {
            const touch = getIntersection(
                ray[0],
                ray[1],
                roadBorders[i][0],
                roadBorders[i][1]
            );
            if (touch) {
                touches.push(touch);
            }
        }

        if (touches.length == 0) {
            return null;
        } else {
            const offsets = touches.map(e => e.offset);
            const minOffset = Math.min(...offsets);
            return touches.find(e => e.offset == minOffset);
        }
    }

    #castRays() {
        this.rays = [];//initially empty 
        for (let i = 0; i < this.rayCount; i++) {
            const rayAngle = lerp(
                this.raySpread / 2,
                -this.raySpread / 2,
                this.rayCount == 1 ? 0.5 : i / (this.rayCount - 1)
            ) + this.car.angle;


            //figure  out angle oof each rays using lerp funtioion

            const start = { x: this.car.x, y: this.car.y };
            //where does ray should strt
            const end = {
                x: this.car.x - Math.sin(rayAngle) * this.rayLength,
                y: this.car.y - Math.cos(rayAngle) * this.rayLength
            };

            this.rays.push([start, end]);//push inside a rayy to form a segment// sameway as borders ******************




        }
    }
    //draw the senosrs
    draw(ctx) {
        for (let i = 0; i < this.rayCount; i++) {
            //traverse thu all count of rays

            let end = this.rays[i][1];
            if (this.readings[i]) {
                end = this.readings[i];
                //x and y values
            }

            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "yellow";
            ctx.moveTo(

                this.rays[i][0].x,//start locations of x&y
                this.rays[i][0].y
            );

            ctx.lineTo(
                end.x,//end locations of x&y
                end.y
            );
            ctx.stroke();


            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "black";
            ctx.moveTo(

                this.rays[i][1].x,//start locations of x&y
                this.rays[i][1].y
            );

            ctx.lineTo(
                end.x,//end locations of x&y
                end.y
            );
            ctx.stroke();
        }
    }
}

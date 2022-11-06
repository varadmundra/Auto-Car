class Sensor {
    constructor(car) {
        //car as an argument so that sensor know where car is
        this.car = car;
        this.rayCount = 3;//different direction
        this.rayLength = 100;//distance of rays
        this.raySpread = Math.PI / 4;//spread of reays in angle


        this.rays = [];


    }


    update() {
        this.rays = [];//initially empty 
        for (let i = 0; i < this.rayCount; i++) {
            const rayAngle = lerp(
                this.raySpread / 2,
                -this.raySpread / 2,
                i / (this.rayCount - 1)
            );


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

            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "yellow";
            ctx.moveTo(
                this.rays[i][0].x,//start locations of x&y
                this.rays[i][0].y
            );

            ctx.lineTo(
                this.rays[i][1].x,//end locations of x&y
                this.rays[i][1].y
            );
            ctx.stroke();
        }
    }
}

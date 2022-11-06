const canvas = document.getElementById("myCanvas");
canvas.width = 200;




const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
// const car = new Car(100, 100, 30, 50);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

// car.draw(ctx);


animate();
//define an animate funation

//upadte the car and draw the car again 
function animate() {
    car.update();

    canvas.height = window.innerHeight;  //resizes canvas and it is clear;

    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.7);

    road.draw(ctx);
    car.draw(ctx);



    ctx.restore();
    requestAnimationFrame(animate);
    //requestanimationFrame calls animate frame again and aagin many times per second
    // illusion of movement;

}
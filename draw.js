var car;
var obs = [];
var lanes = [];
var rpressed = false;
var lpressed = false;
var upressed = false;
var dpressed = false;
var exit = false;
var score = 0;
var speed = 150;
var frameCount = 0;
var adder = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 68 || e.keyCode == 39){ //right
        rpressed = true;
    } else if(e.keyCode == 65 || e.keyCode == 37) { //left
        lpressed = true;
    } else if(e.keyCode == 87 || e.keyCode == 38){
        upressed = true;
    } else if(e.keyCode == 83 || e.keyCode == 40){
        dpressed = true;
    }

}

function keyUpHandler(e) {
    if(e.keyCode == 39 || e.keyCode == 68) {
        rpressed = false;
    } else if(e.keyCode == 37 || e.keyCode == 65) {
        lpressed = false;
    } else if(e.keyCode == 87 || e.keyCode == 38){
        upressed = false;
    } else if(e.keyCode == 83 || e.keyCode == 40){
        dpressed = false;
    }
}

function collision(){
    obs.forEach(function(ob){
        if (car.x < ob.x + ob.w &&
        car.x + car.w > ob.x &&
        car.y < ob.y + ob.h &&
        car.h + car.y > ob.y){
            ob.hit = true;
        } });
        // collision detected!
}

function showScore(){
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + score, 5, 36);
}

function frames(delta){
    frameCount += delta + adder;
    console.log(frameCount);
    if (frameCount >= 30){
        frameCount = 0;
        speed += 100;
        console.log(speed);
        adder += 1/100;
    }
}

function setup(){
    car = new Car();
    lanes.push(new Lanes());
    obs.push(new Obstacle());
}

function show(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);



    collision();

    var currentAnimationTime = Date.now();
    var animationDelta = (currentAnimationTime - (car.lastAnimationTime || Date.now())) / 1000;

    car.lastAnimationTime = currentAnimationTime;

    frames(animationDelta);


    lanes.forEach(function(lane){
        lane.draw();
        lane.update(animationDelta, speed);

    });
    obs.forEach(function(ob){
        ob.draw();
        ob.update(animationDelta, speed);
    });


    car.draw();
    car.update(animationDelta, rpressed, lpressed, upressed, dpressed);

    showScore();

    obs.some(function(ob){
        if(ob.hit == true){
            exit = true;
            return;
        } else if(ob.scored == false && ob.y >= canvas.height - ob.w / 2){
            ob.scored = true;
            score += 1;
        }
    });

    if (obs[obs.length -1].y >= canvas.height / 2){
        var numObs = Math.floor(Math.random() * 4);
        if (numObs == 3 && score >= 5){
            obs.push(new Obstacle());
            obs.push(new Obstacle());
        } else{
            obs.push(new Obstacle());
        }
    }

    if (obs[0].y > canvas.height){
        obs.splice(0, 1);
    }

    if (lanes[lanes.length -1].y >= canvas.height / 4){
        lanes.push(new Lanes());
    }

    if (lanes[0].y > canvas.height){
        lanes.splice(0, 1);
    }


    if(!exit){
        window.requestAnimationFrame(show);
    } else{
        alert("Game Over! Your Score was: " + score);
        document.location.reload();
    }

}



document.onload = setup();
show();

function Lanes(){
    this.w = 5;
    this.x1 = (canvas.width  / 3) - (this.w / 2);
    this.x2 = (canvas.width) * 2 / 3 + (this.w / 2);
    this.h = canvas.height / 5;
    this.y = -this.h;
    //this.speed = 200;

    this.draw = function(){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x1, this.y, this.w, this.h);
        ctx.fillRect(this.x2, this.y, this.w, this.h);
    }

    this.update = function(delta, speed){
        this.y += (speed + 50) * delta;
    }
}
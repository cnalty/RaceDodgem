function Obstacle(){
    this.x = 0;
    this.w = 100;
    this.h = 150;
    this.y = -this.h;
    this.hit = false;
    //this.speed = 150;
    this.scored = false;

    this.setup = function(){
        this.pos = Math.floor(Math.random() * 3) + 1;

        if(this.pos == 1){
            this.x = this.w / 2.1;
        } else if(this.pos == 2) {
            this.x = (canvas.width - this.w) / 2;
        } else if(this.pos == 3) {
            this.x = canvas.width - this.w * 1.4;
        }
    }

    this.pos = this.setup();

    this.draw = function(){
        ctx.fillStyle = 'SaddleBrown';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    this.update = function(delta, speed){
        this.y += speed * delta;
        if (score % 10 == 0){
        }
    }
}
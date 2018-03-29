function Car(){
    this.w = 100;
    this.x = (canvas.width - this.w) / 2;
    this.h = 150;
    this.y = canvas.height - this.h - 20;
    this.lastAnimationTime = 0;
    this.pos = 1;
    this.speed = 250;

    this.draw = function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    this.update = function(delta, r, l, u, d){
        /*if(this.pos == 1){
            this.x = this.w / 2.1;
        } else if(this.pos == 2) {
            this.x = (canvas.width - this.w) / 2;
        } else if(this.pos == 3) {
            this.x = canvas.width - this.w * 1.4;
        }*/
        if(r && (this.x + this.w < canvas.width)){
            this.x += this.speed * delta;
        } else if(l && (this.x > 0)){
            this.x -= this.speed * delta;
        } else if(u && (this.y > 0)){
            this.y -= this.speed * delta;
        } else if(d && (this.y + this.h < canvas.height)){
            this.y += this.speed * delta;
        }
    }

}
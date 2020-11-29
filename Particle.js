class Particle{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 1.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,10,options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(1);
        fill(this.color);
        ellipse(0,0,10,10);
        pop();
    }
}
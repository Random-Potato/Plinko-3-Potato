class Plinko{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 1.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,10,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(1);
        fill(0,200,150);
        ellipse(0,0,10,10);
        pop();
    }
}
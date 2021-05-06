class Stone {
    constructor(x,y){
        var options={
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,30,options);
        this.radius=30;
        this.image = loadImage ("images/stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}
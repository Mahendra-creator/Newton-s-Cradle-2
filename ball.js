class Ball {
    constructor (x , y, radius){
        var options ={
            isStatic :true ,
            friction : 0.1,
            density : 1
        }
    this.body = Bodies.circle(x , y, radius , options);
    this.radius=radius;
    World.add(world , this.body);
    
    }
    display(){
        push();
        fill("red");
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
        
    }
    }
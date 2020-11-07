class Bob{
    constructor(x, y, radius){
        var options={
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.5         
        }

        
        this.body = Matter.Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    }
    display(){
        this.body.x = this.body.position.x;
        this.body.y = this.body.position.y;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0,0, this.width, this.height);
        pop();
    }
    }

 

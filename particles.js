class Particles
{
    constructor(x,y)
    {
        var option = {
            "restitution":0.4,
            "isStatic": false,
            "density" : 1.0   
        }

        this.r = 12;
        this.body=Bodies.circle(x,y,this.r,option);
        World.add(world,this.body);

        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        

        // this.image = loadImage("images/stone.png");
    }
    
    display()
    {
        var pos=this.body.position;
        var angle = this.body.angle;

        push();
        // translate(pos.x, pos.y);
        rotate(angle);

        fill(this.color);
        // fill(rgb(255, 2, 5));
        ellipseMode(CENTER);

        ellipse(pos.x+2, pos.y+2, this.r,this.r);  
        // imageMode(CENTER);
        // image(this.image, pos.x, pos.y, this.r*2, this.r*2);
        pop();
    }

}
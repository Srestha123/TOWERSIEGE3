class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            density:0.02
           
        }
        this.radius=30;
        this.body = Bodies.circle(x,y,this.radius,options);
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){
        var a=this.body.position;
      imageMode(CENTER);
      image(this.image,a.x,a.y,this.radius+30,this.radius+30);
    } 
}
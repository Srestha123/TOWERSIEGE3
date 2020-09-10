class Constraints{
    constructor(bodyA,bodyB){
        var options={
         'bodyA':bodyA,
         'bodyB':bodyB,
         'stiffness':0.04,
         'length':0.01                                    
        }
        this.bodyA=bodyA;
        this.bodyB=bodyB;
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }
    fly(){
     this.body.bodyA=null;   
    }
    attach(body){
        this.body.bodyA=body;
    }
    display(){
        push();
         strokeWeight(3)
         if(this.body.bodyA){
            line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y);
         }
         
        pop();
        }


}
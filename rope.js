class rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var option={
            bodyA:body1,
            bodyB:body2,
           pointB:{x:this.offsetX,y:this.offsetY}
        }
      
        this.rope=Constraint.create(option)
        World.add(world,this.rope)
       
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
        strokeWeight(5);
        var ach=pointB.x+this.offsetX
        var ach2=pointB.x+this.offsetY
        line(pointA.x,pointA.y,ach,ach2)
    }
}
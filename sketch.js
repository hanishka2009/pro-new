const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bob1,bob2,bob3,bob4,bob5,roof1
function preload()
{
}
function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
Engine.run(engine)
//Create the Bodies Here.
bob1=new bob(272,500,60,60)
bob2=new bob(331,500,60,60)
bob3=new bob (390,500,60,60)
bob4=new bob(452,500,60,60)
bob5=new bob(516,500,60,60)
roof1=new roof(387,300,300,30)
World.add(world,roof1)
rope1=new rope(bob1.body,roof1.body,-115,-100)
rope2=new rope(bob2.body,roof1.body,-55,-100)
rope3=new rope(bob3.body,roof1.body,5,-100)
rope4=new rope(bob4.body,roof1.body,70,-100)
rope5=new rope(bob5.body,roof1.body,130,-100)
}
function draw() {
rectMode(CENTER);
background(0255,255,255);
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

roof1.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-550,y:0})
console.log("hi")
}}
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,object,world;
var canvas
var Box1
var Box2
function setup(){
    var canvas = createCanvas(400,400);
  engine=Engine.create()  ;
  world=engine.world;
  Box1=new Box(200,250,60,40)
  Box2=new Box(300,200,30,20)
}

function draw(){
    background(0);
    Engine.update(engine)
  Box1.display()
  Box2.display()
}
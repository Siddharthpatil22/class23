const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box=new Box(200,300,40,40)
  ground=new Ground(200,380,400,20) 
box2=new Box(230,100,40,60)
   
    console.log(box2);
}

function draw(){
    background(0);
    Engine.update(engine);
 ground.display();
 box.display(); 
 box2.display();
}
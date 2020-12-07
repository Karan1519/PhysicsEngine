const Engine = Matter.Engine;
const World =Matter.World; 
const Bodies =Matter.Bodies;
var engine,world; 
function setup() {
var canvas = createCanvas(800,400); 
engine = Engine.create(); 
world = engine.world; 
object = Bodies.rectangle(200,100,50,50);
 World.add(world.object); 

 ball = Bodies.circle(200,100,20);
 World.add(world.ball); 
}
  function draw() { 
   background(0);

   console.log(object);
   console.log(object.type);
rect(object.position.x,object.position.y,50,50); rectMode(CENTER);

 }
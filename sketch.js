
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;
var wedge;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.5,
    frictionAir:0.01,
    isStatic:false
  }
   
   var ground_options ={
     isStatic: true
   };
  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  

  ball = Bodies.circle(200,40,20,ball_options);
  World.add(world,ball)
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("red");
  Engine.update(engine);
  
  
fill ("blue");
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,20,20);

 


  
  
}


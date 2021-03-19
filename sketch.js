const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane,plane2;
var hammer,stone,rubber;
var sand,sand2,sand3,sand4,sand5,iron;

function preload(){
	
}

function setup() {
	createCanvas(800, 700); 


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(400,height,800,30);
  plane2 = new Plane(0,350,30,700);
	hammer = new Hammer(100,200);
  stone = new Stone(180,365);
	rubber = new Rubber(350,46,55);
  iron = new Iron(250,365);
  sand = new Sand(290,46,15);
  sand2 = new Sand(290,46,15);
  sand3 = new Sand(290,46,15);
  sand4 = new Sand(290,46,15);
  sand5 = new Sand(290,46,15);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);
  plane.display();
  plane2.display();
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();
  sand.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  
  drawSprites();
 
}




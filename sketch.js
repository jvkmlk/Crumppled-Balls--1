
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper;
function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	paper=new Paper (100,300,10);

	//Create the Bodies Here.

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.display();
  
  drawSprites();
 
}




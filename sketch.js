
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var Roof,rope1,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5,bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof = new roof(400,380,210,15);
	
	bob1=new Bob(325,550,40);
	bob2=new Bob(365,550,40);
	bob3=new Bob(405,550,40);
	bob4=new Bob(445,550,40);
	bob5=new Bob(485,550,40);
	rope1=new Rope(bob1.body,Roof.body,-84,0)
	rope2=new Rope(bob2.body,Roof.body,-50,0)
	rope3=new Rope(bob3.body,Roof.body,-10,0)
	rope4=new Rope(bob4.body,Roof.body,37,0)
	rope5=new Rope(bob5.body,Roof.body,80,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white")
  
  drawSprites();
  
Roof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
    //  matter.body/..
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-5});

	}
}


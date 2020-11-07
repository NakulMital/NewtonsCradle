
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var diameter = 50;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(width/2, 100, diameter/2);
	bob2 = new Bob(width/2+diameter, 100, diameter/2);
	//bob3 = new Bob(width/2+100, 100, diameter/2);
	bob4 = new Bob(width/2-50, 100, diameter/2);
	//bob5 = new Bob(width/2-100, 100, diameter/2);
	//bob6 = new Bob(width/2-150, 100, diameter/2);
	//bob7 = new Bob(width/2-200, 100, diameter/2);
	//bob8 = new Bob(width/2+150, 100, diameter/2);
	//bob9 = new Bob(width/2+200, 100, diameter/2);
	

	ground = Bodies.rectangle(width/2, 660, width, 10, {isStatic: true})
	World.add(world, ground);

	groundSprite = createSprite(width/2, 20, 500, 30);
	groundSprite.shapeColor=("brown")

	slingShot1 = new SlingShot(bob1.body, {x:width/2, y:20})
	slingShot2 = new SlingShot(bob2.body, {x:width/2+diameter, y:20})
	//slingShot3 = new SlingShot(bob3.body, {x:width/2+100, y:20})
	slingShot4 = new SlingShot(bob4.body, {x:width/2-50, y:20})
	//slingShot5 = new SlingShot(bob5.body, {x:width/2-100, y:20})
	//slingShot6 = new SlingShot(bob6.body, {x:width/2-150, y:20})
	//slingShot7 = new SlingShot(bob7.body, {x:width/2-200, y:20})
	//slingShot8 = new SlingShot(bob8.body, {x:width/2+150, y:20})
	//slingShot9 = new SlingShot(bob9.body, {x:width/2+200, y:20})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  
  bob1.display();
  bob2.display();
  //bob3.display();
  bob4.display();
  //bob5.display();
  /*bob6.display();
  bob7.display();
  bob8.display();
  bob9.display();*/

  slingShot1.display();
  slingShot2.display();
  //slingShot3.display();
  slingShot4.display();
  //slingShot5.display();
  /*slingShot6.display();
  slingShot7.display();
  slingShot8.display();
  slingShot9.display();*/
	
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-155,y:0});
	}
}


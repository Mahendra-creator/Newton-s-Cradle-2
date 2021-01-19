const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var top;
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Stand(150, 100, 300 ,30)
	ball1 = new Ball(50, 300 , 20)
	ball2 = new Ball(90, 300 , 20)
	ball3 = new Ball(130, 300 , 20)
	ball4 = new Ball(170, 300 , 20)
	ball5 = new Ball(210, 300 , 20)
	string1 = new String(top.body, ball1.body, -160, 0)
	string2 = new String(top.body, ball2.body, -80,0)
	string3 = new String(top.body, ball3.body,0,0)
	string4 = new String(top.body, ball4.body,80,0)
	string5 = new String(top.body, ball5.body,160,0)

	Engine.run(engine);
	console.log(roof.body)
	
}

function draw() {
  rectMode(CENTER);
  background("lavender");
 Engine.update(engine);
console.log("hello");
roof.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
string1.display();
string2.display();
string3.display();
string4.display();
string5.display();

  console.log(World.mouseX,World.mouseY)
  text("hello",300,20)

 
}
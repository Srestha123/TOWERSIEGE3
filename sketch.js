
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score=0,bg="bg1.png",bg3;
var ball1,string,block1,block2,block3,block4,block5,backgroundImg;
function preload()
{
	getBackgroundImg();
	bg3=loadImage("bg1.png",800,700);
	
}

function setup() {
	createCanvas(800, 700);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1= new Ball(100,500);
block1=new Block(180,108,0,0);
block3=new Block(545,400,300,10);
string=new Constraints(ball1.body,block1.body);
block4=new Box(545,200);
block5=new Box(515,200);
block6=new Box(535,200);
block7=new Box(516,250);
block8=new Box(516,300);
ground=new Block(400,650,700,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(bg3)
  background(bg3);
 // block4.score();
 // block5.score();
  block6.score();
  block7.score();
  block8.score();
 block3.display();
  ball1.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 ground.display();
  string.display();
  textSize(30);
  fill("red");

  text("press space to bring back the stone",300,50);
  text("score:"+score,300,100);
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	string.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(ball1.body,{x:100,y:500});
		string.attach(ball1.body);
	}
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    
}





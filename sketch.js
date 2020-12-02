const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine, world;
var ball, ballimg;
var slingshot;
var platform;

var score = 0;


function preload(){
  ballimg = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450, 390, 900, 20);

  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);

  platform = new Ground(385,295,240,20);

  ball =  Bodies.circle(90,200,20);
  World.add(world,ball);

  slingshot = new SlingShot(this.ball, {x:100, y:200});

  Engine.run(engine);
}

function draw() {
  background(0);
  
  textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)


  ground.display();
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();


  platform.display();
  
  imageMode(CENTER);
  image(ballimg, ball.position.x, ball.position.y, 40, 40);
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32) {
    slingshot.attach(this.ball);
  }
}

async function getBackgroundImg(){
  var response = await fetch(" http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "yellow.png";
  }
  else{
      bg = "blue.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

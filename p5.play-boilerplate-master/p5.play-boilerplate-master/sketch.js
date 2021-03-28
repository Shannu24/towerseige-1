const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground
var stand1,stand2
var ball
var slingshot
var ballimage

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13
var bix1,bix2,bix3,bix4,bix5,bix6,bix7,bix8,bix9,bix10,bix11,bix12,bix13


function preload(){
  ballimage=loadImage("polygon.png")





}


function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(900,500);
 

ground=new Ground(450,490,900,20)
  stand1=new Stand(390,350,250,10)
  stand2=new Stand(700,250,250,10)
  ball=Bodies.circle(50,200,20)
  World.add(world,ball);
  slingshot=new SlingShot(this.ball,{x:100,y:200})

  box1 = new Box(390,330,30,40)
  box2 = new Box(390,330,30,40)
  box3 = new Box(390,330,30,40)
  box4 = new Box(390,330,30,40)
  box5 = new Box(390,330,30,40)

  box6 = new Box(390,300,30,40)
  box7 = new Box(390,300,30,40)
  box8 = new Box(390,300,30,40)
  box9 = new Box(390,300,30,40)

  box10 = new Box(390,270,30,40)
  box11 = new Box(390,270,30,40)
  box12 = new Box(390,270,30,40)

  box13 = new Box(390,240,30,40)
  box14 = new Box(390,240,30,40)

  box15 = new Box(390,200,30,40)



  bix1 = new Box(700,230,30,40)
  bix2 = new Box(700,230,30,40)
  bix3 = new Box(700,230,30,40)
  bix4 = new Box(700,230,30,40)
  bix5 = new Box(700,230,30,40)

  bix6 = new Box(700,200,30,40)
  bix7 = new Box(700,200,30,40)
  bix8 = new Box(700,200,30,40)
  bix9 = new Box(700,200,30,40)

  bix10 = new Box(700,170,30,40)
  bix11 = new Box(700,170,30,40)
  bix12 = new Box(700,170,30,40)

  bix13 = new Box(700,140,30,40)
  bix14 = new Box(700,140,30,40)

  bix15 = new Box(700,100,30,40)







}

function draw() {

  Engine.update(engine);
  background(0);
  fill("yellow") 
  textSize(20)
  text("Drag the hexagon stone and release it to launch it towards towards the block ",100,30) 
  drawSprites();

  ground.display();
  stand1.display();
  stand2.display();
  fill("pink")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();





  bix1.display();
  bix2.display();
  bix3.display();
  bix4.display();
  bix5.display();
  bix6.display();
  bix7.display();
  bix8.display();
  bix9.display();
  bix10.display();
  bix11.display();
  bix12.display();
  bix13.display();
  bix14.display();
  bix15.display();



  imageMode(CENTER);
  image(ballimage,ball.position.x,ball.position.y,40,40)

  slingshot.display();
}

function mouseDragged(){
    
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    
}

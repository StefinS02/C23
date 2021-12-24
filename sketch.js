const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg;
var tower, towerImg;
var cannon
var cannonBall
var angle;

function preload() {
 backgroundImg = loadImage("assets/background.gif");
 towerImg = loadImage("assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }
 ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
 tower = Bodies.rectangle(160,350,150,310, options);
 World.add(world, tower);
 World.add(world, ground);
 
 angleMode(DEGREES);
 angle = 20;
 cannon = new Cannon(175, 112, 130, 100, angle);
 cannonBall = new CannonBall(cannon.x, cannon.y, 30);

}

function draw() {
  background(189);
  image(backgroundImg, 600, 300, 1200, 600);
 rect(ground.position.x, ground.position.y, width *2, 1);
 imageMode(CENTER);
 image(towerImg, tower.position.x, tower.position.y, 150, 310);
  Engine.update(engine);
  cannon.display();
  cannonBall.display();
}

function keyReleased(){
  if(keyCode == DOWN_ARROW){
    cannonBall.shoot();
  }
}

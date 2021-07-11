var garden,rabbit;
var gardenImg,rabbitImg;
var apple, apple_img ;
var leave, leave_img;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_img = loadImage("apple.png");
  leave_img = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);

rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  spawnLeaves();
  spawnApple();
  drawSprites();
}


function spawnApple(){
  if(frameCount % 80 === 0){
  apple = createSprite(50,150,20,20);
  apple.addImage(apple_img);
  apple.x = Math.round(random(50,300));
  apple.velocityY = +5;
  apple.scale = 0.08;
  apple.lifetime = 40;
  }
}
function spawnLeaves(){
  if(frameCount % 120 === 0){
  leave = createSprite(300,150,20,20);
  leave.x = Math.round(random(50,300));
  leave.addImage(leave_img);
  leave.velocityY = +5;
  leave.scale = 0.08;
   leave.lifetime = 40;
  }
}

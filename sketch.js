var  path,surfer,left_boundary,right_boundary;
var pathImg,surferImg;
function preload(){
  //pre-load images
pathImg = loadImage("path.png");
surferImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.2

surfer = createSprite(200,200);
surfer.addAnimation("running" , surferImg);
surfer.velocityY = 4;
surfer.scale = 0.1;

left_boundary = createSprite(0,300,100,600);
right_boundary = createSprite(390,300,80,600);
left_boundary.visible = false;
right_boundary.visible = false;





}

function draw() {
  background(0);

  surfer.x = World.mouseX;
  //code to reset the background
if (path.y > 400) {
  path.y = height/2;
}
surfer.collide(left_boundary);
surfer.collide(right_boundary);
edges = createEdgeSprites();
surfer.collide(edges[3]);
  drawSprites();
}

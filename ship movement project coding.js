
function preload(){
sealing = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.pmg","ship-2.png","ship-3.png","ship-4")
}
function setup(){
  createCanvas(400,400);
  sea = createSprite(50,50,20,100)
  edges = createEdgeSprites()
} 


function draw() {
  background("skyblue");
sea.sea.png(sealing)
if(sea.x < 0){
  sea.x = sea.width/2;
}
if(keyDown("space")){
  ship.velocityY = -7
}
ship.velocityX = ship.velocitX+0.8
ship.collide(edges[3])
 drawSprite()
}

function preload(){
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = creatSprite(200,200);
  Path.addImage(pathIma);
  path.velocityY = 4;
  path.scale=1.2;

}

function draw() {
  background(0);
  if(path.y > 400 ){
  path.y = height/2;

  }



}

var garden,rabbit;
var gardenImg,rabbitImg;
var apple, orange,red;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  createCanvas(400,400);
  var rand
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;
  createApples();
  createOranges();
  createRed();
  drawSprites();
  
}
 
function createApples(){
  if (frameCount%80===0){
  apple= createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.1;
  apple.velocityY= 3;
  apple.lifetime= 150
}
}

function createOranges(){
  if (frameCount%80===1){
 orange= createSprite(random(50,350),40,10,10);
 orange.addImage(orangeImg);
 orange.scale=0.1;
 orange.velocityY= 3;
 orange.lifetime= 150
}
}

function createRed(){
  if (frameCount%80===2){
  red= createSprite(random(50,350),40,10,10);
  red.addImage(redImg);
  red.scale=0.1;
  red.velocityY= 3;
  red.lifetime= 150
}
}

var selectSpristes= Math.round(random(1,3));

  /*if (frameCount%80===0){
    if(selectSpristes===1){
      createApples()
    } else if(selectSpristes===2){
      createOranges();
    } else{
      createRed();
    }
  }*/
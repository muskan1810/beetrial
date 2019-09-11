
var bee, bee2;
var g ="p";
var score =0;
var FG, E;
var b1, b2, eg, f1, f2, f3, eg1;
var win, lose;
function preload(){
 b1 = loadImage("Imported piskel.gif");
 eg  = loadImage("Imported piskel (5).gif");
  eg1 = loadImage("download (2).jpg");
  f2 = loadImage("Imported piskel (4).gif");
   f3 = loadImage("Imported piskel (3).gif");
f1  = loadImage("Imported piskel (2).gif");
b2   = loadImage("Imported piskel (1).gif");
  win = loadImage("download (3).jpg");
   lose = loadImage("images.jpg");
 
  restartImg = loadImage("logo-skype-computer-icons-service-restart-thumbnail.jpg");
  
}

function setup() {
  createCanvas(600, 400);
  
   bee = createSprite(200,200,20,60);
   bee.addImage(b2);
     FG = new Group();
  E = new Group();
  createEdgeSprites();
  
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
 
  restart.scale = 0.5;

  
  restart.visible = false;
}

function draw() {
  background("white");
  text(score,170,20);
  edges = createEdgeSprites();
  if (g=="p"){
     if (keyDown("down")) {
    bee.velocityX = 0;
    bee.velocityY = 5;
  }
  if (keyDown("up")) {
    bee.velocityX = 0;
    bee.velocityY = -5;
  }
  if (keyDown("right")) {
    bee.velocityX = 5;
    bee.velocityY = 0;
   bee.addImage(b2);
  }
  if (keyDown("left")) {
    bee.velocityX = -5;
    bee.velocityY = 0;
    bee.addImage(b1);
  }
    
    flowers();
  eagle();
  if (FG.isTouching(bee)){
    score = score +1;
    FG.setLifetimeEach(0);
  }
   if (E.isTouching(bee)){
    score=score-1;
    E.setLifetimeEach(0);
}

if(score== -5 || score==10){
 g="o"; 
}
    
    
    
  } else if (g=="o"){
   
    restart.visible = true;
    
     bee.velocityX=0;
    bee.velocityY=0;
    FG.setLifetimeEach(0);
    E.setLifetimeEach(0);
    if(score==10){
   background(win);
      bee.visible=false;
}
 if(score== -5){
   bee.visible=false;
   background(lose);
  
}
      if(mousePressedOver(restart)) {
      reset();
    }
  
    
  }
    
  bee.bounceOff(edges[0]);
   bee.bounceOff(edges[1]);
   bee.bounceOff(edges[2]);
   bee.bounceOff(edges[3]);
    
    
  drawSprites();
}

function flowers() {
  if(World.frameCount % 60 === 0) {
    var flower = createSprite(400,365,10,40);
     var r = random(0,400);
    flower.y= r;
    flower.x=r;
//flower.scale=0.2;
    //generate random obstacles
    var rand = Math.round(random(1,3));
  
    switch(rand) {
      case 1: flower.addImage(f1);
              break;
      case 2: flower.addImage(f2);
              break;
      case 3: flower.addImage(f3);
              break;
      default: break;
    }
    //assign scale and lifetime to the obstacle           
    flower.scale = 0.3
    flower.lifetime = 50;
    //add each obstacle to the group
    FG.add(flower);
  }
}

function eagle() {
  //write code here to spawn the clouds
  if (World.frameCount % 130 === 0) {
    var e = createSprite(400,320,40,10);
    e.x = random(10,370);
    e.y = random(10,370);
   var rand1= Math.round(random(1,2));
  
    switch(rand1){
      case 1: e.addImage(eg1);
              break;
      case 2: e.addImage(eg);
              break;
      
      default: break;
    }
    e.scale = 0.2;
   
    
     //assign lifetime to the variable
    e.lifetime = 90;
    
    //adjust the depth
    
    //add each cloud to the group
    E.add(e);
  }
  
}
function reset(){
  g="p";
 
  restart.visible = false;
  
  FG.destroyEach();
  E.destroyEach();
  
  bee.visible= true;
  
  if(localStorage["HighestScore"]<score){
    localStorage["HighestScore"] = score;
  }
  
  console.log(localStorage["HighestScore"]);
  
  score = 0;
  
}

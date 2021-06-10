var cat,catIMG;
var catIMG2;
var garden,gardenIMG;
var mouse,mouseIMG,mouseIMG2,mouseIMG3;

function preload() {
   
  catIMG=loadAnimation("cat1.png");
  catIMG2=loadAnimation("cat4.png")
  gardenIMG=loadImage("garden.png");
  mouseIMG=loadAnimation("mouse1.png");
  mouseIMG3=loadAnimation("mouse3.png");
  mouseIMG2=loadAnimation("mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat=createSprite(200,200);
    cat.addAnimation("catSitting",catIMG);
    mouse=createSprite(600,200);
    mouse.addAnimation("mouseStanding",mouseIMG2);

}

function draw() {

    background(255);
 //Write condition here to evalute if tom and jerry collide

if(cat.x-mouse.x<(cat.width+mouse.width)/2||mouse.x-cat.x<(cat.width+mouse.width)/2){
  cat.addAnimation("catHappy",catIMG2);
  cat.changeAnimation("catHappy");
  mouse.addAnimation("mousehappy",mouseIMG);
  mouse.changeAnimation("mousehappy");



}


    drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouseteasing",mouseIMG3);
mouse.changeAnimation("mouseteasing");
mouse.frameDelay=25;

}


}

//Create variables here
var dog;
var happydog;
var datbase;
var foods;
var foodstock;

var hi;
var bye;
function preload()
{
hi=loadImage("images/dogimg.png")
bye=loadImage("images/dogimg1.png")
}

function setup() {
	createCanvas(500,500);
  
  database = firebase.database();
  
  dog=createSprite(250,300,20,20)
  dog.addImage(hi)
  dog.scale=0.2

  foodstock=database.ref('food')
  foodstock.on("value",readStock)
}


function draw() {  
background(46,139,87)



if(keyWentDown(UP_ARROW)){
  writeStock(foods)
    dog.addImage(bye)
}






  drawSprites();
  //add styles here
  textSize(30)
  fill("black")
  text("Food remaining: "+ foods,10,30)
}

function readStock(data){
  foods=data.val();
}
 


function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  
  
  
  
  database.ref('/').update({
    food:x
  })
}
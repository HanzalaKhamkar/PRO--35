var dog,dog_Img,dog_Img1;
var database;
var foods,foodStock;
var feed,addFood,foodObj,feedDog,addFoods,fedTime,lastFed;

function preload(){
   dog_Img=loadImage("Dog.png");
   dog_Img1=loadImage("happy dog.png");
  }

function setup() {
  database=firebase.database();
  createCanvas(500,500);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog=createSprite(350,300,150,150);
  dog.addImage(dog_Img);
  dog.scale=0.15;

  feed=createButton("Feed the dog");
  feed.position(600,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(700,95);
  addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
 
  foodObj.display();

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Feed : 12 AM",350,30);
   }else{
     text("Last Feed : "+ lastFed + " AM", 350,30);
   }

  drawSprites();

}

function readStock(data){
  foods=data.val();
  foodObj.updateFoodStock(foods);

}
  
  function feedDog() {
    dog.addImage(dog_Img1);
  
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    fedTime:hour ()
  })

}

function addFoods(){
  foods++;
  database.ref('/').update({
    Food:foods
  })
}
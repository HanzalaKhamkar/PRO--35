class Food {
    constructor(){
        this.foodStock=0;
        this.lastFed;
        this.image=loadImage("Milk.png");
        }


updateFoodStock(foodStock){
     this.foodStock=foodStock;
 }
        
 getFedTime(lastFed){
     this.lastFed=lastFed;
 }
        
 deductFood(){
  if(this.foodStock>0){
    this.foodStock=this.foodStock-1;
     }
     }
        
 getFoodStock(){
     return this.foodStock;
}

display(){
     var x=80,y=100;
                
 imageMode(CENTER);
 image(this.image,720,220,70,70);
                
 if(this.foodStock!=0){
    for( var i=0;i<this.foodStock;i++){
      if(i <= 9){
         image(this.image,i*30 + 10,200,50,50);
         x=x+30;
        
        }

        else {
            image (this.image, (i - 10)*30 + 10, 290, 50 ,50);
        }
        
         }
         }
     }

    








    }
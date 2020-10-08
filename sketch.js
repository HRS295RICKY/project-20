var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);

  speed = random(55,200);
  weight = random(100,700);

  wall = createSprite (700, 200, 50, height/2);
  car = createSprite (50,200,50,50);
  car.velocityX= speed;
  
}

function draw() {
  background("black");  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor = ("red"); 
    } 
     if(deformation<180 && deformation>100)
     {
        car.shapecolor = (230, 230, 0);
     }
     if(deformation<100)
     {
      car.shapeColor = ("green");   
     }  
   
  
  }
  drawSprites();
}
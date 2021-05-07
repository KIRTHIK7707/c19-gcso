var car,wall;
var speed,weight

function setup() {
  createCanvas(1600,400);
  
  car=createSprite(50,200,50,50);
wall=createSprite(1800,500,2000,height/2)


speed=random(55,90)
weight=random(900,1500)


car.velocityX=5;


}

function draw() {
  background("black");  
  

if(wall.x-car.x<(car.weidth+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 * weight * speed* speed/22500;

if(deformation>180)
{
car.shapeColor=color("red");
wall.shapeColor=color("white")
}

if(deformation<180 && deformation>100)
{
  car.shapeColor=color("yellow")
  wall.shapeColor=color("white")
}

if(deformation<100)
{
  car.shapeColor=color("green");
  wall.shapeColor=color("white")
}

}

drawSprites();

}
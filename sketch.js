var a
var b


function setup() {
  createCanvas(500,400);

  a1= createSprite(400, 200, 50, 50);
  a1.shapeColor="red"
  b1= createSprite(300, 100, 50, 50);
  b1.shapeColor="red"
  c=createSprite(100,300,50,50)
  c.shapeColor="red"
}

function draw() {
  background(255,255,255); 
  
  if(hi(a1,c)){
    a1.shapeColor="black"
    c.shapeColor="black"
     }
     else{
       a1.shapeColor="red"
       c.shapeColor="red"
     }

  
  
  drawSprites();
  

  a1.x=mouseX
  a1.y =mouseY
  
}

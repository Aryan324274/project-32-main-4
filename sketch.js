
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops=100;
function preload(){
    
}

function setup(){
    createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

boy=new Man(400,562,10,10)
ground= new Ground(400,780,800,10)
A= new Drops (200,250,50,50)
B= new Drops (250,400,50,50)
C= new Drops (300,100,50,50)
D= new Drops (350,200,50,50)
E= new Drops (400,20,50,50)
F= new Drops (450,560,50,50)
G= new Drops (50,70,50,50)
H= new Drops (150,60,50,50)
I= new Drops (60,140,50,50)
J= new Drops (650,100,50,50)
K= new Drops (500,150,50,50)
L= new Drops (650,200,50,50)
M= new Drops (570,330,50,50)
N= new Drops (50,340,50,50)
O= new Drops (200,150,50,50)
Q= new Drops (95,460,50,50)
R= new Drops (600,400,50,50)
S= new Drops (550,470,50,50)



	Engine.run(engine);
    
}

function draw(){
    rectMode(CENTER);
  background(0);

 boy.display();
ground.display();
A.display();
B.display();
C.display();
D.display();
E.display();
F.display();
G.display();
H.display();
I.display();
J.display();
K.display();
L.display();
M.display();
N.display();
O.display();

Q.display();
R.display();
S.display();


rand = Math.round(random(1,4));
if(frameCount%80===0){
  thunderCreatedFrame=frameCount;
  thunder = createSprite(random(10,370),random(10,30),10,10);
  switch(rand){
    case 1:thunder.addImage(thunder1);
    break;
    case 2:thunder.addImage(thunder2);
    break;
    default:break;
  }
  thunder.scale=random(0.8,0.6)
}
  

  drawSprites();
    
}   


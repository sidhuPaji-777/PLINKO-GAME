
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground, plinko, particles;
var division1, division2, division3, division5, division6, division7, division8, division9, division10;

var arryParticles = [];
var arryPlinko = [];
var division = [];
var divisionHeight = 300;
var div;
var rand;



function setup() {
  createCanvas(480,650);
  engine = Engine.create();
	world = engine.world;
  
  // Creating ground
  ground = new Ground(width/2, height/2+318, 500, 20);
  
  
  
  // Creating Plinkos ______________________________R1
  for(var i=40; i<=width; i=i+50)
  {
    arryPlinko.push(plinko = new Plinko(i, 60));

    // Creating Plinkos ______________________________R3
    arryPlinko.push(plinko = new Plinko(i, 200));
  }
  
  // Creating Plinkos ______________________________R2
  for(var i=15; i<=width; i=i+50)
  {
    arryPlinko.push(plinko = new Plinko(i, 130));

    // Creating Plinkos ______________________________R4
    arryPlinko.push(plinko = new Plinko(i, 270));

    arryPlinko.push(plinko = new Plinko(i+5, 340));
  }

  

  
  
  Engine.run(engine);
}





function draw() {
  background(0);  
  textSize(20);
  fill("YELLOW");
  text("Press Space for Spawning the Particles", 50, 30);

  // if(keyWentDown("SPACE"))
  // {
  //   // how to put asycronas
  //   arryPlinko.push(particles=new Particles(rand, 50, 10, 10));
  //   particles.display();
  // }

  if(frameCount%60===0)
  {
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10)
    arryPlinko.push(particles=new Particles(rand, 50, 10, 10));
  }
  // particles.display();
  
  rand = Math.round(random([60, 115, 171, 220, 270, 320, 420]));
  
  
  // Creating Divisions
  for (var d = 0; d <=width; d = d + 80) {
    division.push(div = new Division  (d, height-divisionHeight/7, 10, divisionHeight));
    div.display();
  }
  // Displaying plinkos
  for (var i = 0; i < arryPlinko.length; i++) 
  {
    arryPlinko[i].display();
  }

   // Displaying plinkos
   for (var i = 0; i < arryPlinko.length; i++) 
   {
    arryPlinko[i].display();
   }

   
   
   
  ground.display();
  
  drawSprites();
}


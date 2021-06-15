var starImg,bgImg,fairyImg;
var star, starBody,fairy,fairyB;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
   fairy=createSprite  (130,520,10,10)
   fairy.addAnimation("marypoppins", fairyImg)
   fairy.scale = 0.2
  

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
    fairyB = Bodies.rectangle(130,520,10,10)
	World.add(world, fairyB);

	Engine.run(engine);


}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  fairy.velocityX = 0;
  fairy.velocityY = 0;

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);

  }

  drawSprites();
  keyPressed();

}

function keyPressed() {

	if(keyDown ("left_arrow")){
		fairy.velocityX=-4
		fairy.velocityY=0

	}
	if(keyDown ("right_arrow")){
		fairy.velocityX=4
		fairy.velocityY=0

	}

	if(keyCode === DOWN_ARROW){
       Matter.Body.setStatic(starBody,false);
	}
}

var sun, sunimg;
var planet1, planet2, planet3, planet4;
var planet1img, planet2img, planet3img, planet4img;
var backdropimg;
var backdrop;

function preload() {

  // Load assets
  sunimg = loadImage('assets/sun.png');
  backdropimg = loadImage('assets/background.jpg');
  planet1img = loadImage('assets/planet1.png');
  planet2img = loadImage('assets/planet2.png');
  planet3img = loadImage('assets/planet3.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create the backdrop sprite
  backdrop = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);

  // Create the planets, add the images and rotate them
  planet1 = createSprite(windowWidth/2, windowHeight/2-100);
  planet1.addImage(planet1img);
  planet1.rotateToDirection = true;
  planet1.velocityX = 5;

  planet2 = createSprite(windowWidth/2, windowHeight/2-150);
  planet2.addImage(planet2img);
  planet2.rotateToDirection = true;
  planet2.velocityX = 3;

  planet3 = createSprite(windowWidth/2, windowHeight/2-250);
  planet3.addImage(planet3img);
  planet3.rotateToDirection = true;
  planet3.velocityX = 3;

  // Create the sun and add the image
  sun = createSprite(windowWidth/2, windowHeight/2);
  sun.addImage(sunimg);

  // Add the background image to backdrop
  backdrop.addImage(backdropimg);
  
  // Scale
  sun.scale = 0.2;
  planet1.scale = 0.09;
  planet2.scale = 0.09;
  planet3.scale = 0.09;
}

function draw() {
  background(255);
  fill(255, 100, 0);

  // Increase the size of the sun
  if(frameCount % 1 === 0 && sun.scale < 2.5){
    sun.scale+=0.005
  }

  planet1.rotation+=3;
  planet2.rotation+=1;
  planet3.rotation+=0.7;

  // Render the sprites
  drawSprites();
}
var spaceshipImage1, balloonImage , spaceshipImage2
var bulletImage 
var bullet,bullets , bulletG
var asteroid, asteroidG , asteroidG1 , asteroid1 , asteroid2 , asteroidG2 , position
var score = 0
var lives = 5
var END = 0
var invisibleGround,spaceImg , invisibleGround1 , allPlayers , handleballoonsG , handleballoonsG1, handleballoonsG2
var gameState = 0, playerCount = 0, player , form , spaceships ,spaceship1 , spaceship2
var asteroidG , asteroidG1 , asteroidG2
var  bigAsteroidImg , health , bigAsteroidG , canvas ,  backgroundImg , titleImg , spaceships = [] ,positionX , positionY , x,y


function preload(){
  backgroundImg = loadImage("background.jpg")
  spaceshipImage1= loadImage("pin1.png")
  spaceshipImage2 = loadImage("pin2.png")
  spaceImg = loadImage("space.png")
  balloonImage = loadImage("balloon.png")


}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  game = new Game()
game.getState()
game.start()
console.log("playe")


}



function draw(){
  
 //background(backgroundImg) 
    
 // console.log(playerCount + "players")
  

 if(playerCount == 2){
  game.update(1)
   //console.log("gameState")
 }

 
 if(gameState == 1){
   game.play()
 }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

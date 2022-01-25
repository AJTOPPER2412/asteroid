class Game {
    constructor() {
      this.resetTitle = createElement("h2");
      this.resetButton = createButton("");
  
      this.leadeboardTitle = createElement("h2");
  
      this.leader1 = createElement("h2");
      this.leader2 = createElement("h2");
      
    }
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
    update(state) {
      database.ref("/").update({
        gameState :state
      });
    }

    start() {
        player = new Player();
        playerCount = player.getCount();
    
        form = new Form();
        form.display();
    
        spaceship1 = createSprite(width / 2 - 50, height - 100);
       spaceship1.addImage(spaceshipImage1);
     spaceship1.scale = 0.1;
    
        spaceship2 = createSprite(width / 2 + 100, height - 100);
        spaceship2.addImage(spaceshipImage2 );
        spaceship2.scale = 0.25;
    
        spaceships = [spaceship1, spaceship2];
    
     
       asteroidG = new Group();
       asteroidG1 = new Group();
       asteroidG2 = new Group();
        
       image(spaceImg, 0, -height * 5, width, height * 6);


       
    }    


    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      form.titleImg.class("gameTitleAfterEffect");
  
      //C39
      this.resetTitle.html("Reset Game");
      this.resetTitle.class("resetText");
      this.resetTitle.position(width / 2 + 200, 40);
  
      this.resetButton.class("resetButton");
      this.resetButton.position(width / 2 + 230, 100);
  
      this.leadeboardTitle.html("Leaderboard");
      this.leadeboardTitle.class("resetText");
      this.leadeboardTitle.position(width / 3 - 60, 40);
  
      this.leader1.class("leadersText");
      this.leader1.position(width / 3 - 50, 80);
  
      this.leader2.class("leadersText");
      this.leader2.position(width / 3 - 50, 130);
    }
    handleResetButton() {
      this.resetButton.mousePressed(() => {
        database.ref("/").set({
          playerCount: 0,
          gameState: 0
        });
        window.location.reload();
      });
    }
    play(){
        this.handleElements()
        this.handleResetButton()
        Player.getPlayersInfo()
        this.handlePlayerControls()
       
        form.hide()
        this.createBalloons()
       
      

        if (allPlayers !== undefined) {
          image(spaceImg, 0, -height * 5, width, height * 6);
          

  
        //index of the array
        var index = 0;
        for (var plr in allPlayers) {
          //add 1 to the index for every loop
          index = index + 1;
  
          //use data form the database to display the cars in x and y direction
          var x = allPlayers[plr].positionX;
          var y = height - allPlayers[plr].positionY;


          if(index === player.index){
            stroke(10)
            fill("red")
          this.handleballoonsG()
          this.handleballoonsG1()
          //  ellipse(x,y,50,60)
           // camera.position.y = cars[index-1].position.y
           //camera.position.y = cars[index - 1].position.y;
               
        
        
              }
             spaceships[index - 1].position.x = x
             spaceships[index - 1].position.y = y
        }


      drawSprites()
    }
  }


  handlePlayerControls() {
   
      if (keyIsDown(UP_ARROW)) {
   //     this.playerMoving = true;
        player.positionY += 10;
        player.update();
      }

      if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) {
  //      this.leftKeyActive = true;
        player.positionX -= 5;
        player.update();
      }

      if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) {
     //   this.leftKeyActive = false;
        player.positionX += 5;
        player.update();
      }
    
  }


  createBalloons(){
    if(frameCount % 70 == 0){
      asteroid = createSprite(300,0,20,20) 
    asteroid.addImage("asteroids" , balloonImage)
    asteroid.x = Math.round(random(30,1000))
    asteroid.scale = 0.25
    asteroid.velocityY = 10
     asteroidG.add(asteroid)
    asteroid.debug = false
    }
     
     if(frameCount % 80 == 0){
     asteroid1 = createSprite(200,0,20,20) 
    asteroid1.addImage("asteroids" , balloonImage)
    asteroid1.x = Math.round(random(30,1000))
    asteroid1.scale = 0.25
    asteroid1.velocityY = 10
    asteroidG1.add(asteroid1)
    asteroid1.debug = false
    
    }
      if(frameCount % 90 == 0){
     asteroid2 = createSprite(200,0,20,20) 
    asteroid2.addImage("asteroids" , balloonImage)
    asteroid2.x = Math.round(random(30,1000))
    asteroid2.scale = 0.25
    asteroid2.velocityY = 10
     asteroidG2.add(asteroid2)
    asteroid2.debug = false
      }
  }



  handleballoonsG(index) {
    console.log("outer")
     spaceships[index - 1].overlap(asteroidG, function(collector, collected) {
      console.log("aa")
      player.score += 1;
      player.update();
      //collected is the sprite in the group collectibles that triggered
      //the event
      collected.remove();
    });
   
  }
  handleballoonsG1(index) {
    spaceships[index - 1].overlap(asteroidG1, function(collector, collected) {
      player.score += 1;
      player.update();
      //collected is the sprite in the group collectibles that triggered
      //the event
      collected.remove();
    });
  }
  handleballoonsG2(index) {
    spaceships[index - 1].overlap(asteroidG2, function(collector, collected) {
      player.score += 1;
      player.update();
      //collected is the sprite in the group collectibles that triggered
      //the event
      collected.remove();

    });
  }




























}
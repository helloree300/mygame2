class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  create dory(){
    if(World.frameCount %200 === 0){
      var dory = createSprite(400,300,30,40);
      dory.addImage(dory_img);
      dory.y = Math.round(random(500,200));
      dory.velocityX = 5;
      dory.setLifetime = 150;
    }
    }
   
    create turtle(){
      if(World.frameCount %200 === 0){
        var turtle = createSprite(400,200,20,20);
        turtle.addImage(turtle_img);
        turtle.y = Math.round(random(100,300));
        turtle.velocityX = 3
        turtle.setLifetime = 50;
        
      }
      }
   
      create shark(){
        if(World.frameCount %200 === 0){
          var shark = createSprite(400,200,20,20);
          shark.addImage(shark_img);
          shark.y = Math.round(random(200,400));
          shark.velocityX = 4;
          shark.setLifetime = 200;
        }
        }
   
       create bottle(){
          if(World.frameCount %200 === 0){
            var bottle = createSprite(400,200,20,20);
            bottle.addImage(bottle_img);
            bottle.y = 3
            bottle.velocityX = 6;
            bottle.setLifetime = 50;
          }
          }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

  //creating nemo
  nemo=createSprite(600,550,30,40);
  nemo.addImage(nemo_img);
  nemo.scale=0.04
 
  //creating dory
  dory=createSprite(400,300,30,40);
  dory.addImage(dory_img);
  dory.scale=0.03
 
  //creating turtle
  turtle=createSprite(800,450,20,40);
  turtle.addImage(turtle_img);
  turtle.scale=0.05

  //creating turtle
  bruce=createSprite(800,450,20,40);
  bruce.addImage(bruce_img);
  bruce.scale=0.05

  //creating turtle
  bottle=createSprite(800,450,20,40);
  bottle.addImage(bottle_img);
  bottle.scale=0.05

  //creating turtle
  coin=createSprite(800,450,20,40);
  coin.addImage(coin_img);
  coin.scale=0.05

  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
    this.createTurtle()
    this.createDory()
    this.createBottle()
    this.createShark()
      //if(bruce.isTouching(nemo)){
        //explosionSound.play();
        //}

        //if(coin.isTouching(coin)){
            //pointSound.play();
        //}

    drawSprites();
  }
 }
 //   updatePosition(){
//     if(keyDown(LEFT_ARROW)){
//         writePosition(-10,0);
//     }
//     else if(keyDown(RIGHT_ARROW)){
//         writePosition(10,0);
//     }
//     else if(keyDown(UP_ARROW)){
//         writePosition(0,-10);
//     }
//     else if(keyDown(DOWN_ARROW)){
//         writePosition(0,+10);
//     }
//   }
//    writePosition(x,y){
//     //ball.x = ball.x + x;
//     //ball.y = ball.y + y;

//     database.ref("players/"+player.index).set({
//         xPosition:xPosition+x,
//         yPosition:yPosition+y,    
//     })
//    }
//     readPosition(data){
//     var position = data.val()
//     }

}

  


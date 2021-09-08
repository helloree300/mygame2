var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var nemo,dory,bruce,turtle,background,bottle;


function preload(){
  nemo_img=loadImage("images/nemo.PNG");
  bottle_img=loadImage("images/waterbottle.jpeg");
  dory_img=loadImage("images/dory.PNG");
  shark_img=loadImage("images/shark.PNG");
  background_img=loadImage("images/background.jpg");
  turtle_img=loadImage("images/turtle.PNG");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  //game.start();
}


function draw(){
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

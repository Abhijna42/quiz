var canvas, backgroundImage;

var gameState = 0;
var contestentCount;
var allContestents;
var answer ; 
var database;

var question, contestent, quiz;





function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  if(contestentCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
 
}

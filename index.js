var questions = [
  {
    question : "Whats is the capital of Jharkhand? ",
    answer : "ranchi"
  },
  {
    question : "Whats is the capital of Bihar? ",
    answer : "patna"
  },
  {
    question : "Whats is the capital of Tamil Nadu? ",
    answer : "chennai"
  }
  ,
  {
    question : "Whats is the capital of West Bengal? ",
    answer : "kolkata"
  },
  {
    question : "Whats is the capital of Karnatka? ",
    answer : "bangalore"
  },
  {
    question : "Whats is the capital of Andhra Pradesh? ",
    answer : "Hyderabad"
  }
  
  
];

var questionsUp = [
  {
    question : "Whats is the regional language of Jharkhand? ",
    answer : "jharkhandi"
  },
  {
    question : "Whats is the regional language of Bihar? ",
    answer : "bhojpuri"
  },
  {
    question : "Whats is the regional language of Tamil Nadu? ",
    answer : "tamil"
  },
  {
    question : "Whats is the regional language of West Bengal? ",
    answer : "benoli"
  },
  {
    question : "Whats is the regional language of Karnataka? ",
    answer : "kannad"
  },
  {
    question : "Whats is the regional language of Andhra Pradesh? ",
    answer : "telugu"
  }


];
var score=0;
readlineSync = require('readline-sync');
function quesAns(){
var ans="";
for(var i=0;i<questions.length;i++)
{
  ans = readlineSync.question(questions[i].question);
  if(ans===questions[i].answer){
  
  score++;
  console.log("-----------------");
  console.log("its correct");
  console.log("current score",score);
  console.log("-----------------");
}
else{
  console.log("-----------------");
  console.log('You are wrong!');
  console.log("-----------------");

}
}
return score;
}

// console.log("");
// console.log("-----------------");
// console.log("Total Score : ",score);
// console.log("-----------------");

levelOne = parseInt(levelOne);
var totalQuestion = questions.length;

function levelUp(){
  if(levelOne > Math.floor(totalQuestion/2))
  {
    console.log("");
    console.log("-----------------");
    console.log("Congratulations level up master !!");
    console.log("-----------------");
    quesAnsUp();
  }
  else{
    console.log("");
    console.log("-----------------");
    console.log("final score",score);
    console.log("You lost, Play Again");
    console.log("-----------------");
  }
}
var scoreUp=score;
function quesAnsUp(){
 var ans = "";
 for(var i=0;i<questionsUp.length;i++)
  {
  ans = readlineSync.question(questionsUp[i].question);
  if(ans === questionsUp[i].answer){
  
  scoreUp++;
  console.log("-----------------");
  console.log("its correct");
  console.log("current score",scoreUp);
  console.log("-----------------");
    }
else{
  console.log("-----------------");
  console.log('You are wrong!');
  console.log("-----------------");

    } 
  }
  console.log("-----------------");
  console.log("Final Score",scoreUp);
  console.log("Play Again");
  console.log("-----------------");

}

var levelOne = quesAns();
levelUp();
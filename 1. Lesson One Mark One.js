var readlineSync = require('readline-sync');

function welcome()
  {
    var userName = readlineSync.question('What is your name ? ');
    console.log("Welcome " + userName + ". Do you know Paramjit ? ");
  }

var currentScore = 0;

var highestScorelist=[
    {
      name:"Paramjit Singh",
      score:3
    },
    {
      name:"Parminder Singh",
      score:2
    },
  ];

  
function play(question, answer)
  {
    
    var userAnswer=readlineSync.question(question);
    
    if(userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log("Right Answer !");
      currentScore++;
      console.log("Current Score : " + currentScore);
      console.log("-----------------");
      
    }
    else{
      console.log("Wrong  Answer !");
      console.log("Current Score : " + currentScore);
      console.log("-----------------");
    }
  }

function scorelist()
{
  console.log("Check out the highest score below. If you find out that You scored more than or equal to the highest score then send me screenshot and I will update the list and add your name.");

  
  for(var i=0;i<2;i++)
    {
      console.log(highestScorelist[i].name + " : " +highestScorelist[i].score );
    }

    // highestScorelist.map(score => console.log(score.name, " : ", score.score))
}


var QuestionList = [
  {
    question: "Which country I am living right now  ?",
    answer: "Canada"
  },
  {
    question: 'Who is my favourite Super hero ? ',
    answer: "Shaktiman"
  },
  {
    question: "Where do I want to  work ?",
    answer: "Microsoft"
  }
];

function game(){
    for(var i=0;i<QuestionList.length;i++)
    {
      play(QuestionList[i].question,QuestionList[i].answer);
    }
  console.log("YAY! You Scored: "+currentScore );
}



welcome();
game();

scorelist();





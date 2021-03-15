var userScore=0;
var computerScore=0;
const userScore_span= document.getElementById('user-score');
const computerScore_span= document.getElementById('computer-score');
const scoreBooeard_div= document.querySelector('.score-board');
var result_div= document.querySelector('.result > h1');
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissor_div=document.getElementById('s');
function getComputerChoice(){
  const choices=['r','p','s'];
  const randomNumber=Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function win(user,computer){
userScore++;
userScore_span.innerHTML=userScore;
computerScore_span.innerHTML=computerScore;
document.getElementById(user).classList.add('greenglow');
setTimeout(function(){ document.getElementById(user).classList.remove('greenglow')},500);
result_div.innerHTML="You Win";
}

function loose(user,computer){
  computerScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  document.getElementById(user).classList.add('redglow');
  setTimeout(function(){document.getElementById(user).classList.remove('redglow')},500);
  result_div.innerHTML="You Loose";
}
function draw(user,computer){
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  document.getElementById(user).classList.add('yellowglow');
  setTimeout(function(){document.getElementById(user).classList.remove('yellowglow')},500);
  result_div.innerHTML="It's a draw";
}
function game(userChoice){
  const computerChoice= getComputerChoice();
  switch (userChoice+computerChoice) {
    case 'rr':
    case 'pp':
    case 'ss':
    draw(userChoice,computerChoice);
    break;
    case 'rs':
    case 'pr':
    case 'sp':
    win(userChoice,computerChoice);
    break;
    case 'ps':
    case 'sr':
    case 'rp':
    loose(userChoice,computerChoice);
    break;
  //  default:

  }
}
function main(){
  rock_div.addEventListener('click', function(){
    game("r")
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })

  scissor_div.addEventListener('click', function(){
    game("s");
  })
}

main();

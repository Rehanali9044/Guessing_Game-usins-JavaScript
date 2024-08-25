const max = prompt("enter the max number");
const random = Math.floor(Math.random()*max)+1;
let guess = prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("you are right! congratulations!!");
        break;
    }else if(guess<random){
        guess=prompt("hint:-your guess are too small")
    }
    else if(guess>random){
        guess=prompt("hint:-your guess are too large")
    }
}
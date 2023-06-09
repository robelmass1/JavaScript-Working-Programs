const computerText=document.querySelector("#computerText");
const playerText=document.querySelector("#playerText");
const resultText=document.querySelector("#resultText");
const choiceBtns=document.querySelectorAll(".choiceBtn");

let computer;
let player;
let result;

choiceBtns.forEach(button=>button.addEventListener("click",()=>{
    player=button.textContent;
    computerTurn();
    playerText.textContent=`Player:${player}`;
    computerText.textContent=`Computer:${computer}`;
    resultText.textContent=checkWinner();
}));

function computerTurn(){
    const randNum=Math.floor(Math.random()*3)+1;
    // random number between 1 and 3
    switch(randNum){
        case 1:
            computer='Rock';
            break;
        case 2:
            computer='Paper';
            break;
        case 3:
            computer='Scissors';
            break;
    }
}

function checkWinner(){
    if(player==computer){
        return "Draw!";
    }
    else if(computer=="Rock"){
        return (player=="Paper")?"YOU WIN":" You Lost";
    }
    else if(computer=="Paper"){
        return (player=="Scissors")?"YOU WIN":" You Lost";
    }
    else if(computer=="Scissors"){
        return (player=="Rock")?"YOU WIN":" You Lost";
    }

}
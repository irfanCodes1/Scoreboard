const scoreboardBlue=document.getElementById("scoreboard-blue");
const scoreboardRed=document.getElementById("scoreboard-red");
let redScore=0;
let blueScore=0;

const increment1Red=document.getElementById("plus-one-red");
const increment2Red=document.getElementById("plus-two-red");
const increment3Red=document.getElementById("plus-three-red");

const increment1Blue=document.getElementById("plus-one-blue");
const increment2Blue=document.getElementById("plus-two-blue");
const increment3Blue=document.getElementById("plus-three-blue");

function updateScore(){
    scoreboardRed.textContent=redScore;
    scoreboardBlue.textContent=blueScore;
}

increment1Red.addEventListener("click",()=>{
    redScore+=1;
    updateScore();
})
increment2Red.addEventListener("click",()=>{
    redScore+=2;
    updateScore();
})
increment3Red.addEventListener("click",()=>{
    redScore+=3;
    updateScore();
})


increment1Blue.addEventListener("click",()=>{
    blueScore+=1;
    updateScore();
})
increment2Blue.addEventListener("click",()=>{
    blueScore+=2;
    updateScore();
})
increment3Blue.addEventListener("click",()=>{
    blueScore+=3;
    updateScore();
})


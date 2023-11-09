

console.log("welcome to tic tac toe");
let musicturn = new Audio("sound/ting.mp3");
let gameover = new Audio("sound/gameover.mp3");
let turn = "X";
let isgameover = false;

//Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"O" : "X";
}

//Function to check Win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
     let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ]

     wins.forEach(e => {
                if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
                     document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
                     isgameover = true;
                     gameover.play();
                     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
        
                     // Highlight the matching part with a red color
                     boxtext[e[0]].style.color = "red";
                     boxtext[e[1]].style.color = "red";
                     boxtext[e[2]].style.color = "red";
        }
        })
     
}


//Game logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            musicturn.play();
            checkWin();
            if (!isgameover) {
              document.getElementsByClassName('info')[0].innerHTML = "Turn For  " + turn;
            }
        }
    })
}))

//Function for reset

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
             element.innerText = ''
             element.style.color = ""; // Reset the color
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName('info')[0].innerHTML = "Turn For  " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";      
})
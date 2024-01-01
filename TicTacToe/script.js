let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGame = document.querySelector(".new-game")
let msgContainer = document.querySelector(".msg")
let msg = document.querySelector("#win")


let turn1=true; //--------->player1

const WinningPatter=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6], 
];

let clickHandler=(box)=>{

    console.log("box is clicked");
    if(turn1){
        box.innerText="X"
        turn1=false;
    }
    else{
        box.innerText = "O"
        turn1 = true;
    }
    box.disabled=true;

    checkWinner();   
}
const disableOtherWinner =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showwinner = (winner)=>{
    msg.innerText= ` Congratulation!!, Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    // msgContainer.classList.add("show");
    disableOtherWinner();

}

const showDraw = () => {
    console.log("drawwww")
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
    disableOtherWinner();
};

const checkWinner=()=>{
    for(let pattern of WinningPatter){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText,
        // );
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner", pos1Val);
                showwinner(pos1Val);

            }
        }
        if ([...boxes].every((box) => box.innerText !== "")) {
            showDraw();
        }
       
    } 

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>clickHandler(box))
})

const resetGame=()=>{
turn1=true;
enableboxes();
msgContainer.classList.add("hide");
}

const enableboxes=()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}
newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
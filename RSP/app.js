let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const UserScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
const genCompChoice=()=>{
    // rock, paper,scissocrs
    const options=["rock","paper","scissor"];
    const compChoice=Math.floor(Math.random()*3);
    return options[compChoice];
}

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        UserScorePara.innerText=userScore;
        // console.log("You Win")
        msg.innerText=`You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green"
        msg.style.color = "white"
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You Lost!")
        // msg.innerText = "You Lost!";
        msg.innerText = `you lost! ${computerChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor="red"
    }
}

const drawGame=()=>{
    // console.log("Game is Drawn!");
    msg.innerText = "Game is Drawn! Play Again";
    msg.style.backgroundColor="Yellow"
    msg.style.color="black"
}

const playgame=(userChoice)=>{
// console.log("User choice = ",userChoice);
// Genrate computer choices 
    const computerChoice = genCompChoice();
    // console.log("computer choice = ", computerChoice);

    if(userChoice===computerChoice){
        // Draw
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=computerChoice==="paper"?false:true;
        }
        else if (userChoice == "paper"){
            userWin = computerChoice === "scissor" ? false : true;

        }
        else{

            userWin = computerChoice === "rock" ? false : true;
            
        }
        showWinner(userWin,userChoice,computerChoice);
    }

}

const clickHandler=(choice)=>{
    const userChoice= choice.getAttribute("id");
    // console.log("choice is clicked", userChoice);
    playgame(userChoice);
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>clickHandler(choice))
})


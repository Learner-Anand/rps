let user_score = 0;
let comp_score = 0;

const choices=document.querySelectorAll(".choice");
const user_count=document.querySelector("#user");
const comp_count=document.querySelector("#comp");
const msg=document.querySelector("#msg");

const gen_comp_choice=()=>{
    const options = ["rock","paper","scissors"];
    const random_choice = Math.floor(Math.random()*3);
    const comp_choice = options[random_choice];
    return comp_choice
}

const Winner = (userWin,user_choice,comp_choice) =>{
    if (userWin===true){
        user_score++;
        user_count.innerText=user_score;
        msg.innerText=`You Win! Your ${user_choice}beats ${comp_choice}`;
        msg.style.backgroundColor="#0ca60c";
    }
    else{
        comp_score++;
        comp_count.innerText=comp_score;
        msg.innerText=`You lost. ${comp_choice} beats your ${user_choice}`;
        msg.style.backgroundColor="#ff3a3a";
    }
}

const draw = () => {
    msg.innerText=`Oops, It's Draw`;
    msg.style.backgroundColor="gray";
}

const playGame = (user_choice) => {
    const comp_choice=gen_comp_choice();
    if(user_choice === comp_choice){
        draw();
    }
    else{
        let userWin = true;
        if(user_choice === "rock"){
            userWin = comp_choice === "scissors" ? true : false;
        }
        else if(user_choice === "paper"){
            userWin = comp_choice === "rock" ? true : false;
        }
        else{
            userWin = comp_choice === "paper" ? true : false;
        }
        Winner(userWin,user_choice,comp_choice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const user_choice=choice.getAttribute("id");
        playGame(user_choice);
    })
});
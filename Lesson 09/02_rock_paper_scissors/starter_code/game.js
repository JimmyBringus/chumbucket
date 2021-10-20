



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
    let choice = Math.floor(Math.random() * 3) // 0,1,2

    if (choice == 1){
        return "rock";
    }else if(choice == 2){
        return "paper";
    }else{
        return "scissors";
    }
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {
document.getElementById("computerSelection").innerText = opponent;
if (me === opponent){
    return "tie y'all"
}else if (me === 'rock' && opponent === 'paper') {
    return "computer wins"
}else if (me === 'rock' && opponent === 'scissors'){
    return "you win"
}else if (me === 'paper' && opponent === 'scissors'){
    return "computer wins"
}else if (me === 'paper' && opponent === 'rock'){
    return "you win"
}else if (me === 'scissors' && opponent === 'paper'){
    return "you win"
}else{
    return "you lose, computer wins"
}
};


document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById("scissors").addEventListener("click", function(){
        let banana = compare("scissors", computerChoice());
        document.getElementById("decision").innerText = banana;
    })
    document.getElementById("rock").addEventListener("click", function(){
        let banana = compare("rock", computerChoice());
        document.getElementById("decision").innerText = banana;
    })
    document.getElementById("paper").addEventListener("click", function(){
        let banana = compare("paper", computerChoice());
        document.getElementById("decision").innerText = banana;
    })

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html


});

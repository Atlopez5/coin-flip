function flip(guess) {
    // random number
    let result = Math.floor(Math.random() * 2) + 1;

    // get the message paragraph
    let message = document.getElementById("message");

    //Checks result of thr random versus game
    if(result == 1) {
        if(guess == "Heads") {
            message.innerHTML = "You guessed heads.<br>The coin flips and comes up heads! Good guess!";
        } 
        else {
            message.innerHTML = "You guessed tails.<br>The coin flips and comes up heads! Good guess!";
        }
    }
    else {
        if(guess == "Tails") {
            message.innerHTML = "You guessed tails.<br>The coin flips and comes up tails! Good guess!";
        }
        else {
            message.innerHTML = "You guessed heads.<br>The coin flips and comes up tails! Good guess!"; 
        }
    }
}
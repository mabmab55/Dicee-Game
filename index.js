let dice1Number = generateRandomDice();
let dice2Number = generateRandomDice();

let dice1 = document.querySelector(".img1");
dice1.setAttribute("src", "/images/dice"+dice1Number+".png");
let dice2 = document.querySelector(".img2");
dice2.setAttribute("src", "/images/dice"+dice2Number+".png")

function generateRandomDice() {
    return Math.floor((Math.random() * 6) + 1)
}

if(dice1Number > dice2Number) {
    document.querySelector(".winner").innerHTML = "Player 1 wins";
}

if(dice2Number > dice1Number) {
    document.querySelector(".winner").innerHTML = "Player 2 wins";
}

if(dice1Number === dice2Number) {
    document.querySelector(".winner").innerHTML = "Its a draw!!!";
}
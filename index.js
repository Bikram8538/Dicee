var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
var image01 = document.querySelectorAll("img")[0];
image01.setAttribute("src", randomImageSource);





var randomNumber02 = Math.floor(Math.random()*6) +1 ;
// var randomDiceImage = "dice" + randomNumber02 + ".png";
var randomImageSource2 = "images/dice" + randomNumber02 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber02) {
    document.querySelector("h1").innerHTML = "Player 01 wins 🚩";
} else if (randomNumber02 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 02 wins 🚩";
} else {
    document.querySelector("h1").innerHTML = "DRAW!";
}
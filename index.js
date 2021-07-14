var dice1 = Math.round(Math.random() * 5) + 1;
var dice2 = Math.round(Math.random() * 5) + 1;

var win = (dice1 > dice2) ? 1 : 2;

if(dice1 === dice2){
  document.querySelector("h1").textContent = "Draw";
  document.querySelector("#first").setAttribute("src","./images/space-exploration.png")
  document.querySelector("#second").setAttribute("src","./images/space-exploration.png")
}else{
  if(win === 1)
    document.querySelector("#first").setAttribute("src","./images/space-exploration.png")
  else
    document.querySelector("#second").setAttribute("src","./images/space-exploration.png")
  document.querySelector("h1").textContent = "Player " + win + " Wins";
}

document.querySelector(".img1").setAttribute("src","./images/dice"+dice1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+dice2+".png");

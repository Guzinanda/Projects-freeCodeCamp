var numberOfRightButtons = document.querySelectorAll(".Right").length;

for (var i = 0; i < numberOfRightButtons; i++) {
  document.querySelectorAll(".Right")[i].addEventListener("click", gotClick);
}

document.querySelector("#rgt").addEventListener("click", gotClick);
document.querySelector("#iphone").addEventListener("click", playSound);


function playSound() {
    var audio = new Audio("/sounds/iphone.mp3");
    audio.play();
}

function gotClick() {
  alert("I got clicked!");
}
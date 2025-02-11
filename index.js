var length = document.querySelectorAll(".drum").length;

for (var i = 0; i < length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerhtml = this.innerHTML;
    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
  // var z = event.key;
  // switch (z) {
  //   case "w":
  //     var tom4 = new Audio("sounds/tom-4.mp3");
  //     tom4.play();
  //     break;
  //   case "a":
  //     var tom3 = new Audio("sounds/tom-3.mp3");
  //     tom3.play();
  //     break;
  //   case "s":
  //     var tom2 = new Audio("sounds/tom-2.mp3");
  //     tom2.play();
  //     break;
  //   case "d":
  //     var tom1 = new Audio("sounds/tom-1.mp3");
  //     tom1.play();
  //     break;
  //   case "j":
  //     var snare = new Audio("sounds/snare.mp3");
  //     snare.play();
  //     break;
  //   case "k":
  //     var kick = new Audio("sounds/kick-bass.mp3");
  //     kick.play();
  //     break;
  //   case "l":
  //     var audio = new Audio("sounds/crash.mp3");
  //     audio.play();
  //     break;

  //   default:
  //     break;
  }
);

function makeSound(key) {
  switch (key) {
    case "w":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    default:
      break;
  }
}


function buttonAnimation(currentKey){
  
var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100)
}

//Finding number of buttons
var numberOfButtons = document.querySelectorAll(".drum").length;

//Loop and adding event listeners
for(var i=0; i<numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", respondToClick);
}

//Generating sound on clicking the button
function respondToClick() {
    var buttonClicked = this.innerHTML;
    buttonAnimation(buttonClicked);

    switch(buttonClicked) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play()
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play()
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
            break;
    
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
            break;

        default:
            console.log(buttonClicked);
    }
}

//Generating sound on pressing keys
document.addEventListener("keypress", onKeyPress);

function onKeyPress(event) {
    var keyClicked = event.key;
    buttonAnimation(keyClicked);

    switch(keyClicked) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play()
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play()
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
            break;
    
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
            break;

        default:
            console.log(keyClicked);
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);
}
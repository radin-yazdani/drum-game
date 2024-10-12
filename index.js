for(i=0 ;i<=6 ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
    var letter=this.innerHTML;
    makesound(letter)
    buttonAnimation(letter)
})
}



document.addEventListener("keypress" , function(event){
    var keyboard=event.key;
    makesound(keyboard)
    buttonAnimation(keyboard)
})


function makesound(key){
    switch (key) {
        case "w":
            var audio=new Audio("./assets/sounds/tom-1.mp3").play();
        break;

        case "a":
            var audio=new Audio("./assets/sounds/tom-2.mp3").play();
        break;

        case "s":
            var audio=new Audio("./assets/sounds/tom-3.mp3").play();
        break;

        case "d":
            var audio=new Audio("./assets/sounds/tom-4.mp3").play();
        break;

        case "j":
            var audio=new Audio("./assets/sounds/snare.mp3").play();
        break;

        case "k":
             var audio=new Audio("./assets/sounds/crash.mp3").play();
        break;

        case "l":
             var audio=new Audio("./assets/sounds/kick-bass.mp3").play();
        break;

        default:
            break;
    }
}

function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed")

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100 , function(){alert("11")})
}
// javascript

const keyboard = document.getElementById("keyboard")
const pagerDisplay = document.getElementById("pager-display")
const phoneDisplay = document.getElementById("phone-display")
const resetBtn = document.getElementById("btn-reset")
const sendBtn = document.getElementById("btn-send")


let phoneDisplayValue = ""

keyboard.addEventListener("click", function(event){
    const isButton = event.target.nodeName === 'BUTTON';
    
    // check that user has clicked a button on the keyboard
    if (!isButton) {       
    return;
    }
        
    let btnValue = event.target.textContent
       
    // limit message to 14 characters 
    if(phoneDisplayValue.length < 14 ){
        phoneDisplayValue += btnValue
        phoneDisplay.innerText = phoneDisplayValue               
               
    } else {
        alert("maximum message size is 14 characters")
    }    
})

resetBtn.addEventListener("click", function(){
    phoneDisplayValue = ""
    phoneDisplay.innerText = phoneDisplayValue 
})

sendBtn.addEventListener("click", function(){
    setTimeout(function(){
        pagerDisplay.innerText = phoneDisplayValue
        playSound("assets/pager.wav")
        }, 1000)
})

// source: https://stackoverflow.com/questions/10105063/how-to-play-a-notification-sound-on-websites
function playSound(soundFile){
    const audio = new Audio(soundFile)
    audio.play()
}
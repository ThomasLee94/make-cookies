let cookieCount = 0;
let clickPower = 1; 

// Declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker'); 
cookieCounter.innerHTML = cookieCount; 

// Functional js, everytime a user clicks the button, their
// cookies are increaded by clickPower. 
cookieClicker.addEventListener("click", function(){
    cookieCount = cookieCount + clickPower;
    // Updates the cookieCounter in the DOM. 
    cookieCounter.innerHTML = cookieCount; 
})
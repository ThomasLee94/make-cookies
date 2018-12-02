let cookieCount = 0;
let clickPower = 1; 

let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1; 

// Declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker'); 
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

cookieCounter.innerHTML = cookieCount; 

// Functional js, everytime a user clicks the button, their
// cookies are increaded by clickPower. 
cookieClicker.addEventListener("click", function(){
    cookieCount = cookieCount + clickPower;
    // Updates the cookieCounter in the DOM. 
    refreshCookieCount();
});

buyClickPower.addEventListener("click", function(){
    if (cookieCount >= clickPowerPriceAmount) {
        //subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;
        //subtract cookies from the price of the item
        refreshCookieCount();

        // Upgrade power level
        clickPowerLevelNumber += 1;

        // Update click price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

        // Refresh shop item
        refreshPowerClick();
    } else {
        console.log("You don't have enough cookies!")
    }

    
});

// Functions
let refreshCookieCount = function(){
    cookieCounter.innerHTML = cookieCount; 
}

let refreshPowerClick =  function(){
    clickPowerLevel.innerHTML = clickPowerLevelNumber; 
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower; 
}

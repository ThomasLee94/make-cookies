/********************************

        COOKIE clicker

********************************/

// Variables
let cookieCount = 0;

// Declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

cookieCounter.innerHTML = cookieCount; 
// Functional js, everytime a user clicks the button, their
// cookies are increaded by clickPower. 
cookieClicker.addEventListener("click", function(){
    cookieCount = cookieCount + clickPower;
    // Updates the cookieCounter in the DOM. 
    refreshCookieCount();
});

// Functions
let refreshCookieCount = function(){
    cookieCounter.innerHTML = cookieCount; 
}

/********************************

        Click Power

********************************/

// Variables
let clickPower = 50; 
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1; 

// Declare DOM variables 
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

buyClickPower.addEventListener("click", function(){
    if (cookieCount >= clickPowerPriceAmount) {
        //subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;
        //subtract cookies from the price of the item
        refreshCookieCount();

        // Upgrade power level
        clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);

        // Update click price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

        // Refresh shop item
        refreshPowerClick();
    } else {
        console.log("You don't have enough cookies!")
    }

    
});

// Functions
let refreshPowerClick =  function(){
    clickPowerLevel.innerHTML = clickPowerLevelNumber; 
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower; 
}

/********************************

          Grandmas

********************************/

// Variables
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;
let grandmaAuto = false; 

// DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('granmda-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

// Buy a grandma
buyGrandma.addEventListener("click", function(){
    //make sure we have enough cookies and subtract our cookies from the price
    if (cookieCount >= grandmaPriceAmount){
        cookieCount += - grandmaPriceAmount;
        refreshCookieCount();
    }
    //upgrade power level
    grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);

    //update price
    grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);

    //update grandma power
    grandmaPower += 10; 

    //turn autoGrandma on!
    grandmaAuto = true;
    autoGrandmaStart(); 
    //refresh shop item
    refreshGrandma();

})

window.setInterval(function(){
    // executing code loop goes here

}, numberOfMilliSeconds)

// Functions
let refreshGrandma = function(){
    grandmaLevel.innerHTML = grandmaLevelNumber;
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower - 10; 
}

let autoGrandmaStart = function(){
    let grandmaInt = window.setInterval(function(){
        cookieCount += grandmaPower;
        refreshCookieCount();
    }, 1000)
}

/********************************

          Facilities

********************************/

//set default values
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//buy a facility
buyFacility.addEventListener("click", function(){
    //set autoLoop to false
    facilityAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount){
        cookieCount -= facilityPriceAmount;
        refreshCookieCount(); 
    }

    //upgrade power level
    facilityLevelNumber += 1;

    //update price
    facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);

    //update facility power
    facilityPower += 600;

    //turn autoFacility on!
    facilityAuto = true
    autoFacilityStart();

    //refresh shop item
    refreshFacility();
})

//game loop
let autoFacilityStart =  function() {
    let facilityInt = window.setInterval(function(){
        cookieCount += facilityPower;
        refreshCookieCount(); 
    }, 1000)
}

//refresh shop
let refreshFacility = function(){
    facilityLevel.innerHTML = facilityLevelNumber
    facilityPrice.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 600;
}

/********************************

          Dragons

********************************/

//set default values
let dragonAuto = false;
let dragonPower = 2000;
let dragonPitPriceAmount = 100;
let dragonPitLevelNumber = 0;

//declare DOM variables
let dragonMultiple = document.getElementById('dragon-multiple');
let buyDragonPit = document.getElementById('buy-dragon-pit');
let dragonPitPrice = document.getElementById('dragon-pit-price');
let dragonPitLevel = document.getElementById('dragon-pit-level');

//buy a facility
buyDragonPit.addEventListener("click", function(){
    //set autoLoop to false
    dragonAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= dragonPitPrice){
        cookieCount -= dragonPitPrice;
        refreshCookieCount(); 
    }
    //upgrade power level
    dragonPitLevel += 1;

    //update price
    dragonPower += 600 + Math.floor(dragonPitLevel * 1.33);

    //update facility power
    dragonPower += 600;

    //turn dragonFacility on!
    dragonAuto = true
    autoFacilityStart();

    //refresh shop item
    refreshDragon();
})

//game loop
let autoDragonStart =  function() {
    let dragonInt = window.setInterval(function(){
        cookieCount += dragonPower;
        refreshCookieCount(); 
    }, 1500)
}

//refresh shop
let refreshDragon = function(){
    dragonPitLevel.innerHTML = facilityLevelNumber
    dragonPitPrice.innerHTML = facilityPriceAmount;
    dragonMultiple.innerHTML = facilityPower - 600;
}
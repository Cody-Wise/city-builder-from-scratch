// import functions and grab DOM elements
const waterFrontContainer = document.getElementById('waterfront-container');
const skylineContainer = document.getElementById('skyline-container');
const natureContainer = document.getElementById('nature-container');

const waterFrontImageEl = document.getElementById('waterfront-image');
const skylineImageEl = document.getElementById('skyline-image');
const natureImageEl = document.getElementById('nature-image');
const waterFrontDropdownEl = document.getElementById('waterfront-dropdown');
const skylineDropdownEl = document.getElementById('skyline-dropdown');
const natureDropdownEl = document.getElementById('nature-dropdown');
const sloganEl = document.getElementById('slogan');
const sloganInputEl = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
const reportEl = document.getElementById('report');
const sloganListEl = document.getElementById('slogan-list');
const welcomeTextContainer = document.getElementById('welcome-text');
const welcomeTextInput = document.getElementById('welcome-input');
const welcomeDisplay = document.getElementById('welcome-display');

// let state

let waterfrontCount = 0;
let skylineCount = 0;
let natureCount = 0;

const slogans = []; 

// set event listeners 

document.addEventListener('input', () => {

    const welcomeValue = welcomeTextInput.value;

    welcomeDisplay.textContent = 'Welcome to ' + welcomeValue;
    
});


waterFrontDropdownEl.addEventListener('change', () => {

    const value = waterFrontDropdownEl.value;

    waterFrontImageEl.src = `./assets/waterfront-${value}.jpg`;

    waterfrontCount++;

    displayCountStats();
  
});

skylineDropdownEl.addEventListener('change', () => {

    const value = skylineDropdownEl.value;

    skylineImageEl.src = `./assets/skyline-${value}.jpg`;



    skylineCount++;

    displayCountStats();
  
});

natureDropdownEl.addEventListener('change', () => {

    const value = natureDropdownEl.value;

    natureImageEl.src = `./assets/nature-${value}.jpg`;


    natureCount++;

    displayCountStats();
  
});

sloganButton.addEventListener('click', () => {

    const newSlogan = sloganInputEl.value;

    slogans.push(newSlogan);

    displaySlogans();

   

    
    sloganInputEl.value = '';
});

function displayCountStats(){

    reportEl.textContent = `The waterfront images have been changed ${waterfrontCount} times, the skyline images have been changed ${skylineCount} times and the nature images have been changed ${natureCount} times`
}

function displaySlogans(){

    sloganListEl.textContent = '';

    for (let slogan of slogans){
        const p = document.createElement('p');
        p.classList.add('slogans');
        p.textContent = slogan;
        sloganListEl.append(p);

    }
}




  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

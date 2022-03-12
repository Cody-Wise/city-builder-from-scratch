// import functions and grab DOM elements
const waterFrontImageEl = document.getElementById('waterfront-image');
const skylineImageEl = document.getElementById('skyline-image');
const natureImageEl = document.getElementById('nature-image');
const waterFrontDropdownEl = document.getElementById('waterfront-dropdown');
const skylineDropdownEl = document.getElementById('skyline-dropdown');
const natureDropdownEl = document.getElementById('nature-dropdown');
const sloganInputEl = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
const reportEl = document.getElementById('report');
const sloganListEl = document.getElementById('slogan-list');
const welcomeTextInput = document.getElementById('welcome-input');
const welcomeDisplay = document.getElementById('welcome-display');
const nightModeEl = document.getElementById('night-mode');
const dayModeEl = document.getElementById('day-mode');
const welcomeInputEl = document.getElementById('welcome-input');
const nightModeInputEl = document.getElementById('night-mode');
const dayModeInputEl = document.getElementById('day-mode');
const wrapperEl = document.getElementById('wrapper');
const audioDropdownEl = document.getElementById('audio-dropdown');
const audioEl = document.getElementById('audio');


// let state

let waterfrontCount = 0;
let skylineCount = 0;
let natureCount = 0;
// let modes = [dayModeEl, nightModeEl];

const slogans = []; 

dayModeInputEl.addEventListener('click', () => {


  
    waterFrontImageEl.src = './assets/waterfront-day-1.jpg'; 
    skylineImageEl.src = './assets/skyline-day-1.jpg';
    natureImageEl.src = './assets/nature-day-1.jpg';

    wrapperEl.style.backgroundColor = 'white';
    wrapperEl.style.color = 'black';

});

nightModeInputEl.addEventListener('click', () => {
    
      
    waterFrontImageEl.src = './assets/waterfront-night-1.jpg'; 
    skylineImageEl.src = './assets/skyline-night-1.jpg';
    natureImageEl.src = './assets/nature-night-1.jpg';

    wrapperEl.style.backgroundColor = 'black';
    wrapperEl.style.color = 'white';
    
});

  
audioDropdownEl.addEventListener('change', () => {



    const value = audioDropdownEl.value;

    audioEl.src = `./assets/sound-${value}.mp3`;

    audioEl.play();
    
});






welcomeInputEl.addEventListener('input', () => {

    const welcomeValue = welcomeTextInput.value;

    welcomeDisplay.textContent = 'Welcome to ' + welcomeValue;
    
});

waterFrontDropdownEl.addEventListener('change', () => {

    const value = waterFrontDropdownEl.value;

    if (nightModeEl.checked){

        waterFrontImageEl.src = `./assets/waterfront-night-${value}.jpg`;

    }

    else {

        if (dayModeEl.checked)
            waterFrontImageEl.src = `./assets/waterfront-day-${value}.jpg`;

        
    }

    waterfrontCount++;

    displayCountStats();
  
});

skylineDropdownEl.addEventListener('change', () => {

    const value = skylineDropdownEl.value;


    if (nightModeEl.checked){

        skylineImageEl.src = `./assets/skyline-night-${value}.jpg`;

    }

    else {

        if (dayModeEl.checked)
            skylineImageEl.src = `./assets/skyline-day-${value}.jpg`;

        
    }

    skylineCount++;

    displayCountStats();
  
});

natureDropdownEl.addEventListener('change', () => {

    const value = natureDropdownEl.value;


    if (nightModeEl.checked){

        natureImageEl.src = `./assets/nature-night-${value}.jpg`;

    }

    else {

        if (dayModeEl.checked)
            natureImageEl.src = `./assets/nature-day-${value}.jpg`;

        
    }


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

    reportEl.textContent = `The waterfront images have been changed ${waterfrontCount} times, the skyline images have been changed ${skylineCount} times and the nature images have been changed ${natureCount} times`;
}

function displaySlogans(){

    sloganListEl.textContent = '';

    for (let slogan of slogans){
        const cityName = welcomeTextInput.value;
        const p = document.createElement('p');
        
        p.classList.add('slogans');
        if (cityName === ''){
            p.textContent = `${slogan}`; 
            sloganListEl.append(p);
        }

        else {p.textContent = `${cityName}: ${slogan}`;
            sloganListEl.append(p);

        }

    }
}

const waterFrontArray = [{ display: 'Waterfront 1', value: '1' }, { display: 'Waterfront 2', value: '2' }, { display: 'Waterfront 3', value: '3' }];
const skylineArray = [{ display: 'Skyline 1', value: '1' }, { display: 'Skyline 2', value: '2' }, { display: 'Skyline 3', value: '3' }];
const natureArray = [{ display: 'Nature 1', value: '1' }, { display: 'Nature 2', value: '2' }, { display: 'Nature 3', value: '3' }];

for (let waterfront of waterFrontArray) {
    const option = document.createElement('option');
    waterFrontDropdownEl.append(option);
    option.textContent = waterfront.display;
    option.value = waterfront.value;
}

for (let skyline of skylineArray) {
    const option = document.createElement('option');
    skylineDropdownEl.append(option);
    option.textContent = skyline.display;
    option.value = skyline.value;
}

for (let nature of natureArray) {
    const option = document.createElement('option');
    natureDropdownEl.append(option);
    option.textContent = nature.display;
    option.value = nature.value;
}



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

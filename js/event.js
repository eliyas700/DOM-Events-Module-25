//Click to Make BG Purple Color
function makePurple(){
    document.body.style.backgroundColor="purple";
}

const orangeColorButton =document.getElementById('orange');
orangeColorButton.onclick =makeOrange;

function makeOrange(){
    document.body.style.backgroundColor="orange";
}

// Make HotPink Background By anonymous Function
const hotPinkButton = document.getElementById('hotPink');
hotPinkButton.onclick= function (){
    document.body.style.backgroundColor='hotpink';
}

//Make yellowGreen background Color By Using Event Listener

const yellowGreenButton = document.getElementById('greenYellow');
yellowGreenButton.addEventListener('click',makeYellowGreen);
function makeYellowGreen(){
    document.body.style.backgroundColor="greenyellow";
}
//Make LightSeaGreen background By Event Listener
const lightSeaGreenButton = document.getElementById('LightSeaGreen');
lightSeaGreenButton.addEventListener('click', function(){
    document.body.style.backgroundColor='lightseagreen';
});

// Make Misty Rose Background Color By Using Event Listener Shortcut....
document.getElementById('mistyRose').addEventListener('click', function(){
    document.body.style.backgroundColor='mistyrose';
})

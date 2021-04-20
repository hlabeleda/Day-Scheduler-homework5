//script file for homework

//moment to display current day and date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

//moment to capture current time
var currentTime = moment().hour();
console.log("current time", (currentTime));//just testing to see if it grabs the current time.  HH returns 24hr format, hh returns 12hr format.

//trying to give #hour9a a time value of 09:00
/*var timeBlock09 = new Date();
timeBlock09.setHours(09,00,00);
console.log("what hour", timeBlock09);*/

// $("#hour9a").setAttribute("data-hour", timeBlock09);


//element.setAttribute("data-hour", timeBlock09);
//console.log ("what hour 2", "#hour9a");
// var hour0900 = document.querySelector("#hour9a");

// document.getElementById(hour0900).value = timeBlock09;

var setTimeBlock09 = document.querySelector("#hour9a").setAttribute("data-hour", moment('09:00','HH:mm:ss'));

var timeBlock09 = document.querySelector("#hour9a").getAttribute("data-hour");
console.log ("time block", timeBlock09);


function timeCompare() {
    if (timeBlock09 === currentTime) {
        timeBlock09 = document.querySelector("#hour9a").setAttribute("class", "present row time-block");
        
    } else if (timeBlock09 < currentTime) {
        timeBlock09 = document.querySelector("#hour9a").setAttribute("class", "past row time-block");
        
    } else {
        timeBlock09 = document.querySelector("#hour9a").setAttribute("class", "future row time-block");
        
    }
    
}

timeCompare();

//console.log(currentTime.isAfter(timeBlock09));

// var beginningTime = moment('8:45am', 'h:mma');
// var endTime = moment('9:00am', 'h:mma');
// console.log(beginningTime.isBefore(endTime)); // true
// console.log(beginningTime.toDate()); // Mon May 12 2014 08:45:00
// console.log(endTime.toDate());

//==================================================================================
//trying to get input to stay in textarea.  I can get it into local storage, but it doesn't stay after refresh.

var userTextInput = document.querySelector(".description");
//console.log("what am i", userTextInput);
var saveButton = document.querySelector(".saveBtn");


function saveUserInput() {
    var userInput = {
        userTextInput: userTextInput.value,
    
        
    };
    
    localStorage.setItem("userInput", JSON.stringify(userInput));
    
}

// function renderUserInput() {
//     var lastUserInput = JSON.parse(localStorage.getItem("userInput"));
//     console.log("what am i", lastUserInput);

//     if (lastUserInput !== null) {
//     // document.querySelector(".description");
//     userTextInput.textContent = lastUserInput;
//     JSON.stringify(lastUserInput);
    
//     } else {
//         return;
//     }
    
// }

function renderMessage() {
    var lastUserInput = JSON.parse(localStorage.getItem("userInput"));

    if (lastUserInput !== null) {
        document.querySelector(".description").textContent = lastUserInput.userTextInput;
    }


}


var myDay =[];



saveButton.addEventListener("click", function(event) {

    event.preventDefault();
    saveUserInput();
    renderMessage();



});


function init() {
    renderMessage();


}
init();


var userTextInput9a = document.querySelector("#text9a");
var userTextInput10a = document.querySelector("#text10a");
var userTextInput11a = document.querySelector("#text11a");
var userTextInput12p = document.querySelector("#text12p");
var userTextInput1p = document.querySelector("#text1p");
var userTextInput2p = document.querySelector("#text2p");
var userTextInput3p = document.querySelector("#text3p");
var userTextInput4p = document.querySelector("#text4p");
var userTextInput5p = document.querySelector("#text5p");









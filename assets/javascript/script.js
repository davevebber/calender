// displays current time
let currentDate = document.getElementById('current-date').innerHTML = "Current Time and Date: " + (moment().format('ddd, MMM Do, hh:mm a'));

// current hour
let currentHour = JSON.stringify(moment().format('H'));
console.log(currentHour);

// textarea
let textarea9 = document.querySelector("#textarea9")
let textarea10 = document.querySelector("#textarea10")
let textarea11 = document.querySelector("#textarea11")
let textarea12 = document.querySelector("#textarea12")
let textarea1 = document.querySelector("#textarea1")
let textarea2 = document.querySelector("#textarea2")
let textarea3 = document.querySelector("#textarea3")
let textarea4 = document.querySelector("#textarea4")
let textarea5 = document.querySelector("#textarea5")

// time blocks
const nine = document.querySelector("#nine-am");
const ten = document.querySelector('#ten-am');
const eleven = document.querySelector('#eleven-am');
const twelve = document.querySelector('#twelve-pm');
const one = document.querySelector('#one-pm');
const two = document.querySelector('#two-pm');
const three = document.querySelector('#three-pm');
const four = document.querySelector('#four-pm');
const five = document.querySelector('#five-pm');

// save btns
const saveBtn9 = document.querySelector('#save-btn9')
const saveBtn10 = document.querySelector('#save-btn10')
const saveBtn11 = document.querySelector('#save-btn11')
const saveBtn12 = document.querySelector('#save-btn12')
const saveBtn1 = document.querySelector('#save-btn1')
const saveBtn2 = document.querySelector('#save-btn2')
const saveBtn3 = document.querySelector('#save-btn3')
const saveBtn4 = document.querySelector('#save-btn4')
const saveBtn5 = document.querySelector('#save-btn5')



// determine what hour it is and color code boxes accordingly
if (currentHour === "9") {
    nine.classList.add('current-time');
    ten.classList.add('future-time');
};

if (currentHour === "10") {
    nine.classList.add('past-time');
    ten.classList.add('current-time');
    eleven.classList.add('future-time');
};

if (currentHour === "11") {
    ten.classList.add('past-time');
    eleven.classList.add('current-time');
    twelve.classList.add('future-time');
};

if (currentHour === "12") {
    eleven.classList.add('past-time');
    twelve.classList.add('current-time');
    one.classList.add('future-time');
};

if (currentHour === "13") {
    twelve.classList.add('past-time');
    one.classList.add('current-time');
    two.classList.add('future-time');
};

if (currentHour === "14") {
    one.classList.add('past-time');
    two.classList.add('current-time');
    three.classList.add('future-time');
};

if (currentHour === "15") {
    two.classList.add('past-time');
    three.classList.add('current-time');
    four.classList.add('future-time');
};

if (currentHour === "16") {
    three.classList.add('past-time');
    four.classList.add('current-time');
    five.classList.add('future-time');
};

if (currentHour === "17") {
    four.classList.add('past-time');
    five.classList.add('current-time');
};


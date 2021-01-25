// displays current time
let currentDate = document.getElementById('current-date').innerHTML = "Current Time and Date: " + (moment().format('ddd, MMM Do, hh:mm a'));

// current hour
let currentHour = JSON.stringify(moment().format('H'));
console.log(currentHour);

// text areas - where the tasks go
let textarea9 = document.querySelector("#textarea9")
let textarea10 = document.querySelector("#textarea10")
let textarea11 = document.querySelector("#textarea11")
let textarea12 = document.querySelector("#textarea12")
let textarea1 = document.querySelector("#textarea1")
let textarea2 = document.querySelector("#textarea2")
let textarea3 = document.querySelector("#textarea3")
let textarea4 = document.querySelector("#textarea4")
let textarea5 = document.querySelector("#textarea5")

// time blocks - 9am/10am/etc
const nine = document.querySelector("#nine-am");
const ten = document.querySelector('#ten-am');
const eleven = document.querySelector('#eleven-am');
const twelve = document.querySelector('#twelve-pm');
const one = document.querySelector('#one-pm');
const two = document.querySelector('#two-pm');
const three = document.querySelector('#three-pm');
const four = document.querySelector('#four-pm');
const five = document.querySelector('#five-pm');

// save buttons
const saveBtn9 = document.querySelector('#save-btn9')
const saveBtn10 = document.querySelector('#save-btn10')
const saveBtn11 = document.querySelector('#save-btn11')
const saveBtn12 = document.querySelector('#save-btn12')
const saveBtn1 = document.querySelector('#save-btn1')
const saveBtn2 = document.querySelector('#save-btn2')
const saveBtn3 = document.querySelector('#save-btn3')
const saveBtn4 = document.querySelector('#save-btn4')
const saveBtn5 = document.querySelector('#save-btn5')

// load tasks into hour boxes
function loadTasks() {
    // 9am tasks
    let taskNine = localStorage.getItem('9am-task')
    if (taskNine === null) {
        return;
    } else {
        textarea9.textContent = taskNine;
    };

    // 10am tasks
    let taskTen = localStorage.getItem('10am-task')
    if (taskTen === null) {
        return;
    } else {
        textarea10.textContent = taskTen;
    };

    // 11am tasks
    let taskEleven = localStorage.getItem('11am-task')
    if (taskEleven === null) {
        return;
    } else {
        textarea11.textContent = taskEleven;
    };

    // 12pm tasks
    let taskTwelve = localStorage.getItem('12pm-task')
    if (taskTwelve === null) {
        return;
    } else {
        textarea12.textContent = taskTwelve;
    };

    // 1pm tasks
    let taskOne = localStorage.getItem('1pm-task')
    if (taskOne === null) {
        return;
    } else {
        textarea1.textContent = taskOne;
    };

    // 2pm tasks
    let taskTwo = localStorage.getItem('2pm-task')
    if (taskTwo === null) {
        return;
    } else {
        textarea2.textContent = taskTwo;
    };

    // 3pm tasks
    let taskThree = localStorage.getItem('3pm-task')
    if (taskThree === null) {
        return;
    } else {
        textarea3.textContent = taskThree;
    };

    // 4pm tasks
    let taskFour = localStorage.getItem('4pm-task')
    if (taskFour === null) {
        return;
    } else {
        textarea4.textContent = taskFour;
    };

    // 5pm tasks
    let taskFive = localStorage.getItem('5pm-task')
    if (taskFive === null) {
        return;
    } else {
        textarea5.textContent = taskFive;
    };
};

// run function load tasks
loadTasks();

// figure out how to save with button click
//---------------------------------
// when button is clicked save event to local storage
// saveBtn9.addEventListener('click', saveEvent9);

// function saveEvent9() {
//     let taskNine = localStorage.setItem('9am-task', JSON.stringify(textarea9));
//     console.log(taskNine);
// }

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

//----------------------------
//changes text in hour-box9
// task text was clicked
$("#hour-box9").on("click", "p", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});


// editable field was un-focused
$("#hour-box9").on("blur", "textarea", function () {
    // get current value of textarea
    var text = $(this).val();

    // save to local storage
    localStorage.setItem('9am-task', text);

    // recreate p element
    var taskP = $("<p>")
        .attr("id", "textarea9")
        .addClass("event-item")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
});

//-----------------------------

// changes text in hour-box10
// task text was clicked
$("#hour-box10").on("click", "p", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// editable field was un-focused
$("#hour-box10").on("blur", "textarea", function () {
    // get current value of textarea
    var text = $(this).val();

    // save to local storage
    localStorage.setItem('10am-task', text);

    // recreate p element
    var taskP = $("<p>")
        .attr("id", "textarea10")
        .addClass("event-item")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
});

//-----------------------------

// changes text in hour-box11
// task text was clicked
$("#hour-box11").on("click", "p", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// editable field was un-focused
$("#hour-box11").on("blur", "textarea", function () {
    // get current value of textarea
    var text = $(this).val();

    // save to local storage
    localStorage.setItem('11am-task', text);

    // recreate p element
    var taskP = $("<p>")
        .attr("id", "textarea11")
        .addClass("event-item")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
});

//-----------------------------

// changes text in hour-box12
// task text was clicked
$("#hour-box12").on("click", "p", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// editable field was un-focused
$("#hour-box12").on("blur", "textarea", function () {
    // get current value of textarea
    var text = $(this).val();

    // save to local storage
    localStorage.setItem('12pm-task', text);

    // recreate p element
    var taskP = $("<p>")
        .attr("id", "textarea12")
        .addClass("event-item")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
});

//-----------------------------

// changes text in hour-box1
// task text was clicked
$("#hour-box1").on("click", "p", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// editable field was un-focused
$("#hour-box1").on("blur", "textarea", function () {
    // get current value of textarea
    var text = $(this).val();

    // save to local storage
    localStorage.setItem('1pm-task', text);

    // recreate p element
    var taskP = $("<p>")
        .attr("id", "textarea1")
        .addClass("event-item")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
});

//-----------------------------

// changes text in hour-box2
// task text was clicked
$("#hour-box2").on("click", "p", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// editable field was un-focused
$("#hour-box2").on("blur", "textarea", function () {
    // get current value of textarea
    var text = $(this).val();

    // save to local storage
    localStorage.setItem('2pm-task', text);

    // recreate p element
    var taskP = $("<p>")
        .attr("id", "textarea2")
        .addClass("event-item")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
});

//-----------------------------

// changes text in hour-box3
// task text was clicked
$("#hour-box3").on("click", "p", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// editable field was un-focused
$("#hour-box3").on("blur", "textarea", function () {
    // get current value of textarea
    var text = $(this).val();

    // save to local storage
    localStorage.setItem('3pm-task', text);

    // recreate p element
    var taskP = $("<p>")
        .attr("id", "textarea3")
        .addClass("event-item")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
});

//-----------------------------

// changes text in hour-box4
// task text was clicked
$("#hour-box4").on("click", "p", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// editable field was un-focused
$("#hour-box4").on("blur", "textarea", function () {
    // get current value of textarea
    var text = $(this).val();

    // save to local storage
    localStorage.setItem('4pm-task', text);

    // recreate p element
    var taskP = $("<p>")
        .attr("id", "textarea4")
        .addClass("event-item")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
});

//-----------------------------

// changes text in hour-box5
// task text was clicked
$("#hour-box5").on("click", "p", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// editable field was un-focused
$("#hour-box5").on("blur", "textarea", function () {
    // get current value of textarea
    var text = $(this).val();

    // save to local storage
    localStorage.setItem('5pm-task', text);

    // recreate p element
    var taskP = $("<p>")
        .attr("id", "textarea5")
        .addClass("event-item")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
});

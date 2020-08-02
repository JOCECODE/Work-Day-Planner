var moment = moment();
var momHour = parseInt(moment.format("H"));
var currentDay = $("#currentDay");
var tA9 = $("#textArea9");
var tA10 = $("#textArea10");
var tA11 = $("#textArea11");
var tA12 = $("#textArea12");
var tA1 = $("#textArea1");
var tA2 = $("#textArea2");
var tA3 = $("#textArea3");
var tA4 = $("#textArea4");
var tA5 = $("#textArea5");
var saveB9 = $("#saveB9");
var saveB10 = $("#saveB10");
var saveB11 = $("#saveB11");
var saveB12 = $("#saveB12");
var saveB1 = $("#saveB1");
var saveB2 = $("#saveB2");
var saveB3 = $("#saveB3");
var saveB4 = $("#saveB4");
var saveB5 = $("#saveB5");
var timeBlock = $(".time-block");
var myValue = $("[data-myValue]");
console.log(momHour);
// CURRENT DAY TO DISPLAY
currentDay.text(moment.format("dddd, MMMM Do"));

timeBlock.each(function () {
  // Do stuff with each div
  console.log($(this).data().myvalue);
  if ($(this).data().myvalue > momHour) {
    $(this).addClass("future");
  } else if ($(this).data().myvalue == momHour) {
    $(this).addClass("present");
    // console.log($(this).data()); //current data layer value
  } else {
    $(this).addClass("past");
  }
});

// INIT TIME BLOCKS WITH INFO HOUR 9
$(function () {
  var t = localStorage.getItem("9");
  if (t !== null) {
    tA9.text("");
  }
  tA9.val(t);
});

// INIT TIME BLOCKS WITH INFO HOUR 10
$(function () {
  var t = localStorage.getItem("10");
  if (t !== null) {
    tA10.text("");
  }
  tA10.val(t);
});

// INIT TIME BLOCKS WITH INFO HOUR 11
$(function () {
  var t = localStorage.getItem("11");
  if (t !== null) {
    tA11.text("");
  }
  tA11.val(t);
});

// INIT TIME BLOCKS WITH INFO HOUR 12
$(function () {
  var t = localStorage.getItem("12");
  if (t !== null) {
    tA12.text("");
  }
  tA12.val(t);
});

// INIT TIME BLOCKS WITH INFO HOUR 1
$(function () {
  var t = localStorage.getItem("1");
  if (t !== null) {
    tA1.text("");
  }
  tA1.val(t);
});

// INIT TIME BLOCKS WITH INFO HOUR 2
$(function () {
  var t = localStorage.getItem("2");
  if (t !== null) {
    tA2.text("");
  }
  tA2.val(t);
});

// INIT TIME BLOCKS WITH INFO HOUR 3
$(function () {
  var t = localStorage.getItem("3");
  if (t !== null) {
    tA3.text("");
  }
  tA3.val(t);
});

// INIT TIME BLOCKS WITH INFO HOUR 4
$(function () {
  var t = localStorage.getItem("4");
  if (t !== null) {
    tA4.text("");
  }
  tA4.val(t);
});

// INIT TIME BLOCKS WITH INFO HOUR 5
$(function () {
  var t = localStorage.getItem("5");
  if (t !== null) {
    tA5.text("");
  }
  tA5.val(t);
});

// HOUR 9 BLOCK SAVE BUTTON
saveB9.on("click", function (event) {
  event.preventDefault();
  var val = tA9.val();
  localStorage.setItem("9", val);
});

// HOUR 10 BLOCK SAVE BUTTON
saveB10.on("click", function (event) {
  event.preventDefault();
  var val = tA10.val();
  localStorage.setItem("10", val);
});

// HOUR 11 BLOCK SAVE BUTTON
saveB11.on("click", function (event) {
  event.preventDefault();
  var val = tA11.val();
  localStorage.setItem("11", val);
});

// HOUR 12 BLOCK SAVE BUTTON
saveB12.on("click", function (event) {
  event.preventDefault();
  var val = tA12.val();
  localStorage.setItem("12", val);
});

// HOUR 1 BLOCK SAVE BUTTON
saveB1.on("click", function (event) {
  event.preventDefault();
  var val = tA1.val();
  localStorage.setItem("1", val);
});

// HOUR 2 BLOCK SAVE BUTTON
saveB2.on("click", function (event) {
  event.preventDefault();
  var val = tA2.val();
  localStorage.setItem("2", val);
});

// HOUR 3 BLOCK SAVE BUTTON
saveB3.on("click", function (event) {
  event.preventDefault();
  var val = tA3.val();
  localStorage.setItem("3", val);
});

// HOUR 4 BLOCK SAVE BUTTON
saveB4.on("click", function (event) {
  event.preventDefault();
  var val = tA4.val();
  localStorage.setItem("4", val);
});

// HOUR 5 BLOCK SAVE BUTTON
saveB5.on("click", function (event) {
  event.preventDefault();
  var val = tA5.val();
  localStorage.setItem("5", val);
});

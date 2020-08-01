var moment = moment();
var currentDay = $("#currentDay");
var tA9 = $("#textArea9");
var tA10 = $("#textArea10");
var saveB9 = $("#saveB9");
var saveB10 = $("#saveB10");

// CURRENT DAY TO DISPLAY
currentDay.text(moment.format("dddd, MMMM Do"));
console.log(moment.format("dddd, MMMM Do"));

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

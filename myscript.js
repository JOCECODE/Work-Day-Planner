var moment = moment();
var currentDay = $("#currentDay");
var tA = $("#textArea");
var saveBtn = $("#saveB");

// CURRENT DAY TO DISPLAY
currentDay.text(moment.format("dddd, MMMM Do"));
console.log(moment.format("dddd, MMMM Do"));

// BUTTON CLICK TO DISPLAY TASK SAVED
saveBtn.on("click", function () {
  tA.val(function (i, val) {
    console.log(val);
    return val;
  });
});
// tA.on("click", function () {
//     $(this).val(function (i, val) {
//       console.log(this)
//       console.log(val);
//       return val;
//     });
//   });

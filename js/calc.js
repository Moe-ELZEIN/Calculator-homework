document.addEventListener("DOMContentLoaded", function(){ //doesnt run until the dom has been loaded

  var outputArea = document.getElementById("screen");
  var myButtons = document.getElementsByClassName("buttonNum");
  var myOperators = document.getElementsByClassName("operator");
  var cleared = document.getElementsByClassName("buttonClear");
  var buttonEquals = document.getElementsByClassName("equals");

  for (var i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener("click", function () {

      cleared.addEventListener("click", function() {
        console.log("Clear button");
        outputArea.innerHTML = "0";
      })
    })
  }

});

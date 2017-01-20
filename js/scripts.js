var pingPongGame = function(userNumber) {

var emptyArray = [];
var newNumber = userNumber.value;

  if (userNumber >= 1) {
   return userNumber + userNumber - 1;
    }
    else if (userNumber < 1) {
    alert ("Enter a number 1 or greater!");
  }
}

console.log("hi");
$(document).ready(function() {
  $("form#pingPong").submit(function(pingPong) {
    event.preventDefault();

    var userNumber = $("input#number").val();
    var result = pingPongGame(userNumber);

    $("#results").text(result);
  });
});


// for (index = 10; index > 0; newNumber--);
//   emptyArray.push();
//   console.log(emptyArray);

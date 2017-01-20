var pingPongGame = function(userNumber) {

var emptyArray = [];
var newNumber = 0;

  if (userNumber >= 1) {
    for (index= 0; index < userNumber.length; userNumber-=1);
      return userNumber;
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

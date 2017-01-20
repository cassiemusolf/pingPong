var pingPongGame = function(userNumber) {

  var emptyArray = [];

  if (userNumber < 1) {
    alert ("Enter a number 1 or greater!");
  }
  if (userNumber >= 1) {
    for (index=1; index<=userNumber; index++) {
      if (index % 15 === 0) {
        emptyArray.push("ping-pong");
      } else if (index % 5 === 0) {
        emptyArray.push("pong");
      } else if (index % 3 === 0) {
        emptyArray.push("ping");
      } else {
        emptyArray.push(index);
      }

      var arrayToString = emptyArray.join("\n \n");
    } return arrayToString;
  }
}

$(document).ready(function() {
  $("form#pingPong").submit(function(pingPong) {
    event.preventDefault();

    var userNumber = parseInt($("input#number").val());
    var result = pingPongGame(userNumber);

    $("#results").text(result);
  });
});

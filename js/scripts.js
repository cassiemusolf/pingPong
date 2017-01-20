var pingPongGame = function(userNumber) {

var emptyArray = [];
var newArray = [];


  if (userNumber < 1) {
    alert ("Enter a number 1 or greater!");
  }
    if (userNumber >= 1) {
      for (index=userNumber; index>0; index--) {
      emptyArray.push(index);
  }
  for (index=userNumber; index>0; index--) {
    if (index % 3 === 0)
    emptyArray.push("ping");
  } if (index % 5 === 0) {
      emptyArray.push("pong");
    }
    return emptyArray;
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

// } else if (index % 5 === 0) {
//  emptyArray.push("pong");
// } else {

// for (index = 10; index > 0; newNumber--);
//   emptyArray.push();
//   console.log(emptyArray);

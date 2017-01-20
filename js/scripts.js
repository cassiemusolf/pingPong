var pingPongGame = function(userNumber) {

var emptyArray = [];

  if (userNumber < 1) {
    alert ("Enter a number 1 or greater!");
  }
    else if (userNumber >= 1) {
    for (index=userNumber; index>0; index--) {
      if (index % 3 === 0) {
        emptyArray.push("ping");
      }
      emptyArray.push(index);
    }
    } return emptyArray;
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

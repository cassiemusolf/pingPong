var pingPongGame = function(userNumber) {

  if (userNumber >= 1) {
    return userNumber;
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

$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();

    var userNumber = $("input#number").val();
    var result = pingPong(userNumber);
    $("#results").text(result);
  });
});

$(document).ready(function() {
  $("#favForm").submit(function(event) {

    var movieInput = $("input#movie").val();
    var iceCreamInput = $("input#iceCream").val();
    var colorInput = $("input#color").val();
    var carInput = $("input#car").val();
    var drinkInput = $("input#drink").val();
    var placeInput = $("input#place").val();
    var favorites = [movieInput, iceCreamInput, colorInput, carInput, drinkInput, placeInput]


    // var cloneArray = favorites.slice();
    var newArray = [];
    newArray.push(favorites[2],favorites[0],favorites[3]);

    console.log(newArray);


    $(".li1").text(newArray[0]);
    $(".li2").text(newArray[1]);
    $(".li3").text(newArray[2]);



    event.preventDefault();

  });

});

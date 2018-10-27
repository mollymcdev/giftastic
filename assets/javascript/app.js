// api key: 3L7QbGyLgn2a3wY8MQwKkmU7hiDIRoMP

var foodArr = ['chicken', 'french fries', 'cheeseburgers', 'avocados'];

//creates buttons for food
function createButtons() {
    $("#foodButtons").empty();

    for (var i = 0; i < foodArr.length; i++) {

        var food = $("<button>");

        food.addClass("food-btn");
        food.attr("data-name", foodArr[i]);
        food.text(foodArr[i]);
        $("#foodButtons").append(food);

    }

}


$("#submit").on('click', function newButton(event) {
    event.preventDefault();

    search = $("#search").val().trim();
    foodArr.push(search);
    createButtons();


});

createButtons();


$(document).on("click", ".food-btn", function () {
    $("#foodDiv").empty();

    foodChoice = $(this).attr("data-name");

    var url = "https://api.giphy.com/v1/gifs/search?q=" + foodChoice + "&api_key=3L7QbGyLgn2a3wY8MQwKkmU7hiDIRoMP&limit=5&rating=pg";

    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var results = response.data;

        for (var j = 0; j < results.length; j++) {

            console.log(results[j]);
            var gifImg = $("<img>").attr('src', results[j].images.fixed_height_still.url);
            var rating = $("<p>").text('Rating: ' + results[j].rating);

            $("#foodDiv").prepend(gifImg);
            $("#foodDiv").prepend(rating);

            $("#foodDiv").on('click', function() {

                gifImg.html("<img>").attr('src', results[j].images.fixed_height.url);
                console.log(results.images);

            });

            
        }

        
    });

});



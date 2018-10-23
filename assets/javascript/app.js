// api key: 3L7QbGyLgn2a3wY8MQwKkmU7hiDIRoMP

var foodArr = ['chicken', 'french fries', 'cheeseburgers', 'avocados'];


function displayFoodInfo() {
    foodChoice = $(this).attr("data-name");

    var url = "https://api.giphy.com/v1/gifs/search?q=" + foodChoice + "&api_key=3L7QbGyLgn2a3wY8MQwKkmU7hiDIRoMP&limit=5&rating=pg";

    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var rating = $("<p>").text(response.data[0].rating);

        var gifOne = $("<img>").addClass("gifPic").attr('src', response.data[0].images.fixed_height_still.url);
        var gifTwo = $("<img>").addClass("gifPic").attr('src', response.data[1].images.fixed_height_still.url);
        var gifThree = $("<img>").addClass("gifPic").attr('src', response.data[2].images.fixed_height_still.url);
        var gifFour = $("<img>").addClass("gifPic").attr('src', response.data[3].images.fixed_height_still.url);
        var gifFive = $("<img>").addClass("gifPic").attr('src', response.data[4].images.fixed_height_still.url);

        $("#foodDiv").append(gifOne);
        $("#foodDiv").append(gifTwo);
        $("#foodDiv").append(gifThree);
        $("#foodDiv").append(gifFour);
        $("#foodDiv").append(gifFive);
        $(gifOne).prepend(rating);

        $(".gifPic").on('click', function (event) {
            event.preventDefault();
            gifOne.html("<img>").attr('src', response.data[0].images.fixed_height.url);
            gifTwo.html("<img>").attr('src', response.data[1].images.fixed_height.url);
            gifThree.html("<img>").attr('src', response.data[2].images.fixed_height.url);
            gifFour.html("<img>").attr('src', response.data[3].images.fixed_height.url);
            gifFive.html("<img>").attr('src', response.data[4].images.fixed_height.url);

            var clicks = $(this).data('clicks');


            if (clicks) {
                gifOne.html("<img>").attr('src', response.data[0].images.fixed_height_still.url)
                gifTwo.html("<img>").attr('src', response.data[1].images.fixed_height_still.url);
                gifThree.html("<img>").attr('src', response.data[2].images.fixed_height_still.url);
                gifFour.html("<img>").attr('src', response.data[3].images.fixed_height_still.url);
                gifFive.html("<img>").attr('src', response.data[4].images.fixed_height_still.url);
            } else {
                gifOne.html("<img>").attr('src', response.data[0].images.fixed_height.url);
                gifTwo.html("<img>").attr('src', response.data[1].images.fixed_height.url);
                gifThree.html("<img>").attr('src', response.data[2].images.fixed_height.url);
                gifFour.html("<img>").attr('src', response.data[3].images.fixed_height.url);
                gifFive.html("<img>").attr('src', response.data[4].images.fixed_height.url);
            }

            $(this).data("clicks", !clicks);

        });
    });

};

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
createButtons();



$("#search").on('click', function newButton(event) {
    event.preventDefault();

    search = $("#search").val().trim();

    foodArr.push(search);
    createButtons();
});

$(document).on("click", ".food-btn", displayFoodInfo);




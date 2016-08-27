
// Initial array of cars
    var cars = ['Camaro', 'Mustang', 'Lamborghini', 'Chevelle'];


$('#car').on('click', function() {

// giphy api url 
    var car = $(this).data("Car");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+car+"&api_key=dc6zaTOxFJmzC=10";


     $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {

                console.log(queryURL);

                console.log(response)

        var results = response.data;
                //--------------------------------

                for (var i = 0; i < results.length; i++) {
                     var carDiv = $('<div>');


                    var p = $('<p>').text("Rating: " + results[i].rating);

                    var carImage = $('<img>');
                    carImage.attr('src', results[i].images.fixed_height.url);

                    carDiv.append(p);
                    carDiv.append(carImage);

                    $('#container').prepend(carDiv);
                    //--------------------------------
                }

            });
});

    // ========================================================

    // Generic function for displaying car data 
    function renderButtons(){ 

        $('#carsView').empty();

        
        for (var i = 0; i < cars.length; i++){

            var a = $('<button>');

            a.addClass('Car');  
            a.attr('data-cars', cars[i]); 
            a.text(cars[i]); 
            $('#carsView').append(a); 
        }
    };
             // ========================================================

    // This function handles events where one button is clicked
    $('#addCar').on('click', function(){

       
        var car = $('#car-input').val().trim();

        cars.push(car);
        
        renderButtons();

        return false;
    });

// This calls the renderButtons() function
    renderButtons();

   
       
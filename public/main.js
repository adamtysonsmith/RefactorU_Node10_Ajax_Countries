$(document).ready(function(){
    
    // $.ajax will pass in the data from the response
    var getCountries = function(data) {
        $('.countries').empty();
        data.forEach(function(country){
            $('.countries').append('<div>' + 
                '<h3>' + country.name + '</h3>' +
                '<h4>' + country.region + '</h4>' +
                '<hr>'
            );
        });
    }
    
    
    $('#load-button').on('click', function() {
        $.ajax({
            method: 'GET',
            url: '/countries',
            success: getCountries
        });
    });
    
    $('#search-button').on('click', function(evt){
        // Store the query text in an object
        var query = {
            query: $('#search-text').val()
        }
        
        $.ajax({
            method: 'POST',
            url: '/search',
            data: query,
            success: getCountries // Receives the data from the res.send
        });
    });
    
}); // End Ready
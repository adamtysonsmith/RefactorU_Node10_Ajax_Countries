$(document).ready(function(){
    
    var getCountries = function(data) {
        data.forEach(function(country){
            $('.countries').append('<div>' + 
                '<h3>' + country.name + '</h3>' +
                '<h4>' + country.region + '</h4>' +
                '<hr>'
            );
        });
    }
    
    
    $('.load').on('click', function(){
        $.ajax({
            method: 'GET',
            url: '/countries',
            success: getCountries
        });
    });
});
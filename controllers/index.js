var countries = require('../models/countries.json');
var _ = require('lodash');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
    countries: function(req, res) {
        res.send(countries);
    },
    search: function(req, res) {
        // Grab the query text from the object we passed via ajax
        var query = new RegExp(req.body.query, 'gi');

        // Filter the countries array to match the search query
        var result = countries.filter(function(country) {
            return country.name.match(query);
        });
        
        res.send(result);
    }
};

module.exports = indexController;
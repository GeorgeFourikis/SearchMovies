var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("search");
});

// i am sucking the value from the search that i am doing and with
// that way i can do a search.
app.get("/results", function(req,res){
    var query = req.query.search;
    request("http://www.omdbapi.com/?s=" + query, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.get("/results_greece", function(req,res){
    request("http://www.omdbapi.com/?s=greece", function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});


app.listen(3000, function(){
    console.log("Server is UP");
});

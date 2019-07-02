var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
var methodOverride = require("method-override");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// Parsing middleware (parses json objects and url encoded data)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

// Require handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes 
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start the server
app.listen(PORT, function () {
    //server-side message to show that the server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

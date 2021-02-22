$(document).ready(function() {
    // all custom jQuery will go here
    console.log("TEST");
    $.getJSON("data.json", function(data) {
        console.log(data);
    });
});
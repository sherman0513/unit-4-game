$(document).ready(function () {
    var targetNumber = Math.floor(Math.random() * 100);

    $("#number-to-guess").text(targetNumber);
    console.log(targetNumber);

    var counter = 0;
    var numberOptions = [3, 6, 14, 11];
    var wins = 0;
    var losses = 0;

    function reset() {
        targetNumber = "";
        wins = "";
        losses = "";
    }

    for (var i = 0; i < numberOptions.length; i++) {
        var imageLego = $("<img>");
        imageLego.addClass("lego-image");
        imageLego.attr("src", "assets/images/legos.jpg")
        imageLego.attr("data-legovalue", numberOptions[i]);
        $("#legos").append(imageLego);
        console.log(imageLego);
    }

    $(".lego-image").on("click", function () {
        var legoValue = ($(this).attr("data-legovalue"));
        legoValue = parseInt(legoValue);
        counter += legoValue;

        $("#total-score").text(counter);

        if (counter === targetNumber) {
            wins++
            $("#wins").text(wins);
            reset();
        }

        else if (counter > targetNumber) {
            losses++
            $("#losses").text(losses);
            reset();
        }
    });

});
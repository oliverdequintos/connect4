$(document).ready(function() {

    var playerTurnColor = $('#player-turn').val();
    for (var n = 0; n < 7; n++){
        $('#pointer-'+n).on('mouseover', function () {
            $(this).css("background-color", playerTurnColor);
        })

        $('#pointer-'+n).on('mouseout', function () {
            $(this).css("background-color", "transparent");
        })
    }
});
$(document).ready(function() {
    for (var n = 0; n < 7; n++){
        $('#pointer-'+n).on('mouseover', function () {
            $(this).css("background-color", playerTurnColor);
        })

        $('#pointer-'+n).on('mouseout', function () {
            $(this).css("background-color", "transparent");
        })

        $('#pointer-'+n).on('click', function () {
          var xIndex = parseInt($(this).attr('id').split('-')[1]);
          var yIndex;

          switch(xIndex) {
            case 0:
              yIndex = pointer0--;
              break;
            case 1:
              yIndex = pointer1--;
              break;
            case 2:
              yIndex = pointer2--;
              break;
            case 3:
              yIndex = pointer3--;
              break;
            case 4:
              yIndex = pointer4--;
              break;
            case 5:
              yIndex = pointer5--;
              break;
            case 6:
              yIndex = pointer6--;
              break;
            default:
                yIndex = 5;
          }

          $('#x-'+xIndex+'-y-'+yIndex).css("background-color", playerTurnColor);
          if (yIndex < 0) {
            alert('This column is full, choose other column.')
          }else{
            if (playerTurnColor == 'red') {
              playerRed.push([xIndex, yIndex]);
              gameChecker(playerRed, xIndex, yIndex);
              playerTurnColor = "yellow";
              $(this).css("background-color", playerTurnColor);
            }else{
              playerYellow.push([xIndex, yIndex]);
              gameChecker(playerYellow, xIndex, yIndex);
              playerTurnColor = 'red';
              $(this).css("background-color", playerTurnColor);
            }
          }
        })
    }
});

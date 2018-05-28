$(document).ready(function(){
  $('#submit').on('click', function(){

  });

  function newGame(){
    // reset all array values
    // clear the board
  }

  function computerAI(){

  }
});

function gameChecker(arr){
  if (horizontalChecker(arr) == true || verticalChecker(arr) == true || diagonalChecker(arr) == true) {
    alert("Player (1|2) win!");
  }
}

function horizontalChecker(arr){
  var i, old_horizontal_val, old_aligned_val, old_direction;
  var connected_cnt = 1;
  for (i in arr) {
    if (old_horizontal_val == arr[i][1]){
      if ((old_aligned_val - 1) == arr[i][0] ){
        if (old_direction == "RIGHT"){
          connected_cnt = 1;
        }
        connected_cnt++;
        old_direction = "LEFT"
      }else if ((old_aligned_val + 1) == arr[i][0] ){
        if (old_direction == "LEFT"){
          connected_cnt = 1;
        }
        connected_cnt++;
        old_direction = "RIGHT"
      }else{
        connected_cnt = 1;
      }
    }else{
      connected_cnt = 1;
    }
    old_horizontal_val = arr[i][1]
    old_aligned_val = arr[i][0]
  }

  if (connected_cnt > 3) {
    return true;
  }
}

function verticalChecker(arr){
  var i, old_vertical_val, old_aligned_val;
  var connected_cnt = 1;
  for (i in arr) {
    if (old_vertical_val == arr[i][0]){
      if ((old_aligned_val - 1) == arr[i][1] ){
        connected_cnt++;
      }else{
        connected_cnt = 1;
      }
    }else{
      connected_cnt = 1;
    }
    old_vertical_val  = arr[i][0]
    old_aligned_val   = arr[i][1]
  }

  if (connected_cnt > 3) {
    return true;
  }
}

function diagonalChecker(arr){
  var i, old_x_val, old_y_val, old_direction;
  var connected_cnt = 1;
  for (i in arr) {
    if ((arr[i][1] + 1) == old_y_val){
      if ((arr[i][0] - 1) == old_x_val){
        if (old_direction == "RIGHT"){
          connected_cnt = 1;
        }
        connected_cnt++;
        old_direction = 'LEFT'
      }else if ((arr[i][0] + 1) == old_x_val){
        if (old_direction == "LEFT"){
          connected_cnt = 1;
        }
        connected_cnt++;
        old_direction = 'RIGHT'
      }else {
        connected_cnt = 1;
      }
    }else{
      connected_cnt = 1;
    }

    old_x_val = arr[i][0];
    old_y_val = arr[i][1];
  }

  if (connected_cnt > 3) {
    return true;
  }
}

$(document).ready(function(){
  $('#submit').on('click', function(){
    horizontalChecker();
    verticalChecker();
    diagonalChecker();
  });

  function horizontalChecker(){
    arr =
      [
        [2, 5],
        [4, 5],
        [5, 5],
        [6, 5]
      ]

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

    console.log("Horizontal: " + connected_cnt);
  }

  function verticalChecker(){
    arr =
      [
        [0, 5],
        [0, 4],
        [0, 3],
        [0, 1],
        [0, 0],
        [1, 5]
      ]

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

    console.log("Vertical: " + connected_cnt);
  }

  function diagonalChecker(){
    arr =
      [
        [3, 5],
        [2, 4],
        [1, 3],
        [2, 2],
        [0, 2]
      ]

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

    console.log("Diagonal: " + connected_cnt);
  }

  function gameChecker(){
    if (horizontalChecker() == true && verticalChecker() == true && diagonalChecker() == true) {
      console.log("Player (1|2) win!");
    }else{
      console.log("It's a draw!")
    }
  }

  function newGame(){
    // reset all array values
    // clear the board
  }

  function computerAI(){

  }
});

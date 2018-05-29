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

function gameChecker(arr, x, y){
  if (horizontalChecker(arr, y) >= 4 || verticalChecker(arr, x) >= 4 || diagonalChecker(arr, x, y) >= 4) {
    alert("Player (1|2) win!");
  }
}

function horizontalChecker(arr, pointerIndex){
  var i;
  var arrX = [];
  for (i in arr) {
    if (pointerIndex == arr[i][1]) {
      arrX.push(arr[i][0])
    }
  }

  return sequenceCounter(arrX);
}

function verticalChecker(arr, pointerIndex){
  var i;
  var arrX = [];
  for (i in arr) {
    if (pointerIndex == arr[i][0]) {
      arrX.push(arr[i][1])
    }
  }

  return sequenceCounter(arrX);
}

function diagonalChecker(arr, x, y) {
  var i;
  var ctr = 0;
  var ops = 'sub';
  if (x <= 3) {
    ops = 'add';
  }

  for (i = (arr.length - 1); i >= 0 ; i--) {
    if (x == arr[i][0] && y == arr[i][1]){
      ctr++;
      console.log("x: "+x)
      console.log("arr[i][0]: "+arr[i][0])
      console.log("y: "+y)
      console.log("arr[i][1]: "+arr[i][1])
      console.log("ctr: "+ctr)
      if (ops == 'add'){
        x++;
      }else{
        x--;
      }

      y++;
    }
  }

  return ctr;
}

function sequenceCounter(arrX) {
  var sortedArrX = arrX.sort();
  var current_val = 0, ctr = 1;
  for (i in sortedArrX) {
    if ((current_val + 1) == sortedArrX[i]){
      ctr++;
    }else{
      ctr = 1;
    }
    current_val = sortedArrX[i];
  }

  return ctr;
}

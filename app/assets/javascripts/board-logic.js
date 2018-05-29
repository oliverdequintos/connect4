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

function gameChecker(arr, vInput, hInput){
  if (horizontalChecker(arr, hInput) >= 4 || verticalChecker(arr, vInput) >= 4 || diagonalChecker(arr, hInput, vInput) >= 4) {
    alert("Player (1|2) win!");
  }
}

function horizontalChecker(arr, current_input){
  var i;
  var arrX = [];
  for (i in arr) {
    if (current_input == arr[i][1]) {
      arrX.push(arr[i][0])
    }
  }

  return sequenceCounter(arrX);
}

function verticalChecker(arr, current_input){
  var i;
  var arrX = [];
  for (i in arr) {
    if (current_input == arr[i][0]) {
      arrX.push(arr[i][1])
    }
  }

  return sequenceCounter(arrX);
}

function diagonalChecker(arr, hInput, vInput){
  return 0;
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

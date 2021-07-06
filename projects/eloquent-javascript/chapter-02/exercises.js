
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function triangles(size) {
var line = "";
  for (var i = 0; i < size; i++) {
    line += "#";
    console.log(line);
  }
}
/*  var string = "#";
  while (string.length < num) {
    console.log(string);
    string = string + "#";
  }
}
*/

/*function triangles() {
  var string = "#";
  while (string.length < 7) {
    console.log(string);
    string = string + "#";
  }
}
*/
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (var i = 1; i <= 15; i++) {
  var num = i;
     if (num % 3 === 0 && num % 5 === 0) {
        console.log("fizzbuzz")
    }  else if (num % 3 === 0) {
        console.log("fizz")
    }  else if (num % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(num)
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  var chessboard = "";

  var lineOne = "";
  var lineTwo = "";
  for ( var i = 0; i < size; i++) {
    if (i % 2 === 0) {
      lineOne += " "
      lineTwo += "#"
    } else { 
      lineTwo += " "
      lineOne += "#"  
    }
  }

      lineOne += "\n"
      lineTwo += "\n"
      
  for ( var i = 0; i < size; i++) {
    if (i % 2 === 0) {
      chessboard += lineOne;
    } else {
      chessboard += lineTwo;
    }
  }
  
  console.log(chessboard);
}
//Rowan helped with this a lot
/*
function drawChessboard() {
  var dblString = " # # # #\n# # # # ";
  for (var i = 1; i <= 4; i++) {
    var num = i; 
    console.log(dblString); 
  }

}
*/

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}

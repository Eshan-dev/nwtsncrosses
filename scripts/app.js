$(document).ready(function() {

//   soundManager.setup({
//  url: '../audio/',
//  onready: function() {


//  $('#makeSound').on('click', function(){
//      var mySound = soundManager.createSound({
//        url: 'audio/starwarsthemenew.mp3'
//      });
//      mySound.play();
//    });

// },
//  ontimeout: function() {
//  }

   
  var player = ''
  var winSeq = [[1, 2, 3], [1, 4, 7], [2, 5, 8],[3, 6, 9], [4, 5, 6], [7, 8, 9], [3, 5, 7]];
  var thisTurn = 'xTurn';
  var grid = ['','','','','','','','',''];


  $('.playerInput').on('click', function(){
    var id= Number($(this).attr('id'));
    if (thisTurn === 'xTurn') {
        player = 'x'
        this.textContent= player; 
        thisTurn = 'oTurn';
        grid[id -1] = 'x'  
      console.log(grid) 
    } else {
        player = 'o'
        this.textContent= player; 
        thisTurn ='xTurn'
        grid[id -1] = 'o'
      console.log(grid) 

     }
   });
  });

function checkWin(winSeq)
var playArray === winSeq.sort()

// fucntion checkWin, cehck that against player
// 2x array 1x x move 1 x o moves nd store moves 
// winning combo array
//wining grid array
// mxoves [ 0.1,2 etc]

  // $('.playerInput').on('click', function(){
  // var id= Number($(this).attr('id'));
  // if (thisTurn === winSeq) {
  //   } else {
  //       thisTurn === winSeq
  //     console.log(winSeq) 

  //  });
 




 
    

  
  








































































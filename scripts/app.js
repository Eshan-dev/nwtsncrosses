$(document).ready(function() {
   
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
 



 function playerWin {
  $.this(winSeq === true)
 }



});



 
 
    

  
  








































































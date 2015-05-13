$(document).ready(function() {
   

  // var winSeq ['1', '2', '3'],['1', '4', '7'],['2', '5', '8'],['3', '6', '9'],['4', '5', '6'],['7', '8', '9'],['7', '5', '3'];

  // var start = "o";
  // var xTurn = ['xTurn'];
  // var oTurn = [];
  var thisTurn = 'xTurn';
  var grid = ['','','','','','','','',''];

  $('.playerInput').on('click', function(){
    if (thisTurn === 'xTurn') {
      this.textContent='x'; 
      console.log(this);
      thisTurn = 'oTurn';
    } else {
      this.textContent='o'; 
      thisTurn ='xTurn'
    }
  });
});



 
 
    

  
  








































































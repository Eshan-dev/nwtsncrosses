$(document).ready(function() {
   
  var player = ''
  var winSeq = [[0, 1, 2], [0, 3, 6], [1, 4, 7],[2, 5, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6]];
  var thisTurn = 'xTurn';
  var grid = ['','','','','','','','',''];


  $('.playerInput').on('click', function(){
    var id= Number($(this).attr('id'));
    if (thisTurn === 'xTurn') {
        player = 'x'
        this.textContent= player; 
        thisTurn = 'oTurn';
        grid[id -1] = 'x' 
        checkWin(player) 
      // console.log(grid) 
    } else {
        player = 'o'
        this.textContent= player; 
        thisTurn ='xTurn'
        grid[id -1] = 'o'
        checkWin(player)
      // console.log(grid) 
     }
   });
function checkWin(player){
    for(i = 0; i < winSeq.length; i++) {
      for (s = 0; s < grid.length; s++) {
        if (grid[s] === player){
          if(winSeq[i] === grid[s][0]){
            console.log('matches')
          }
        }
      }
    }
  } 


soundManager.setup({
url: '../audio/',
onready: function() {

   $('.playerInput').on('click', function(){
     var mySound = soundManager.createSound({
       url: 'audio/Lightsaber Clash-SoundBible.com-203518049.mp3'
     });
     mySound.play();
   });



 var mySound = soundManager.createSound({
  url: 'audio/starwarsthemenew.mp3',
  autoPlay: true,
  loops: 4,
  pan: -75,
  volume: 25
});

},
 ontimeout: function() {
 }
 });
  });
 
//need to push player moves into array to check if winning array
// track moves by player


// fucntion checkWin, cehck that against player
// 2x array 1x x move 1 x o moves nd store moves 
// winning combo array
//wining grid array
// mxoves [ 0.1,2 etc]

 




 
    

  
  








































































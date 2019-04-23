$(document).ready(function() {
  var board = new GameBoard([],0,[]);
  var maxCol = 3;
  var maxRow = 3;
  board.winners = [[3, 4, 5],[6, 7, 8],[0, 3, 6],[2, 5, 8],[0, 1, 2],[1, 4, 7],[2, 4, 6],[0, 4, 8]];

  for(currentRow = 0; currentRow < maxRow; currentRow++){
    $("#board").append("<div class=' row'>");
    for(currentCol = 0; currentCol < maxCol; currentCol++){

      $("#board").append("<div class='space btn-default col-xs-3 animated' id='" + (currentRow) + "-" + (currentCol) + "'></div>");
      AddClick(board,currentRow,currentCol);
      board.grid.push(new Cell("-",currentRow,currentCol));
      // console.log(board.grid);
    }
    $("#board").append("</div>");
  }


});
function AddClick(board,row,col){
  $("#"+(row)+ "-" +(col)).click(function(){

    // console.log(row + " " + col);
    if(FindCell((row),(col),board).owner === "-"){ console.log("aksjdf");
    if(board.turn == 0){
        board.turn = 1;
        FindCell((row),(col),board).owner = "X";
        $("#"+(row)+ "-" +(col)).append(FindCell((row),(col),board).owner);
          WinnerCheck(board,"X");
      }
      else if(board.turn==1){ console.log("aksjdf");
          board.turn = 0;
          FindCell((row),(col),board).owner = "O";
          $("#"+(row)+ "-" +(col)).append(FindCell((row),(col),board).owner);

          WinnerCheck(board,"O");
        }
    }
    else{
      // console.log("aksjdf");
    }


  });
}

function Cell(owner,x,y){
  this.owner=owner;
  this.xpos=x;
  this.ypos=y;
}

function GameBoard(grid,turn,winners){
this.grid = grid;
this.turn = turn;
this.winners = winners;
}
function FindCell(row,col,board){
var final;
    board.grid.forEach(function(cell){

      if(cell.ypos == row && cell.xpos == col ){
        final = cell;
      }
      else{
        return "butt";
      }
    });
    return final;
}
function WinnerCheck(board,owner){
var winner;
board.winners.forEach(function(win){

if(board.grid[win[0]].owner == owner && board.grid[win[2]].owner == owner && board.grid[win[1]].owner == owner){

winner = true;
}
});

if(winner == true){
$("#board").html("");
$("#board").append(owner + " WINS!");
}


}

function Winner(cells, owner){
this.cells = cells;
this.owner = owner;
}

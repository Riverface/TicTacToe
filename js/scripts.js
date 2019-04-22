$(document).ready(function() {
  var board = new GameBoard([],0);
  var maxCol = 3;
  var maxRow = 3;
  for(currentRow = 0; currentRow < maxRow; currentRow++){
    $("#board").append("<div class=' row'>");
    for(currentCol = 0; currentCol < maxCol; currentCol++){

      $("#board").append("<div class='space btn-default col-xs-3 animated' id='" + (currentRow) + "-" + (currentCol) + "'></div>");
      AddClick(board,currentRow,currentCol);
      board.grid.push(new Cell("-",currentRow,currentCol));
      console.log(board.grid);
    }
    $("#board").append("</div>");
  }

});
function AddClick(board,row,col){
  $("#"+(row)+ "-" +(col)).click(function(){
    console.log(board);
    console.log(FindCell((row),(col),board).owner);
    if(FindCell((row),(col),board).owner === "-"){ console.log("aksjdf");
    if(board.turn == 0){
        board.turn = 1;
        FindCell((row),(col),board).owner = "O";
        $("#"+(row)+ "-" +(col)).append(FindCell((row),(col),board).owner);
      }
      else if(board.turn==1){ console.log("aksjdf");
          board.turn = 0;
          FindCell((row),(col),board).owner = "X";
          $("#"+(row)+ "-" +(col)).append(FindCell((row),(col),board).owner);
          console.log(FindCell((row),(col),board).owner);
        }
    }
    else{
      console.log("aksjdf");
    }


  });
}

function Cell(owner,x,y){
  this.owner=owner;
  this.xpos=x;
  this.ypos=y;
}

function GameBoard(grid,turn){
this.grid = grid;
this.turn = turn;
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
function WinnerCheck(cells,owner){
  winners = ["012", "345", "678", "036", "048" ];
  for(x = 0; x < maxCol;x++){
    {

    }

}
}

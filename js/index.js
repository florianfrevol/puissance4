var p4 = {
  game_board: [],
  turn: 1,

    
    init: function(parent, lignes, colonnes) {

    t = document.createElement('table');
    t.id = 'plateau';

    var i = 5;
    while (i >= 0) {
      var tr = document.createElement('tr');
      this.game_board[i] = [];
        var j = 0;
        while (j < 7) {
          var td = document.createElement('td');
          td.dataset.column = j;
          tr.appendChild(td);
          this.game_board[i][j] = td;
            
            j ++;
        }
        t.appendChild(tr);
        i --;
    }   
    
    parent.innerHTML = '';
    parent.appendChild(t);

	  t.addEventListener('click', function(e) { p4.handler(e); });
	},

	set: function(row, column, player) {
	  this.game_board[row][column].className = 'joueur' + player;
    this.coups++;
    this.turn = 3 - this.turn;
	},
	play: function(column) {
    if (this.game_status != 0) {
    }
    var row;
    var i = 0;
    while (i < 6) {
        if (!this.game_board[i][column].className) {
            row = i;
            break;
        }
        i ++;
    }
    if (this.game_board[5][column].className)
        alert('La rangée est déjà pleine !');
        
    this.set(row, column, this.turn);
	},

	handler: function(event) {
	  var column = event.target.dataset.column;
  	if (column) 
    	this.play(parseInt(column));
	},
}
p4.init(document.querySelector('#jeu'));

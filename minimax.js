class Board{
    value(board){
        //check rows
        for(let i=0; i<=6; i+=3){
            if(board[i]==board[i+1] && board[i]==board[i+2]){
                if(board[i]=='x')
                    return 15;
                else if(board[i]=='o')
                    return -15;
            }
        }

        //check columns
        for(let i=0; i<3; i++){
            if(board[i]==board[i+3] && board[i]==board[i+6]){
                if(board[i]=='x')
                    return 15;
                else if(board[i]=='o')
                    return -15;
            }
        }

        //check diagnols
        if(board[0]==board[4] && board[0]==board[8]){
            if(board[0]=='x')
                return 15;
            else if(board[0]=='o')
                return -15;
        }
        else if(board[2]==board[4] && board[2]==board[6]){
            if(board[2]=='x')
                return 15;
            else if(board[2]=='o')
                return -15;
        }

        return 0;
    }

    hasMoves(board){
        let count = 0;
        for(let i=0; i<9; i++){
            if(board[i]=='-')
                count++;
        }
        return count;
    }

    nextMove(board){
        let newStates = []

        for(let i=0; i<9; i++){
            if(board[i]=='-')
                newStates.push(i);
        }

        return newStates;
    }
}

class Player{
    constructor(){
        this.board = new Board();
    }

    getOptimalMove(game){
        let bestScore = -15;
        let move = -1;

        let moves = this.board.nextMove(game);

        for(let pos in moves){
            possibleMove = [...game];
            possibleMove[pos] = 'x';

            let score = minimax(possibleMove, 0, false);

            if(score>bestScore){
                bestScore = score;
                move = pos;
            }

            if(bestScore==15)
                return move;
        }

        return move;
    }

    minimax(curr, depth, isMax){
        let score = this.board.value(curr);

        if(score==15 || score==-15)
            return score;
        
        if(this.board.hasMoves(curr)==0)
            return 0;

        if(isMax){
            let best = -15;
            successors = this.board.nextMove(curr);
            for(let pos in successors){
                possibility = [...curr];
                possibility[pos] = 'x';
                best = Math.max(best, this.minimax(possibility, depth+1, !isMax));

                if(best==15)
                    break;
            }
            return best;
        }
        else{
            let best = 15;
            successors = this.board.nextMove(curr);
            for(let pos in successors){
                possibility = [...curr];
                possibility[pos] = 'o';
                best = Math.min(best, this.minimax(possibility, depth+1, !isMax));

                if(best==-15)
                    break;
            }
            return best;
        }
    }
}

class Game{
    constructor(){
        let game = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
        let board = new Board();
        let player = new Player();
    }

    play(){
        let turn = false;

        while(this.board.hasMoves(game)!=0 && this.board.value(game)!=15 && this.board.value(game)!=-15){
            if(turn){
                let moveC = this.player.getOptimalMove(this.game);
                this.game[moveC] = 'x';
            }else{
                let moveP = -1; //take input from user
                this.game[moveP] = 'o';
            }

            turn = !turn;
        }
    }
}
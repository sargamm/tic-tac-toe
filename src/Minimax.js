function value(board){
    //check rows
    for(let i=0; i<=6; i+=3){
        if(board[i]==board[i+1] && board[i]==board[i+2]){
            if(board[i]=='X')
                return 15;
            else if(board[i]=='O')
                return -15;
        }
    }

    //check columns
    for(let i=0; i<3; i++){
        if(board[i]==board[i+3] && board[i]==board[i+6]){
            if(board[i]=='X')
                return 15;
            else if(board[i]=='O')
                return -15;
        }
    }

    //check diagnols
    if(board[0]==board[4] && board[0]==board[8]){
        if(board[0]=='X')
            return 15;
        else if(board[0]=='O')
            return -15;
    }
    else if(board[2]==board[4] && board[2]==board[6]){
        if(board[2]=='X')
            return 15;
        else if(board[2]=='O')
            return -15;
    }

    return 0;
}
function hasMoves(board){
    let count = 0;
    for(let i=0; i<9; i++){
        if(board[i]==null)
            count++;
    }
    return count;
}

function nextMove(board){
    let newStates = []

    for(let i=0; i<9; i++){
        if(board[i]===null)
            newStates.push(i);
    }

    return newStates;
}
function getOptimalMove(board, depth){
    let bestScore = -15;
    let move = -1;

    let moves = nextMove(board);

    for(let i=0;i<moves.length;i++){
        let pos=moves[i]
        let possibleMove=[...board]
        possibleMove[pos] = 'X';

        let score = minimax(possibleMove, 0, false,depth);

        if(score>bestScore){
            bestScore = score;
            move = pos;
        }

        if(bestScore==15)
            return move;
    }

    return move;
}

function minimax(curr, depth, isMax, maxDepth){
    if(depth==maxDepth)
        return 0
    let score = value(curr);
    if(score==15 || score==-15)
        return score;
    
    if(hasMoves(curr)==0)
        return 0;

    if(isMax){
        let best = -15;
        let successors = nextMove(curr);
        // console.log(curr+"xxx")
        for(let i=0;i<successors.length;i++){
            let pos=successors[i];
            // console.log(pos+"pos")
            let possibility=[...curr]
            possibility[pos] = 'X';
            best = Math.max(best, minimax(possibility, depth+1, !isMax,maxDepth));
            // if(best==15)
            //     break;
        }
        return best;
    }
    else{
        let best = 15;
        let successors = nextMove(curr);
        // console.log(curr+"ooo")
        for(let i=0;i<successors.length;i++){
            let pos=successors[i];
            let possibility=[...curr]
            possibility[pos] = 'O';
            best = Math.min(best, minimax(possibility, depth+1, !isMax,maxDepth));

            // if(best==-15)
            //     break;
        }
        return best;
    }
}

export {getOptimalMove,value,hasMoves}
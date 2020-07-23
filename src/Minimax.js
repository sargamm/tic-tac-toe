function value(board){
    //check rows
    for(let i=0; i<=6; i+=3){
        if(board[i]===board[i+1] && board[i]===board[i+2]){
            if(board[i]==='X')
                return 15;
            else if(board[i]==='O')
                return -15;
        }
    }

    //check columns
    for(let i=0; i<3; i++){
        if(board[i]===board[i+3] && board[i]===board[i+6]){
            if(board[i]==='X')
                return 15;
            else if(board[i]==='O')
                return -15;
        }
    }

    //check diagnols
    if(board[0]===board[4] && board[0]===board[8]){
        if(board[0]==='X')
            return 15;
        else if(board[0]==='O')
            return -15;
    }
    else if(board[2]===board[4] && board[2]===board[6]){
        if(board[2]==='X')
            return 15;
        else if(board[2]==='O')
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

function getOptimalMove(board, player){
    if(player==='X'){
        let bestScore = -15;
        let depth = Number.MAX_SAFE_INTEGER;
        let move = -1;

        let moves = nextMove(board);

        for(let i=0;i<moves.length;i++){
            let pos=moves[i]
            let possibleMove=[...board]
            possibleMove[pos] = 'X';

            let ans = minimax(possibleMove, 0, false);

            let score = ans[0]
            let dpos = ans[1]

            if(score===bestScore && dpos<depth){
                bestScore = score;
                depth = dpos;
                move = pos;
            }else if(score>bestScore){
                bestScore = score;
                depth = dpos;
                move = pos;
            }

            // if(bestScore==15)
            //     return move;
        }

        return move;
    }else if(player==='O'){
        let bestScore = 15;
        let depth = Number.MAX_SAFE_INTEGER;
        let move = -1;

        let moves = nextMove(board);

        for(let i=0;i<moves.length;i++){
            let pos=moves[i]
            let possibleMove=[...board]
            possibleMove[pos] = 'O';

            let ans = minimax(possibleMove, 0, true);

            let score = ans[0]
            let dpos = ans[1]

            if(score===bestScore && dpos<depth){
                bestScore = score;
                depth = dpos;
                move = pos;
            }else if(score<bestScore){
                bestScore = score;
                depth = dpos;
                move = pos;
            }

            // if(bestScore==15)
            //     return move;
        }

        return move;
    }
}

function minimax(curr, depth, isMax, maxDepth){
    let score = [value(curr), depth];
    if(depth===maxDepth)
        return score;
    if(score[0]===15 || score[0]===-15)
        return score;
    
    if(hasMoves(curr)===0)
        return score;

    if(isMax){
        let best = -15;
        let dis = Number.MAX_SAFE_INTEGER;
        let successors = nextMove(curr);
        // console.log(curr+"xxx")
        for(let i=0;i<successors.length;i++){
            let pos=successors[i];
            // console.log(pos+"pos")
            let possibility=[...curr]
            possibility[pos] = 'X';

            let val = minimax(possibility, depth+1, !isMax);
            if(val[0]>best){
                best = val[0];
                dis = val[1];
            }else if(val[0]===best && val[1]<dis){
                best = val[0];
                dis = val[1];
            }

            // best = Math.max(best, minimax(possibility, depth+1, !isMax));
        }
        return [best, dis];
    }
    else{
        let best = 15;
        let dis = Number.MAX_SAFE_INTEGER;
        let successors = nextMove(curr);
        // console.log(curr+"ooo")
        for(let i=0;i<successors.length;i++){
            let pos=successors[i];
            let possibility=[...curr]
            possibility[pos] = 'O';

            let val = minimax(possibility, depth+1, !isMax);
            if(val[0]<best){
                best = val[0];
                dis = val[1];
            }else if(val[0]===best && val[1]<dis){
                best = val[0];
                dis = val[1];
            }

            // best = Math.min(best, minimax(possibility, depth+1, !isMax));

            // if(best==-15)
            //     break;
        }
        return [best,dis];
    }
}

export {getOptimalMove,value,hasMoves}
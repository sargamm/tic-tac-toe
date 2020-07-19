import java.util.ArrayList;

public class Player {
    //a : best score for max-player : 'x' // Computer
    //b : best score for min-player : 'o' // Player

    public static int getOptimalMove(ArrayList<Character> game) {
        int bestScore = -15;
        int move = -1;

        ArrayList<Integer> moves = Board.nextMove(game);

        for(int pos : moves){
                ArrayList<Character> possibleMove = new ArrayList<>(game);
                possibleMove.set(pos, 'x');

                int score = minimax(possibleMove, 0, false);

                if(score>bestScore) {
                    bestScore = score;
                    move = pos;
                }

                if(bestScore==15)
                    return move;
        }

        return move;
    }

    private static int minimax(ArrayList<Character> curr, int depth, boolean isMax){
        int score = Board.value(curr);

        if(score==15 || score==-15)
            return score;

        if(Board.hasMoves(curr)==0)
            return 0;

        if(isMax){
            int best=-15;
            ArrayList<Integer> successors = Board.nextMove(curr);
//            System.out.println(depth);
            for(int pos : successors){
                ArrayList<Character> possibility = new ArrayList<>(curr);
                possibility.set(pos, 'x');
                best = Math.max(best, minimax(possibility, depth+1, !isMax));

                if(best==15)
                    break;
            }

            return best;
        }
        else{
            int best=15;
            ArrayList<Integer> successors = Board.nextMove(curr);
//            System.out.println(depth);
            for(int pos : successors){
                ArrayList<Character> possibility = new ArrayList<>(curr);
                possibility.set(pos, 'o');
                best = Math.min(best, minimax(possibility, depth+1, !isMax));

                if(best==-15)
                    break;
            }

            return best;
        }

    }
}

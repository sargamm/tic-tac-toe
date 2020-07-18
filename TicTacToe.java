import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class TicTacToe {
    public static ArrayList<Character> game;

    public TicTacToe(){
        game = new ArrayList<>();
        for(int i=0; i<9; i++)
            game.add('-');
    }

    public static void play() {
        Scanner scan = new Scanner(System.in);
        ArrayList<Character> x = new ArrayList<>(game);
//        x.add('x'); x.add('o'); x.add('x'); x.add('o'); x.add('x'); x.add('x'); x.add('o'); x.add('x'); x.add('o');
        Board.display(x);

        boolean turn = false;

        while(Board.hasMoves(x)!=0 && Board.value(x)!=15 && Board.value(x)!=-15) {
            if(turn) {
                int moveC = Player.getOptimalMove(x);
                System.out.println(moveC);

                x.set(moveC, 'x');

                Board.display(x);
            }
            else{
                int moveP = scan.nextInt();

                x.set(moveP, 'o');

                Board.display(x);
            }

            turn = !turn;
            System.out.println(Board.hasMoves(x));
        }

    }

    public static void main(String[] args) {
        TicTacToe newGame = new TicTacToe();

        newGame.play();

//        Scanner scan = new Scanner(System.in);
//        int t = scan.nextInt();
//        while (t>0) {
//            String s = scan.next();
//            ArrayList<Character> b = new ArrayList<>();
//            for (char c : s.toCharArray())
//                b.add(c);
//            System.out.println(Board.value(b));
//            t--;
//        }
    }
}

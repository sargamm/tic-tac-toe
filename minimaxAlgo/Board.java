import java.util.ArrayList;

public class Board {
    public static void display(ArrayList<Character> state){
        for(int i=0; i<=6; i+=3){
            System.out.println(state.get(i)+" | "+state.get(i+1)+" | "+state.get(i+2));
        }
    }

    public static int value(ArrayList<Character> state){
        //if maximiser wins : return +15 : 'x' // Computer
        //if minimiser wins : return -15 : 'o' // Player

        //check rows
        for(int i=0; i<=6; i+=3){
            if(state.get(i)==state.get(i+1) && state.get(i)==state.get(i+2)){
                if(state.get(i)=='x')
                    return 15;
                else if(state.get(i)=='o')
                    return  -15;
            }
        }

        //check cols
        for(int i=0; i<3; i++){
            if(state.get(i)==state.get(i+3) && state.get(i)==state.get(i+6)){
                if(state.get(i)=='x')
                    return 15;
                else if(state.get(i)=='o')
                    return  -15;
            }
        }

        //check diagonals
        if(state.get(0)==state.get(4) && state.get(0)==state.get(8)){
            if(state.get(0)=='x')
                return 15;
            else if(state.get(0)=='o')
                return  -15;
        }
        else if(state.get(2)==state.get(4) && state.get(2)==state.get(6)){
            if(state.get(2)=='x')
                return 15;
            else if(state.get(2)=='o')
                return  -15;
        }

        return 0;
    }

    public static int hasMoves(ArrayList<Character> state){
        int count = 0;
        for(int i=0; i<9; i++){
            if(state.get(i)=='-')
                count++;
        }
        return count;
    }

    public static ArrayList<Integer> nextMove(ArrayList<Character> state){
        ArrayList<Integer> newStates = new ArrayList<>();

        for(int i=0; i<9; i++){
            if(state.get(i)=='-'){
                newStates.add(i);
            }
        }
        return newStates;
    }

}

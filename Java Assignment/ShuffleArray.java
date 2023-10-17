import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class ShuffleArray {
    public static void main(String[] args) {
        // Create a Scanner object to read input from the terminal
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the values separated by spaces: ");
        //Enter the values without separating by commas
        String input = scanner.nextLine();

        // Split the input into an array of strings
        String[] inputArray = input.split(" ");

        // Convert the strings to integers
        Integer[] values = new Integer[inputArray.length];
        for (int i = 0; i < inputArray.length; i++) {
            values[i] = Integer.parseInt(inputArray[i]);
        }

        // Convert the array to a List for shuffling
        List<Integer> list = Arrays.asList(values);

        // Shuffle the List
        Collections.shuffle(list);

        // Convert the shuffled List back to an array
        Integer[] shuffledArray = list.toArray(new Integer[0]);

        // Print the shuffled array
        System.out.print("Shuffled Array: ");
        for (int value : shuffledArray) {
            System.out.print(value + " ");
        }

        // Close the scanner
        scanner.close();
    }
}
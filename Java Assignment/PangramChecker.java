import java.util.HashSet;
import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence to check if it's a pangram:");
        String input = scanner.nextLine();
        scanner.close();

        //examples of pangram sentence 
        //the quick brown fox jumps over the lazy dog
        //the five boxing wizards jumps quickly
        //how qickly daft jumping zebras vex
        //jump by vow of quick, lazy strength in oxford.

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String inputString) {
        HashSet<Character> alphabet = new HashSet<>();
        String inputLowerCase = inputString.toLowerCase();

        for (char ch : inputLowerCase.toCharArray()) {
            if (Character.isLetter(ch)) {
                alphabet.add(ch);
            }
        }

        return alphabet.size() == 26; // There are 26 letters in the English alphabet.
    }
}
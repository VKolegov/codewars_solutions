import java.util.Arrays;

public class Kata
{
    public static int squareSum(int[] n)
    { 
        return Arrays.stream(n).reduce(0, (s, n1) -> s + n1*n1);
    }
}
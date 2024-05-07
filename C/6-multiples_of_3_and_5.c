int solution(int number) {

    int sum = 0;

    if (number <= 0) {
        return sum;
    }

    int n = 0;

    // multiples of 3
    for (n = 3; n < number; n += 3) {
        sum += n;
    }

    // multiples of 5
    for (n = 5; n < number; n += 5) {
        sum += n;
    }

    // multiples of 15
    for (n = 15; n < number; n += 15) {
        sum -= n;
    }

    return sum;
}
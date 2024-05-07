int persistence(int n) {
  if (n < 10) {
    return 0;
  }

  int num = 1;

  while (n > 0) {
    num *= n % 10;
    n = n / 10;
  }

  return persistence(num) + 1;
}
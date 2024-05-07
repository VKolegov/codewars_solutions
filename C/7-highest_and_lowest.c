#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

void high_and_low (const char *strnum, char *result)
{

  int num, n;

  int min = INT_MAX;
  int max = INT_MIN;

  unsigned short int pos = 0;

  while (strnum[pos]) {
    sscanf(strnum + pos, "%d %n", &num, &n);

    if (num > max) {
      max = num;
    }

    if (num < min) {
      min = num;
    }

    pos += n;
  }

  sprintf(result, "%d %d", max, min);
}
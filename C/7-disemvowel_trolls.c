#include <stdlib.h>
#include <string.h>

//solution must allocate all required memory
//and return a free-able buffer to the caller.

char *disemvowel(const char *str)
{
  char *result = malloc(strlen(str) + 1);
  int i = 0;

  while (*str) {
    char c = *str++;

    switch (c) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        break;
      default:
        result[i++] = c;
        break;
      }
  }

  result[i] = '\0';

  return result;
}
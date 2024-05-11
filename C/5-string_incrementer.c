#include <stdlib.h>
#include <stdio.h>
#include <string.h>

char *incrementString(const char *str)
{
  size_t l = strlen(str);
  short position = l;
  
  int number = 0;

  char *result = malloc(l + 1);
  strcpy(result, str);
  
  while(position > 0) {
    position--;
    
    if (!sscanf(str + position, "%d", &number)) {
      position++;
      break;
    }
  }

  char *formatStr = malloc(l - position + 1);
  sprintf(formatStr, "%%0%dd\0", l - position);
  
  sprintf(result + position, formatStr, number + 1);
  
  free(formatStr);
  return result;
}
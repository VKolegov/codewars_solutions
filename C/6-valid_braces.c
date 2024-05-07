#include <stdbool.h>

bool valid_braces (const char *braces)
{
  char expectedBracketsStack[strlen(braces)];
  int stackTop = 0;

  while (*braces) {
    char c = *braces++;

    switch (c) {
      case '(':
        expectedBracketsStack[stackTop++] = ')';
        break;
      case '[':
        expectedBracketsStack[stackTop++] = ']';
        break;
      case '{':
        expectedBracketsStack[stackTop++] = '}';
        break;

      default:
        if (expectedBracketsStack[stackTop - 1] != c) {
          return false;
        } else {
          stackTop--;
        }
      }
  }
  return stackTop == 0;
}
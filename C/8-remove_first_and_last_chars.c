#include <string.h>

char* remove_char(char* dst, const char* src)
{
  size_t len = strlen(src);

  strcpy(dst, src + 1);
  dst[len - 2] = '\0';

  return dst;
}
#include <stdbool.h>
#include <stddef.h>

size_t count_sheep(const bool sheep[/* count */], size_t count)
{

  unsigned char total = 0;

  while (count--) total += sheep[count];

  return total;
}
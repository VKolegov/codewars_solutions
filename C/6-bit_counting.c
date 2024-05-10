#include <stddef.h>

size_t countBits(unsigned value)
{
  size_t count = 0;
  
  while (value != 0 ) {
    count += value & 1;
    value = value >> 1;
  }
  
	return count;
}
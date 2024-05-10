#include <stdio.h>

char *human_readable_time (unsigned seconds, char *time_string)
{
  unsigned char hours = 0;
  unsigned short minutes = 0;

  while (seconds >= 60) {
    seconds -= 60;
    minutes++;
  }

  while (minutes >= 60) {
    minutes -= 60;
    hours++;
  }

  sprintf(time_string, "%02d:%02d:%02d", hours, minutes, seconds);

  return time_string; // return it
}
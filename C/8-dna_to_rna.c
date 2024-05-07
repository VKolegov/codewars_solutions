#include <stdlib.h>
#include <string.h>

char *dna_to_rna(const char *dna)
{
  if (!dna) return NULL;

  size_t len = strlen(dna);
  char *rna = malloc(len + 1);

  for (size_t i = 0; i < len; i++) {
    rna[i] = dna[i] == 'T' ? 'U' : dna[i];
  }
  rna[len] = '\0';

  // returned pointer must point to a freeable buffer
  return rna;
}
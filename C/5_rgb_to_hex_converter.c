#define CLAMP_BYTE(x) x < 0x00 ? 0x00 : (x > 0xFF ? 0xFF : x)

void rgb (int r, int g, int b, char hex[6 + 1])
{ 
    sprintf(hex, "%02X%02X%02X", CLAMP_BYTE(r), CLAMP_BYTE(g), CLAMP_BYTE(b));
}
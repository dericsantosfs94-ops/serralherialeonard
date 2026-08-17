from PIL import Image
from pathlib import Path

path = Path(__file__).resolve().parents[1] / "client/public/logo.png"
im = Image.open(path).convert("RGBA")
coords = [(0, 0), (im.width - 1, 0), (0, im.height - 1), (im.width - 1, im.height - 1), (im.width // 2, im.height // 2)]
for coord in coords:
    print(coord, im.getpixel(coord))
print("mode", im.mode, "size", im.size)
print("alpha extrema", im.getchannel("A").getextrema())
print("corner average", tuple(sum(im.getpixel((x, y))[i] for x, y in coords) // len(coords) for i in range(4)))

# Remove only near-white/neutral background pixels if they are opaque.
pixels = im.load()
for y in range(im.height):
    for x in range(im.width):
        r, g, b, a = pixels[x, y]
        neutral = max(r, g, b) - min(r, g, b) < 18
        bright = r > 218 and g > 218 and b > 218
        if a > 0 and neutral and bright:
            pixels[x, y] = (r, g, b, 0)

im.save(path, optimize=True)
print("saved cleaned alpha")

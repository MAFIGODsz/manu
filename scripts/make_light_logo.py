"""
Generate a LIGHT version of the logo for the dark footer.

The footer background is dark (#1A0E30). The default logo has dark-purple
"Manu" which would be invisible there. We recolor the purple letters to a
light lilac while keeping the gold F detail, preserving the alpha (so edges
stay anti-aliased). Typography/shape are untouched — only color is remapped.
"""
from PIL import Image

SRC = r"C:\Users\Wlad\Desktop\manu-freixas\public\images\logo-manu-freixas.png"
DST = r"C:\Users\Wlad\Desktop\manu-freixas\public\images\logo-manu-freixas-light.png"

LILAC = (220, 198, 255)   # light lilac for the wordmark on dark bg
GOLD  = (240, 205, 95)    # keep the warm F accent

im = Image.open(SRC).convert("RGBA")
w, h = im.size
px = im.load()
out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
o = out.load()

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if a == 0:
            continue
        # detect the gold/warm accent: red & green high, blue clearly lower
        is_gold = (r > 140 and r > b + 35 and g > b + 15)
        nr, ng, nb = GOLD if is_gold else LILAC
        o[x, y] = (nr, ng, nb, a)

out.save(DST)
print("saved", DST, out.size)

from pathlib import Path
from PIL import Image, ImageOps

repo = Path(__file__).resolve().parents[1]
source = Path('/home/ubuntu/upload/iisjcrvgrght.png')
out = repo / 'client/public/assets/brand/oficina-instagram.jpg'
out.parent.mkdir(parents=True, exist_ok=True)

with Image.open(source) as img:
    img = ImageOps.exif_transpose(img).convert('RGB')
    # Horizontal crop for the left column: keep Leonard, workbench and the gate structure.
    img = ImageOps.fit(img, (1400, 900), method=Image.Resampling.LANCZOS, centering=(0.54, 0.50))
    img.save(out, 'JPEG', quality=90, optimize=True, progressive=True)
    print(f'created {out} {img.size}')

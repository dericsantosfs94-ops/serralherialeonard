from pathlib import Path
from PIL import Image, ImageOps

repo = Path(__file__).resolve().parents[1]
source = Path('/home/ubuntu/upload/5174908402084285517.jpg')
out = repo / 'client/public/assets/brand/fachada-atual.jpg'
out.parent.mkdir(parents=True, exist_ok=True)

with Image.open(source) as img:
    img = ImageOps.exif_transpose(img).convert('RGB')
    # Keep a vertical editorial ratio so the image fills the About column naturally.
    img = ImageOps.fit(img, (900, 1125), method=Image.Resampling.LANCZOS, centering=(0.52, 0.40))
    img.save(out, 'JPEG', quality=92, optimize=True, progressive=True)
    print(f'created {out} {img.size}')

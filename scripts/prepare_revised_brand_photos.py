from pathlib import Path
from PIL import Image, ImageOps

repo = Path(__file__).resolve().parents[1]
out = repo / "client/public/assets/brand"
out.mkdir(parents=True, exist_ok=True)

# Facade: remove the old SL sign from the top band and retain the storefront as historical context.
with Image.open(repo / "client/public/assets/obras/foto_1.jpg") as img:
    img = ImageOps.exif_transpose(img).convert("RGB")
    facade = img.crop((0, 285, img.width, img.height))
    facade = ImageOps.fit(facade, (1400, 700), method=Image.Resampling.LANCZOS, centering=(0.5, 0.58))
    facade.save(out / "fachada-historica.jpg", "JPEG", quality=90, optimize=True, progressive=True)

# Founder: tighter portrait centered on face and torso, retaining the workshop wall as context.
with Image.open(repo / "client/public/assets/obras/5174908402084285518.jpg") as img:
    img = ImageOps.exif_transpose(img).convert("RGB")
    founder = img.crop((90, 150, 790, 1030))
    founder = ImageOps.fit(founder, (900, 1100), method=Image.Resampling.LANCZOS, centering=(0.52, 0.42))
    founder.save(out / "fundador-retrato.jpg", "JPEG", quality=90, optimize=True, progressive=True)

print("created revised facade and founder assets")

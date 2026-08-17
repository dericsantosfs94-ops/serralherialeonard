from pathlib import Path
from PIL import Image, ImageOps

repo = Path(__file__).resolve().parents[1]
out = repo / "client/public/assets/portoes"
out.mkdir(parents=True, exist_ok=True)

selected = {
    "portao-preto-impacto": Path("/home/ubuntu/upload/5174908402084285519.jpg"),
    "portao-branco-slats": Path("/home/ubuntu/upload/5179641215526309387.jpg"),
    "portao-branco-garagem": Path("/home/ubuntu/upload/5179641215526309395.jpg"),
}

for name, source in selected.items():
    with Image.open(source) as img:
        img = ImageOps.exif_transpose(img).convert("RGB")
        # Preserve the original 4:3 composition and cap delivery size for fast loading.
        img.thumbnail((1600, 1200), Image.Resampling.LANCZOS)
        target = out / f"{name}.jpg"
        img.save(target, "JPEG", quality=90, optimize=True, progressive=True)
        print(f"{target}: {img.size}")

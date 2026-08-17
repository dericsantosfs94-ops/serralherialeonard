from pathlib import Path
from PIL import Image, ImageOps

repo = Path(__file__).resolve().parents[1]
out = repo / "client/public/assets/ribbon"
out.mkdir(parents=True, exist_ok=True)

selected = {
    "portao-diagonal": "/home/ubuntu/upload/5179641215526309313.jpg",
    "vidro-varanda": "/home/ubuntu/upload/5179641215526309325.jpg",
    "esquadria-porta-vidro": "/home/ubuntu/upload/5181893015339994345.jpg",
    "portao-branco-slats": "/home/ubuntu/upload/5179641215526309403.jpg",
    "box-banheiro": "/home/ubuntu/upload/5181893015339994343.jpg",
    "portao-preto-correr": "/home/ubuntu/upload/5179641215526309336.jpg",
    "vidro-box": "/home/ubuntu/upload/5179641215526309409.jpg",
    "portao-branco-moderno": "/home/ubuntu/upload/5179641215526309299.jpg",
}

for name, source in selected.items():
    with Image.open(source) as img:
        img = ImageOps.exif_transpose(img).convert("RGB")
        img.thumbnail((1400, 1050), Image.Resampling.LANCZOS)
        target = out / f"{name}.jpg"
        img.save(target, "JPEG", quality=88, optimize=True, progressive=True)
        print(f"{target}: {img.size}")

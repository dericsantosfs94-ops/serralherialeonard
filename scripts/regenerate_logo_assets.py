from pathlib import Path
import base64
from PIL import Image

root = Path(__file__).resolve().parents[1] / "client/public"
source = Image.open(root / "logo.png").convert("RGBA")
assets = root / "assets"
assets.mkdir(exist_ok=True)
source.save(assets / "logo.png", optimize=True)
small = source.copy()
small.thumbnail((512, 512), Image.Resampling.LANCZOS)
small.save(assets / "logo-512.png", optimize=True)
icon = source.copy()
icon.thumbnail((256, 256), Image.Resampling.LANCZOS)
icon.save(root / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
encoded = base64.b64encode((root / "logo.png").read_bytes()).decode()
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" role="img" aria-labelledby="title desc"><title id="title">Logotipo LS Leonard</title><desc id="desc">Diamante preto e verde com monograma LS em três dimensões.</desc><image href="data:image/png;base64,{encoded}" width="1920" height="1920" preserveAspectRatio="xMidYMid meet"/></svg>'''
(root / "logo.svg").write_text(svg)
(assets / "logo.svg").write_text(svg)
print("logo assets regenerated")

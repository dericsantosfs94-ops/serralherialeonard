from pathlib import Path

root = Path(__file__).resolve().parents[1] / "client/src"
files = list((root / "components").glob("*.tsx")) + [root / "pages/NotFound.tsx"]
replacements = {
    "text-[var(--gold)]": "text-[var(--leonard)]",
    "text-[var(--gold-deep)]": "text-[var(--emerald-deep)]",
    "text-[var(--gold-soft)]": "text-[var(--leonard-light)]",
    "border-[var(--gold)]": "border-[var(--leonard)]",
    "border-[var(--gold-deep)]": "border-[var(--emerald-deep)]",
    "border-[var(--gold-soft)]": "border-[var(--leonard-light)]",
    "bg-[var(--gold)]": "bg-[var(--leonard)]",
    "hover:bg-[var(--gold)]": "hover:bg-[var(--leonard)]",
    "hover:border-[var(--gold)]": "hover:border-[var(--leonard)]",
}
for path in files:
    text = path.read_text()
    original = text
    for old, new in replacements.items():
        text = text.replace(old, new)
    if text != original:
        path.write_text(text)
        print(f"updated {path.name}")

css = root / "index.css"
text = css.read_text()
text = text.replace("background: var(--gold-soft);", "background: var(--leonard);")
text = text.replace("border-top: 1.5px solid var(--gold-soft);", "border-top: 1.5px solid var(--leonard-light);")
text = text.replace("border-left: 1.5px solid var(--gold-soft);", "border-left: 1.5px solid var(--leonard-light);")
text = text.replace("border-bottom: 1.5px solid var(--gold-soft);", "border-bottom: 1.5px solid var(--leonard-light);")
text = text.replace("border-right: 1.5px solid var(--gold-soft);", "border-right: 1.5px solid var(--leonard-light);")
text = text.replace("background: var(--gold);", "background: var(--leonard);")
text = text.replace("border-color: var(--gold);", "border-color: var(--leonard);")
css.write_text(text)
print("updated index.css")

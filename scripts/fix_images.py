#!/usr/bin/env python3
"""Rewrite /manus-storage/* image paths in company.ts to local /real/* paths
recoverable from git history (commit cdbf238: public/real/*).

Only paths that match a known real photo are rewritten; others keep their
/manus-storage/ path and will show broken in local preview (they were
uploaded to Manus storage in a later task and are not in the repo).
"""
import re
from pathlib import Path

FILE = Path("client/src/data/company.ts")
text = FILE.read_text(encoding="utf-8")

# Manus-storage filenames (without the hash suffix) -> real filename
KNOWN = {
    "5174908402084285518": "5174908402084285518.jpg",
    "loja_nova": "foto_1.jpg",  # fachada da loja = foto_1
    "logo_leonard": None,
    "texture_emerald": None,
    "texture_charcoal": None,
}
for i in range(1, 29):
    KNOWN[f"foto_{i}"] = f"foto_{i}.jpg"

def repl(m: re.Match) -> str:
    key = m.group(1)
    base = key.rsplit("_", 1)[0]  # e.g. foto_20_465f9ec9 -> foto_20
    # strip hash suffix: pattern is <name>_<hash> where hash is hex>=8
    m2 = re.match(r"^(.+)_([0-9a-f]{8,})$", key)
    if m2:
        base = m2.group(1)
    target = KNOWN.get(base)
    if target:
        return f'"/real/{target}"'
    return m.group(0)

new_text, n = re.subn(r'"/manus-storage/([^"]+)"', repl, text)
FILE.write_text(new_text, encoding="utf-8")
print(f"rewrote {n} image refs; left as manus-storage:")
for k in set(re.findall(r'"/manus-storage/([^"]+)"', new_text)):
    print("  ", k)

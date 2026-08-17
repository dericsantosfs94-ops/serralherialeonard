from pathlib import Path

root = Path(__file__).resolve().parents[1] / "client/src/components"
files = [
    "About.tsx",
    "CategoryChapter.tsx",
    "Services.tsx",
    "Workshop.tsx",
    "InstagramSection.tsx",
    "Contact.tsx",
    "FloatingWhatsApp.tsx",
    "Footer.tsx",
    "Projects.tsx",
]
replacements = {
    'bg-[var(--charcoal)]': 'bg-[var(--background)]',
    'bg-[var(--emerald-deep)]': 'bg-[var(--paper-green)]',
    'bg-[oklch(0.1_0.03_168/0.92)]': 'bg-[var(--background)]',
    'bg-[oklch(0.16_0.04_168/0.85)]': 'bg-[var(--background)]',
    'bg-[oklch(0.16_0.01_70/0.8)]': 'bg-[var(--paper-muted)]',
    'bg-[oklch(0.16_0.006_70)]': 'bg-[var(--paper-muted)]',
    'bg-[oklch(0.22_0.008_70)]': 'bg-[var(--paper-muted)]',
    'bg-[oklch(0.24_0.008_70)]': 'bg-[var(--paper-muted)]',
    'bg-[oklch(0.26_0.008_70)]': 'bg-[var(--paper-muted)]',
    'bg-[oklch(0.13_0.035_168)]': 'bg-[var(--background)]',
    'text-[var(--cream)]': 'text-[var(--foreground)]',
    'text-[var(--gold-soft)]': 'text-[var(--emerald-deep)]',
    'text-[var(--smoke)]': 'text-[var(--muted-foreground)]',
    'text-[oklch(0.8_0.01_85)]': 'text-[oklch(0.38_0.018_150)]',
    'text-[oklch(0.82_0.01_90)]': 'text-[oklch(0.36_0.018_150)]',
    'text-[oklch(0.78_0.01_85)]': 'text-[oklch(0.4_0.018_150)]',
    'text-[oklch(0.68_0.008_80)]': 'text-[oklch(0.46_0.015_150)]',
    'text-[oklch(0.75_0.008_85)]': 'text-[oklch(0.4_0.018_150)]',
    'text-[oklch(0.55_0.006_80)]': 'text-[oklch(0.5_0.014_150)]',
    'text-[oklch(0.5_0.005_80)]': 'text-[oklch(0.42_0.018_150)]',
    'text-[oklch(0.15_0.01_70)]': 'text-[var(--foreground)]',
    'border-[var(--gold)/15%]': 'border-[var(--emerald-deep)]/15%',
    'border-[var(--gold)/12%]': 'border-[var(--emerald-deep)]/12%',
    'border-[var(--gold)/30%]': 'border-[var(--emerald-deep)]/25%',
    'border-[var(--gold)/35%]': 'border-[var(--emerald-deep)]/28%',
    'border-[var(--gold)/38%]': 'border-[var(--emerald-deep)]/28%',
    'border-[var(--gold)/40%]': 'border-[var(--emerald-deep)]/28%',
    'border-[oklch(0.72_0.11_85/0.12%)]': 'border-[var(--emerald-deep)]/12%',
    'border-[oklch(0.72_0.11_85/0.15%)]': 'border-[var(--emerald-deep)]/15%',
    'border-[oklch(0.72_0.11_85/0.25%)]': 'border-[var(--emerald-deep)]/20%',
    'border-[oklch(0.72_0.11_85/0.3)]': 'border-[var(--emerald-deep)]/22%',
    'opacity-40 bg-cover': 'opacity-[0.08] bg-cover',
    'opacity-[0.3] bg-cover': 'opacity-[0.08] bg-cover',
    'opacity-[0.35] bg-cover': 'opacity-[0.08] bg-cover',
    'opacity-80': 'opacity-55',
}

for filename in files:
    path = root / filename
    text = path.read_text()
    original = text
    for old, new in replacements.items():
        text = text.replace(old, new)
    if text != original:
        path.write_text(text)
        print(f"updated {filename}")

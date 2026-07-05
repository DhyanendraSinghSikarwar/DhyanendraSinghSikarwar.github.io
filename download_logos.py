"""
Run this script once from the portfolio-site folder to download company logos.
Usage:  python download_logos.py
"""
import urllib.request
import os

ASSETS_DIR = os.path.join(os.path.dirname(__file__), "assets")
os.makedirs(ASSETS_DIR, exist_ok=True)

logos = [
    (
        "isb.jpg",
        "https://raw.githubusercontent.com/aaronified/aaronified.github.io/main/assets/indian_school_of_business_logo.jpg",
    ),
    (
        "manit.png",
        "https://upload.wikimedia.org/wikipedia/en/b/b5/Maulana_Azad_National_Institute_of_Technology_logo.png",
    ),
    (
        "lpu.png",
        "https://upload.wikimedia.org/wikipedia/en/1/11/LPU_Logo.png",
    ),
    (
        "netlink.png",
        "https://logo.clearbit.com/netlinksoftware.com",
    ),
    # CodeNote is a small private firm — no public logo found.
    # If you have the logo file, save it manually as:  assets/codenote.png
]

headers = {"User-Agent": "Mozilla/5.0"}

for filename, url in logos:
    dest = os.path.join(ASSETS_DIR, filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
        with open(dest, "wb") as f:
            f.write(data)
        print(f"  OK  {filename}  ({len(data):,} bytes)")
    except Exception as e:
        print(f"  FAIL {filename}: {e}")

print("\nDone. Commit the assets/ folder and push to GitHub.")

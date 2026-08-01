import os
from PIL import Image

brain_dir = r"C:\Users\Usuario\.gemini\antigravity\brain\6b6bbc70-28fc-455e-9682-c68a30f5dd7e"
files = [
    "media__1785545422030.png",
    "media__1785545540353.jpg",
    "media__1785545540513.jpg",
    "media__1785545540949.jpg",
    "media__1785545540950.jpg",
    "media__1785545648991.jpg",
    "media__1785545649091.jpg",
    "media__1785545649307.jpg",
    "media__1785545649575.jpg"
]

for f in files:
    fpath = os.path.join(brain_dir, f)
    if os.path.exists(fpath):
        img = Image.open(fpath)
        print(f"{f}: size={img.size}, format={img.format}")

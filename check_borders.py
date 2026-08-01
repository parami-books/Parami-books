import os
import numpy as np
from PIL import Image

brain_dir = r"C:\Users\Usuario\.gemini\antigravity\brain\6b6bbc70-28fc-455e-9682-c68a30f5dd7e"
frames = [
    "media__1785545540353.jpg",
    "media__1785545540513.jpg",
    "media__1785545540949.jpg",
    "media__1785545540950.jpg"
]

for f in frames:
    fpath = os.path.join(brain_dir, f)
    if os.path.exists(fpath):
        img = Image.open(fpath).convert("RGB")
        arr = np.array(img)
        # Convert to grayscale
        gray = arr.mean(axis=2)
        # Find rows and columns that are relatively flat/smooth (low variance) and bright
        # Let's inspect the center column and scan outwards
        h, w = gray.shape
        center_x = w // 2
        center_y = h // 2
        
        # Scan upwards/downwards from center to find vertical boundaries
        # Look for a significant change in pixel values or gradient to detect the border
        # Or let's just print a small profile to look at it
        print(f"Profile for {f}: center pixel gray value = {gray[center_y, center_x]}")

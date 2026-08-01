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
        gray = arr.mean(axis=2)
        h, w = gray.shape
        center_x, center_y = w // 2, h // 2
        
        # Grow check vertically from center
        y_min = center_y
        while y_min > 0 and gray[y_min, center_x] > 200:
            y_min -= 1
        y_max = center_y
        while y_max < h - 1 and gray[y_max, center_x] > 200:
            y_max += 1
            
        # Grow check horizontally from center
        x_min = center_x
        while x_min > 0 and gray[center_y, x_min] > 200:
            x_min -= 1
        x_max = center_x
        while x_max < w - 1 and gray[center_y, x_max] > 200:
            x_max += 1
            
        print(f"{f}: bbox = ({x_min}, {y_min}, {x_max}, {y_max}), size = ({x_max - x_min}, {y_max - y_min})")

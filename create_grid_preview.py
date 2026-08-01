import os
from PIL import Image

brain_dir = r"C:\Users\Usuario\.gemini\antigravity\brain\6b6bbc70-28fc-455e-9682-c68a30f5dd7e"
frames = [
    "media__1785545540353.jpg",
    "media__1785545540513.jpg",
    "media__1785545540949.jpg",
    "media__1785545540950.jpg"
]

# We will create a grid of the frames with titles to see which is which
grid = Image.new("RGB", (4 * 576, 1024))
for idx, f in enumerate(frames):
    fpath = os.path.join(brain_dir, f)
    if os.path.exists(fpath):
        img = Image.open(fpath)
        grid.paste(img, (idx * 576, 0))

grid_path = os.path.join(brain_dir, "frame_grid_preview.png")
grid.save(grid_path)
print(f"Grid preview saved to: {grid_path}")

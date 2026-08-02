import os
from PIL import Image

brain_dir = r"C:\Users\Usuario\.gemini\antigravity\brain\6b6bbc70-28fc-455e-9682-c68a30f5dd7e"
logo_src = os.path.join(brain_dir, "media__1785630904106.jpg")
web_dir = r"C:\Users\Usuario\Desktop\ARCHIVO\AMAZON\LIBROS\marketing_web"
images_dir = os.path.join(web_dir, "images")

os.makedirs(images_dir, exist_ok=True)

if os.path.exists(logo_src):
    img = Image.open(logo_src)
    
    # Save the original high-resolution logo in PNG format
    logo_png_path = os.path.join(images_dir, "logo_parami_books.png")
    img.save(logo_png_path, "PNG")
    print(f"Saved brand logo to: {logo_png_path}")
    
    # Save as favicon.png (64x64)
    favicon_png_path = os.path.join(web_dir, "favicon.png")
    fav_img = img.resize((64, 64), Image.Resampling.LANCZOS)
    fav_img.save(favicon_png_path, "PNG")
    print(f"Saved favicon to: {favicon_png_path}")
else:
    print(f"Error: logo source not found at {logo_src}")

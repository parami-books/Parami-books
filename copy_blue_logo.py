import os
from PIL import Image, ImageDraw

brain_dir = r"C:\Users\Usuario\.gemini\antigravity\brain\6b6bbc70-28fc-455e-9682-c68a30f5dd7e"
logo_src = os.path.join(brain_dir, "media__1785631930091.jpg")
web_dir = r"C:\Users\Usuario\Desktop\ARCHIVO\AMAZON\LIBROS\marketing_web"
images_dir = os.path.join(web_dir, "images")

logo_dest = os.path.join(images_dir, "logo_parami_books.png")
favicon_dest = os.path.join(web_dir, "favicon.png")

if os.path.exists(logo_src):
    # 1. Load the new blue-background logo
    img = Image.open(logo_src)
    
    # 2. Save it directly to images/logo_parami_books.png (keeping the solid blue background)
    img.save(logo_dest, "PNG")
    print(f"Saved solid blue logo to: {logo_dest}")
    
    # 3. Create Google-optimized favicon sizes
    # Google guidelines specify a multiple of 48px square (e.g., 48x48, 96x96, 144x144, 192x192)
    def save_masked_fav(size, filename):
        fav_img = img.resize((size, size), Image.Resampling.LANCZOS).convert("RGBA")
        w, h = fav_img.size
        mask = Image.new("L", (w, h), 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, w, h), fill=255)
        fav_img.putalpha(mask)
        path = os.path.join(web_dir, filename)
        fav_img.save(path, "PNG")
        print(f"Saved favicon ({size}x{size}) to: {path}")

    # Standard Google search icon
    save_masked_fav(48, "favicon.png")
    # HD favicon
    save_masked_fav(96, "favicon-96x96.png")
    # Apple touch icon (180x180)
    save_masked_fav(180, "apple-touch-icon.png")
else:
    print(f"Error: logo source not found at {logo_src}")

import os
from PIL import Image, ImageDraw

web_dir = r"C:\Users\Usuario\Desktop\ARCHIVO\AMAZON\LIBROS\marketing_web"
logo_path = os.path.join(web_dir, "images", "logo_parami_books.png")

if os.path.exists(logo_path):
    img = Image.open(logo_path).convert("RGBA")
    w, h = img.size
    
    # Create a circular mask
    mask = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(mask)
    
    # We leave a tiny 2px margin to ensure we crop out any edge artifacts
    margin = 4
    draw.ellipse((margin, margin, w - margin, h - margin), fill=255)
    
    # Apply mask to image alpha channel
    img.putalpha(mask)
    
    # Overwrite the PNG logo with the circular masked one
    img.save(logo_path, "PNG")
    print(f"Successfully drew circular mask and saved to: {logo_path}")
else:
    print(f"Error: logo_parami_books.png not found at {logo_path}")

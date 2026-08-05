import os
from PIL import Image

web_dir = r"C:\Users\Usuario\Desktop\ARCHIVO\AMAZON\LIBROS\marketing_web"
logo_src = os.path.join(web_dir, "images", "logo_parami_books.png")
ico_dest = os.path.join(web_dir, "favicon.ico")

if os.path.exists(logo_src):
    img = Image.open(logo_src)
    
    # Standard ICO can pack multiple resolutions(16x16, 32x32, 48x48)
    # Convert image to RGBA (ICO needs alpha channel to feel clean)
    img_rgba = img.convert("RGBA")
    
    # Save as multi-size ICO
    img_rgba.save(ico_dest, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"Successfully generated favicon.ico at: {ico_dest}")
else:
    print(f"Error: logo_parami_books.png not found at {logo_src}")

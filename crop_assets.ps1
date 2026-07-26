Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Usuario\.gemini\antigravity\brain\ce24af4e-8ea8-40e2-8125-e88f4bcd2903\media__1785077446085.png"
$webDir = "C:\Users\Usuario\Desktop\ARCHIVO\AMAZON\LIBROS\marketing_web"

$img = [System.Drawing.Image]::FromFile($srcPath)

# 1. Recortar logotipo circular de Parami
# y=20 a y=260 es el diámetro, x=18 a x=258
$rectLogo = New-Object System.Drawing.Rectangle(15, 20, 240, 240)
$bmpLogo = New-Object System.Drawing.Bitmap($rectLogo.Width, $rectLogo.Height)
$graph = [System.Drawing.Graphics]::FromImage($bmpLogo)
$graph.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $rectLogo.Width, $rectLogo.Height)), $rectLogo, [System.Drawing.GraphicsUnit]::Pixel)
$bmpLogo.Save("$webDir\logo_parami.png", [System.Drawing.Imaging.ImageFormat]::Png)
$graph.Dispose()
$bmpLogo.Dispose()

# 2. Recortar título "PARAMI BOOKS" en 3D
$rectTitle = New-Object System.Drawing.Rectangle(258, 25, 492, 95)
$bmpTitle = New-Object System.Drawing.Bitmap($rectTitle.Width, $rectTitle.Height)
$graph = [System.Drawing.Graphics]::FromImage($bmpTitle)
$graph.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $rectTitle.Width, $rectTitle.Height)), $rectTitle, [System.Drawing.GraphicsUnit]::Pixel)
$bmpTitle.Save("$webDir\title_parami.png", [System.Drawing.Imaging.ImageFormat]::Png)
$graph.Dispose()
$bmpTitle.Dispose()

# 3. Recortar botón de TikTok 3D
$rectTiktok = New-Object System.Drawing.Rectangle(868, 145, 94, 94)
$bmpTiktok = New-Object System.Drawing.Bitmap($rectTiktok.Width, $rectTiktok.Height)
$graph = [System.Drawing.Graphics]::FromImage($bmpTiktok)
$graph.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $rectTiktok.Width, $rectTiktok.Height)), $rectTiktok, [System.Drawing.GraphicsUnit]::Pixel)
$bmpTiktok.Save("$webDir\tiktok_btn.png", [System.Drawing.Imaging.ImageFormat]::Png)
$graph.Dispose()
$bmpTiktok.Dispose()

$img.Dispose()
Write-Host "Recortes completados exitosamente en la carpeta de marketing_web."

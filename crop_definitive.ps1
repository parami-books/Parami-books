Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Usuario\.gemini\antigravity\brain\ce24af4e-8ea8-40e2-8125-e88f4bcd2903\media__1785077446085.png"
$webDir = "C:\Users\Usuario\Desktop\ARCHIVO\AMAZON\LIBROS\marketing_web"
$img = [System.Drawing.Image]::FromFile($srcPath)

# 1. Logo Parami animado
$rectLogo = New-Object System.Drawing.Rectangle(15, 20, 240, 245)
$bmpLogo = New-Object System.Drawing.Bitmap($rectLogo.Width, $rectLogo.Height)
$graph = [System.Drawing.Graphics]::FromImage($bmpLogo)
$graph.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $rectLogo.Width, $rectLogo.Height)), $rectLogo, [System.Drawing.GraphicsUnit]::Pixel)
$bmpLogo.Save("$webDir\logo_parami.png", [System.Drawing.Imaging.ImageFormat]::Png)
$graph.Dispose()
$bmpLogo.Dispose()

# 2. Título 3D completo y sin cortes
$rectTitle = New-Object System.Drawing.Rectangle(240, 15, 495, 110)
$bmpTitle = New-Object System.Drawing.Bitmap($rectTitle.Width, $rectTitle.Height)
$graph = [System.Drawing.Graphics]::FromImage($bmpTitle)
$graph.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $rectTitle.Width, $rectTitle.Height)), $rectTitle, [System.Drawing.GraphicsUnit]::Pixel)
$bmpTitle.Save("$webDir\title_parami.png", [System.Drawing.Imaging.ImageFormat]::Png)
$graph.Dispose()
$bmpTitle.Dispose()

# 3. Moneda TikTok 3D sin recortes
$rectTiktok = New-Object System.Drawing.Rectangle(800, 115, 135, 135)
$bmpTiktok = New-Object System.Drawing.Bitmap($rectTiktok.Width, $rectTiktok.Height)
$graph = [System.Drawing.Graphics]::FromImage($bmpTiktok)
$graph.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $rectTiktok.Width, $rectTiktok.Height)), $rectTiktok, [System.Drawing.GraphicsUnit]::Pixel)
$bmpTiktok.Save("$webDir\tiktok_btn.png", [System.Drawing.Imaging.ImageFormat]::Png)
$graph.Dispose()
$bmpTiktok.Dispose()

$img.Dispose()
Write-Host "Recortes definitivos guardados."

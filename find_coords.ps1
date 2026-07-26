Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Usuario\.gemini\antigravity\brain\ce24af4e-8ea8-40e2-8125-e88f4bcd2903\media__1785077446085.png"
$webDir = "C:\Users\Usuario\Desktop\ARCHIVO\AMAZON\LIBROS\marketing_web"
$img = [System.Drawing.Image]::FromFile($srcPath)

# Probar recortes del Título con más margen
# x=240, y=15, w=510, h=110
$rectTitle = New-Object System.Drawing.Rectangle(240, 15, 510, 110)
$bmpTitle = New-Object System.Drawing.Bitmap($rectTitle.Width, $rectTitle.Height)
$graph = [System.Drawing.Graphics]::FromImage($bmpTitle)
$graph.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $rectTitle.Width, $rectTitle.Height)), $rectTitle, [System.Drawing.GraphicsUnit]::Pixel)
$bmpTitle.Save("$webDir\test_title.png", [System.Drawing.Imaging.ImageFormat]::Png)
$graph.Dispose()
$bmpTitle.Dispose()

# Probar varios recortes del botón de TikTok
# Probamos x=840 a 860, y=120 a 140, w=110, h=110
$rectTik1 = New-Object System.Drawing.Rectangle(840, 130, 110, 110)
$bmpTik1 = New-Object System.Drawing.Bitmap($rectTik1.Width, $rectTik1.Height)
$graph = [System.Drawing.Graphics]::FromImage($bmpTik1)
$graph.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $rectTik1.Width, $rectTik1.Height)), $rectTik1, [System.Drawing.GraphicsUnit]::Pixel)
$bmpTik1.Save("$webDir\test_tiktok.png", [System.Drawing.Imaging.ImageFormat]::Png)
$graph.Dispose()
$bmpTik1.Dispose()

$img.Dispose()
Write-Host "Pruebas de recortes listas."

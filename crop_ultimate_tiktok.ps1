Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Usuario\.gemini\antigravity\brain\ce24af4e-8ea8-40e2-8125-e88f4bcd2903\media__1785077446085.png"
$webDir = "C:\Users\Usuario\Desktop\ARCHIVO\AMAZON\LIBROS\marketing_web"
$img = [System.Drawing.Image]::FromFile($srcPath)

# Recorte ultra de TikTok: centrado horizontalmente en la moneda (aprox x=855)
# x=798 a x=912, ancho=114, alto=114
$rectTiktok = New-Object System.Drawing.Rectangle(798, 120, 114, 114)
$bmpTiktok = New-Object System.Drawing.Bitmap($rectTiktok.Width, $rectTiktok.Height)
$graph = [System.Drawing.Graphics]::FromImage($bmpTiktok)
$graph.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $rectTiktok.Width, $rectTiktok.Height)), $rectTiktok, [System.Drawing.GraphicsUnit]::Pixel)
$bmpTiktok.Save("$webDir\tiktok_btn.png", [System.Drawing.Imaging.ImageFormat]::Png)
$graph.Dispose()
$bmpTiktok.Dispose()

$img.Dispose()
Write-Host "Recorte de TikTok ultra completado."

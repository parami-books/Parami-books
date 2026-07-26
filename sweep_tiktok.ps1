Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Usuario\.gemini\antigravity\brain\ce24af4e-8ea8-40e2-8125-e88f4bcd2903\media__1785077446085.png"
$webDir = "C:\Users\Usuario\Desktop\ARCHIVO\AMAZON\LIBROS\marketing_web"
$img = [System.Drawing.Image]::FromFile($srcPath)

for ($x = 800; $x -le 850; $x += 10) {
    # Usar un tamaño de 140x140 para asegurarnos de capturar todo el botón de TikTok (el círculo mide aprox 120px)
    $rect = New-Object System.Drawing.Rectangle($x, 115, 140, 140)
    $bmp = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
    $graph = [System.Drawing.Graphics]::FromImage($bmp)
    $graph.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $rect.Width, $rect.Height)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $bmp.Save("$webDir\sweep_tiktok_$x.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $graph.Dispose()
    $bmp.Dispose()
}

$img.Dispose()
Write-Host "Barrido de TikTok completado."

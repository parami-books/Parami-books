# Script de despliegue interactivo para Parami Books a GitHub Pages
Clear-Host
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "    DESPLIEGUE A GITHUB PAGES - PARAMI BOOKS      " -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# Buscar URL del repositorio
Write-Host "Por favor, introduce la URL del repositorio que has creado en GitHub." -ForegroundColor White
Write-Host "(Ejemplo: https://github.com/miusuario/parami-books)" -ForegroundColor Gray
$repoUrl = Read-Host "URL de tu repositorio"

if ([string]::IsNullOrWhitespace($repoUrl)) {
    Write-Host "Error: La URL no puede estar vacía. Cancelando." -ForegroundColor Red
    Start-Sleep -Seconds 3
    exit
}

# Agregar Git a la ruta temporal de ejecución
$env:PATH += ";C:\Program Files\Git\cmd"

# Limpiar remotos anteriores si los hubiera
git remote remove origin 2>$null

# Configurar el origen y la rama principal
git remote add origin $repoUrl
git branch -M main

Write-Host ""
Write-Host "Sincronizando y subiendo archivos..." -ForegroundColor Yellow
Write-Host "Nota: Se abrirá una pequeña ventana en tu navegador o sistema solicitando que confirmes el acceso a tu cuenta de GitHub. Haz clic en 'Authorize/Iniciar Sesión'." -ForegroundColor Gray
Write-Host ""

# Forzar la subida a la rama principal
git push -u origin main --force

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "==================================================" -ForegroundColor Green
    Write-Host "       ¡ARCHIVOS SUBIDOS CORRECTAMENTE A GITHUB!  " -ForegroundColor Green
    Write-Host "==================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "PASO FINAL REQUERIDO:" -ForegroundColor Yellow
    Write-Host "1. Abre tu navegador y ve a tu repositorio de GitHub."
    Write-Host "2. Haz clic en 'Settings' (Configuración) arriba a la derecha."
    Write-Host "3. En el menú de la izquierda, entra a 'Pages'."
    Write-Host "4. Bajo 'Build and deployment' -> 'Branch', cambia 'None' por 'main' y pulsa 'Save'."
    Write-Host ""
    Write-Host "¡En 1 minuto tu web de Parami Books estará en línea!" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "Ocurrió un error al subir los archivos. Verifica tu conexión, que hayas creado el repositorio en GitHub y que hayas aceptado los permisos en la ventana flotante." -ForegroundColor Red
}

Write-Host ""
Read-Host "Presiona Enter para cerrar este asistente..."

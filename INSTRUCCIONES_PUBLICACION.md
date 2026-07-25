# Cómo Publicar tu Web de Parami Books en Internet (Coste 0€)

Dado que tu ordenador no cuenta con herramientas de consola instaladas (como Git o Node.js), la forma más rápida, segura y gratuita de subir tu web a internet para que sea accesible desde tu perfil de TikTok es utilizando los asistentes web (drag-and-drop) de dos plataformas líderes.

Elige **uno** de los siguientes dos métodos:

---

## Método A: Netlify Drop (El más rápido - 1 Minuto)

Netlify permite subir páginas estáticas simplemente arrastrando la carpeta desde tu explorador de archivos.

### Pasos:
1. Abre tu navegador de internet y entra a la web de **[Netlify Drop](https://app.netlify.com/drop)**.
2. Abre el explorador de archivos de Windows y navega hasta la carpeta:
   `C:\Users\Usuario\Desktop\ARCHIVO\AMAZON\LIBROS\`
3. **Arrastra la carpeta completa `marketing_web`** y suéltala en el recuadro que indica la página de Netlify.
4. En cuestión de segundos, la web la procesará y te dará un enlace público temporal (por ejemplo: `https://beautiful-cupcake-12345.netlify.app`).
5. **Recomendado:** Registra una cuenta gratuita en Netlify para poder cambiar el nombre del enlace por el tuyo propio (por ejemplo: `https://paramibooks.netlify.app`) para que no expire.

---

## Método B: GitHub Pages (El más profesional - 2 Minutos)

Es el estándar de la industria para alojar webs de marca directamente en tu propia cuenta.

### Pasos:
1. Entra en **[GitHub](https://github.com/)** y créate una cuenta gratuita (si ya tienes una, inicia sesión).
2. Haz clic en el botón verde **"New"** (o "New repository") arriba a la izquierda.
3. Configura el repositorio:
   * **Repository name:** Ponle `parami-books` (o el nombre de tu marca).
   * **Public:** Asegúrate de que esté marcado como **Public**.
   * Deja el resto de casillas sin marcar y dale al botón de abajo: **"Create repository"**.
4. En la pantalla que aparece, haz clic en el enlace azul que dice: **"uploading an existing file"** (subir un archivo existente).
5. Selecciona todos los archivos que hay **dentro** de tu carpeta `marketing_web`:
   * `index.html`
   * `style.css`
   * `script.js`
   * `config.js`
   * *Y cualquier imagen de portada que uses si la copiaste ahí.*
6. **Arrastra todos esos archivos** a la ventana del navegador. Verás cómo se listan para subirse.
7. Haz clic en el botón verde de abajo: **"Commit changes"** (Guardar cambios).
8. **Activar la web:**
   * Dentro de tu repositorio en GitHub, ve a la pestaña superior derecha que dice **Settings** (Configuración).
   * En el menú izquierdo, haz clic en **Pages**.
   * En la sección "Build and deployment" -> "Branch", cambia `None` por **`main`** (o `master`) y haz clic en **Save** (Guardar).
9. ¡Listo! Espera 1 minuto, refresca la página de Settings y arriba te aparecerá un recuadro verde con tu enlace público oficial:
   `https://tu-usuario-github.io/parami-books/`

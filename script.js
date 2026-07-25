// Variable de Estado Global para el Idioma Seleccionado (es / en)
let currentLanguage = "es";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Detectar el idioma inicial (localStorage o Navegador)
  const savedLang = localStorage.getItem("preferredLanguage");
  if (savedLang === "es" || savedLang === "en") {
    currentLanguage = savedLang;
  } else {
    const browserLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
    currentLanguage = browserLang.startsWith("es") ? "es" : "en";
  }

  // 2. Aplicar el idioma y configurar la UI
  updateLanguageUIAndRender();
});

// Mensajes de traducción del portal
const TRANSLATIONS = {
  es: {
    redirecting: "Redirigiendo a",
    buyButton: "VER EN AMAZON",
    loading: "Cargando catálogo...",
    copyright: "Todos los derechos reservados."
  },
  en: {
    redirecting: "Redirecting to",
    buyButton: "VIEW ON AMAZON",
    loading: "Loading catalog...",
    copyright: "All rights reserved."
  }
};

// Mapeo de sufijos de tiendas a nombres completos y banderas
const MARKET_INFO = {
  es: { name: "Amazon España", flag: "🇪🇸", domain: "amazon.es" },
  mx: { name: "Amazon México", flag: "🇲🇽", domain: "amazon.com.mx" },
  com: { name: "Amazon Internacional", flag: "🇺🇸", domain: "amazon.com" },
  ca: { name: "Amazon Canadá", flag: "🇨🇦", domain: "amazon.ca" },
  uk: { name: "Amazon Reino Unido", flag: "🇬🇧", domain: "amazon.co.uk" },
  de: { name: "Amazon Alemania", flag: "🇩🇪", domain: "amazon.de" },
  fr: { name: "Amazon Francia", flag: "🇫🇷", domain: "amazon.fr" },
  it: { name: "Amazon Italia", flag: "🇮🇹", domain: "amazon.it" }
};

/**
 * Cambia el idioma actual del portal y actualiza la página completa
 */
function changeLanguage(lang) {
  if (lang !== "es" && lang !== "en") return;
  currentLanguage = lang;
  localStorage.setItem("preferredLanguage", lang);
  updateLanguageUIAndRender();
}

/**
 * Actualiza todos los textos estáticos del portal y vuelve a renderizar las tarjetas de libros
 */
function updateLanguageUIAndRender() {
  // Actualizar clases activas en los botones de selección
  const btnEs = document.getElementById("btnLangEs");
  const btnEn = document.getElementById("btnLangEn");
  
  if (btnEs && btnEn) {
    if (currentLanguage === "es") {
      btnEs.classList.add("active");
      btnEn.classList.remove("active");
    } else {
      btnEn.classList.add("active");
      btnEs.classList.remove("active");
    }
  }

  // Actualizar Título y Tagline dinámicamente
  document.title = CONFIG.brandName;
  const brandNameEls = document.querySelectorAll(".js-brand-name");
  brandNameEls.forEach(el => el.textContent = CONFIG.brandName);
  
  const brandTaglineEl = document.querySelector(".js-brand-tagline");
  if (brandTaglineEl) {
    brandTaglineEl.textContent = CONFIG.brandTagline[currentLanguage] || CONFIG.brandTagline.es;
  }

  // Configurar enlace de TikTok
  const tiktokLinkEl = document.querySelector(".js-tiktok-link");
  if (tiktokLinkEl && CONFIG.socialLinks.tiktok) {
    tiktokLinkEl.href = CONFIG.socialLinks.tiktok;
  } else if (tiktokLinkEl) {
    tiktokLinkEl.style.display = "none";
  }

  // Detección del mercado geográfico del usuario (para saber si enviarle a amazon.es, amazon.com.mx, etc.)
  const userMarket = detectAmazonMarketplace();
  
  // Renderizar indicador de país
  renderCountryBanner(userMarket);
  
  // Renderizar catálogo con los libros traducidos y portadas en base al idioma seleccionado
  renderCatalog(userMarket);
}

/**
 * Detecta el mercado de Amazon idóneo basándose en el idioma/región del navegador del usuario.
 */
function detectAmazonMarketplace() {
  const languages = navigator.languages || [navigator.language || ""];
  const langString = languages.join(",").toLowerCase();

  if (langString.includes("-mx") || langString.includes("es-mx")) return "mx";
  if (langString.includes("-es") || langString.includes("es-es")) return "es";
  
  if (langString.includes("es")) {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz.includes("America/Mexico") || tz.includes("America/Monterrey") || tz.includes("America/Tijuana")) {
      return "mx";
    }
    if (tz.includes("America/")) {
      return "com"; // Amazon USA para Latinoamérica
    }
    return "es"; // Amazon España para Europa
  }

  if (langString.includes("-ca") || langString.includes("ca-")) return "ca";
  if (langString.includes("-gb") || langString.includes("en-gb") || langString.includes("en-ie")) return "uk";
  if (langString.includes("de")) return "de";
  if (langString.includes("fr")) return "fr";
  if (langString.includes("it")) return "it";

  return "com";
}

/**
 * Muestra visualmente en qué tienda está comprando el cliente
 */
function renderCountryBanner(market) {
  const bannerEl = document.getElementById("countryBanner");
  if (!bannerEl) return;

  const info = MARKET_INFO[market] || MARKET_INFO.com;
  const labelPre = TRANSLATIONS[currentLanguage].redirecting;
  bannerEl.innerHTML = `
    <span class="flag">${info.flag}</span>
    <span>${labelPre} <strong>${info.name}</strong></span>
  `;
}

/**
 * Renderiza el listado de libros con el título, descripción y portada correspondiente a la edición del idioma
 */
function renderCatalog(market) {
  const catalogEl = document.getElementById("bookCatalog");
  if (!catalogEl) return;

  catalogEl.innerHTML = ""; // Limpiar antes de rellenar

  CONFIG.books.forEach(book => {
    // Obtener los detalles traducidos del libro correspondientes al idioma seleccionado
    const details = book.languages[currentLanguage] || book.languages.es;
    const asin = details.asin;

    // Construir el enlace a Amazon de forma dinámica usando el dominio de la tienda y el ASIN de la edición seleccionada
    let targetLink = "#";
    if (asin) {
      const info = MARKET_INFO[market] || MARKET_INFO.com;
      targetLink = `https://www.${info.domain}/dp/${asin}`;
    }

    // Estructura HTML de la Card del libro (Personalizada por ID del libro para aplicar fondos dinámicos en CSS)
    const card = document.createElement("div");
    card.className = `book-card book-card-${book.id}`;
    card.id = `card-${book.id}`;
    
    card.innerHTML = `
      <div class="book-cover-container">
        <img class="book-cover-img" src="https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg" alt="Portada de ${details.title}" onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=300&auto=format&fit=crop'">
      </div>
      <div class="book-details">
        <h2 class="book-title">${details.title}</h2>
        <div class="book-subtitle">${details.subtitle}</div>
        
        <!-- Adorno divisor dorado interior -->
        <div class="card-separator">
          <svg viewBox="0 0 100 6" class="card-ornament-svg">
            <path d="M0,3 L42,3 C43.2,3 44.5,2 45,1 L47.5,3 L49.5,1 L52,3 C52.5,2 53.8,3 55,3 L100,3" stroke="url(#goldGrad)" stroke-width="0.8" fill="none"/>
            <polygon points="49.5,1 51,2.5 49.5,4 48,2.5" fill="url(#goldGrad)"/>
          </svg>
        </div>

        <p class="book-desc">${details.description}</p>
        
        <a href="${targetLink}" target="_blank" rel="noopener noreferrer" class="amazon-btn">
          <svg class="btn-amazon-logo" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.9,11.3c0-0.1,0-0.3,0-0.4c0-2.4-1.2-3.8-3.9-3.8c-2.5,0-4,1.4-4,3.4c0,1.9,1.3,2.8,3,2.8c1.3,0,2.3-0.5,2.9-1.2C14,12,14.1,12,14,12.1c-0.2,0.3-0.7,0.9-0.7,0.9c-0.1,0.1-0.2,0.1-0.3,0c-0.4,0.3-1,0.6-1.7,0.6c-1,0-1.8-0.6-1.8-1.8c0-1.4,1.2-1.9,3.1-1.9c0.7,0,1.4,0.1,1.9,0.2C14.7,11.3,14.7,11.3,15.9,11.3z M18.4,18.4c-3.1,2.4-7.9,3.1-11.8,2c-0.4-0.1-0.6,0.3-0.2,0.6c3.4,2.2,9.3,2.2,12.3-0.6C19.1,20.1,18.8,18.1,18.4,18.4z M19.4,20c0.3-0.2,0.3-0.5,0.1-0.7c-0.6-0.7-1.8-2.6-1.8-2.6s-0.1-0.1-0.2,0l-0.3,0.3c-0.1,0.1-0.1,0.2,0,0.3c0,0,1.2,1.8,1.6,2.5C19,20.1,19.2,20.1,19.4,20z"/>
          </svg>
          ${TRANSLATIONS[currentLanguage].buyButton}
        </a>
      </div>
      
      <!-- Ilustración lineal de fondo (marca de agua dorada) -->
      <div class="card-illustration-container">
        ${getCardIllustration(book.id)}
      </div>
    `;

    catalogEl.appendChild(card);
  });
}

/**
 * Devuelve la ilustración vectorial (SVG) estilizada para cada libro
 */
function getCardIllustration(bookId) {
  if (bookId === "mandalas-flowers") {
    return `
    <svg class="card-illustration" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="url(#goldGrad)" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" opacity="0.45">
        <!-- Ramillete de flores estilizado -->
        <path d="M40,110 C43,85 43,70 33,52" />
        <path d="M50,110 C50,80 50,60 50,42" />
        <path d="M60,110 C57,85 57,75 67,57" />
        
        <!-- Flor izquierda -->
        <circle cx="33" cy="45" r="7" />
        <circle cx="33" cy="45" r="2" fill="url(#goldGrad)" />
        <path d="M33,35 C36,35 38,38 33,45 C28,38 30,35 33,35 Z" />
        <path d="M33,55 C36,55 38,52 33,45 C28,52 30,55 33,55 Z" />
        
        <!-- Flor central -->
        <circle cx="50" cy="32" r="9" />
        <circle cx="50" cy="32" r="3" fill="url(#goldGrad)" />
        <path d="M50,20 C54,20 56,24 50,32 C44,24 46,20 50,20 Z" />
        <path d="M50,44 C54,44 56,40 50,32 C44,40 46,44 50,44 Z" />
        <path d="M38,32 C38,28 42,26 50,32 C42,38 38,36 38,32 Z" />
        <path d="M62,32 C62,28 58,26 50,32 C58,38 62,36 62,32 Z" />
        
        <!-- Flor derecha -->
        <circle cx="67" cy="50" r="7" />
        <circle cx="67" cy="50" r="2" fill="url(#goldGrad)" />
        <path d="M67,40 C70,40 72,43 67,50 C62,43 64,40 67,40 Z" />
        <path d="M67,60 C70,60 72,57 67,50 C62,57 64,60 67,60 Z" />
        
        <!-- Hojas -->
        <path d="M42,90 C32,85 30,76 30,76 C30,76 38,79 45,85" />
        <path d="M58,85 C68,80 70,71 70,71 C70,71 62,74 55,80" />
      </g>
    </svg>`;
  } else if (bookId === "smiling-animals") {
    return `
    <svg class="card-illustration" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="url(#goldGrad)" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" opacity="0.45">
        <!-- Silueta de perrito feliz sentadita -->
        <path d="M32,45 C32,32 45,25 50,25 C55,25 68,32 68,45 C68,52 62,58 50,58 C38,58 32,52 32,45 Z" />
        <path d="M32,35 C26,36 21,43 24,53 C27,62 33,56 33,50" /> <!-- Oreja izquierda -->
        <path d="M68,35 C74,36 79,43 76,53 C73,62 67,56 67,50" /> <!-- Oreja derecha -->
        
        <!-- Ojos, hocico y sonrisa -->
        <circle cx="43" cy="42" r="1.5" fill="url(#goldGrad)" />
        <circle cx="57" cy="42" r="1.5" fill="url(#goldGrad)" />
        <path d="M48,48 L52,48 L50,51 Z" fill="url(#goldGrad)" /> 
        <path d="M47,53 Q50,55 53,53" /> 
        
        <!-- Cuerpo, patitas delanteras y traseras -->
        <path d="M38,58 C35,68 32,80 32,95 C32,100 37,102 43,102 C47,102 47,97 50,97 C53,97 53,102 57,102 C63,102 68,100 68,95 C68,80 65,68 62,58" />
        <path d="M45,75 L45,96" />
        <path d="M55,75 L55,96" />
        
        <!-- Cola -->
        <path d="M66,88 C76,86 82,75 84,80 C86,85 76,94 66,93" />
      </g>
    </svg>`;
  }
  return "";
}

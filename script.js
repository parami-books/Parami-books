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
    buyButtonCompact: "VER AMZN",
    loading: "Cargando catálogo...",
    copyright: "Todos los derechos reservados."
  },
  en: {
    redirecting: "Redirecting to",
    buyButton: "VIEW ON AMAZON",
    buyButtonCompact: "BUY AMZN",
    loading: "Loading catalog...",
    copyright: "All rights reserved."
  }
};

// Mapeo de tiendas geográficas de Amazon
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
 * Devuelve el diseño circular SVG para la bandera española (ES)
 */
function getEsFlagSvg() {
  return `
  <svg viewBox="0 0 100 100" class="flag-svg-icon" style="width: 14px; height: 14px; border-radius: 50%; overflow: hidden; display: inline-block; vertical-align: middle; border: 1px solid rgba(255,255,255,0.3);">
    <rect width="100" height="25" fill="#AA151B" />
    <rect y="25" width="100" height="50" fill="#F1BF00" />
    <rect y="75" width="100" height="25" fill="#AA151B" />
  </svg>
  `;
}

/**
 * Devuelve el diseño circular SVG bicultural para en inglés (Mitad USA - Mitad UK)
 */
function getEnFlagSvg() {
  return `
  <svg viewBox="0 0 100 100" class="flag-svg-icon" style="width: 14px; height: 14px; border-radius: 50%; overflow: hidden; display: inline-block; vertical-align: middle; border: 1px solid rgba(255,255,255,0.3);">
    <!-- Mitad Izquierda: USA stars & stripes -->
    <g>
      <rect x="0" y="0" width="50" height="100" fill="#FFFFFF" />
      <rect x="0" y="0" width="50" height="7.7" fill="#B22234" />
      <rect x="0" y="15.4" width="50" height="7.7" fill="#B22234" />
      <rect x="0" y="30.8" width="50" height="7.7" fill="#B22234" />
      <rect x="0" y="46.2" width="50" height="7.7" fill="#B22234" />
      <rect x="0" y="61.6" width="50" height="7.7" fill="#B22234" />
      <rect x="0" y="77" width="50" height="7.7" fill="#B22234" />
      <rect x="0" y="92.3" width="50" height="7.7" fill="#B22234" />
      <rect x="0" y="0" width="26" height="53.8" fill="#3C3B6E" />
      <circle cx="6" cy="10" r="1.2" fill="#FFFFFF" />
      <circle cx="20" cy="10" r="1.2" fill="#FFFFFF" />
      <circle cx="13" cy="20" r="1.2" fill="#FFFFFF" />
      <circle cx="6" cy="30" r="1.2" fill="#FFFFFF" />
      <circle cx="20" cy="30" r="1.2" fill="#FFFFFF" />
      <circle cx="13" cy="40" r="1.2" fill="#FFFFFF" />
    </g>
    <!-- Mitad Derecha: UK Union Jack -->
    <g>
      <rect x="50" y="0" width="50" height="100" fill="#00247D" />
      <!-- Cruz diagonal blanca -->
      <path d="M50,0 L100,100 M100,0 L50,100" stroke="#FFFFFF" stroke-width="8" />
      <!-- Cruz diagonal roja -->
      <path d="M50,0 L100,100 M100,0 L50,100" stroke="#CF142B" stroke-width="3" />
      <!-- Cruz recta blanca -->
      <rect x="70" y="0" width="10" height="100" fill="#FFFFFF" />
      <rect x="50" y="45" width="50" height="10" fill="#FFFFFF" />
      <!-- Cruz recta roja -->
      <rect x="72" y="0" width="6" height="100" fill="#CF142B" />
      <rect x="50" y="47" width="50" height="6" fill="#CF142B" />
    </g>
  </svg>
  `;
}

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
  // Configurar las banderas vectoriales circulares personalizadas
  const flagEsEl = document.getElementById("flagEs");
  const flagEnEl = document.getElementById("flagEn");
  if (flagEsEl) flagEsEl.innerHTML = getEsFlagSvg();
  if (flagEnEl) flagEnEl.innerHTML = getEnFlagSvg();

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
  
  // Renderizar catálogo filtrado
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
 * Renderiza el listado de libros con el título, descripción y portada correspondiente.
 * FILTRA SOLO los libros que están disponibles en el idioma seleccionado.
 */
function renderCatalog(market) {
  const catalogEl = document.getElementById("bookCatalog");
  if (!catalogEl) return;

  catalogEl.innerHTML = ""; // Limpiar antes de rellenar

  // Filtrar libros que admitan el idioma actual (ej. Mandalas en es/en, Smiling Animals solo en en)
  const availableBooks = CONFIG.books.filter(book => book.languages[currentLanguage]);

  availableBooks.forEach(book => {
    const details = book.languages[currentLanguage];
    const asin = details.asin;

    // Enlace dinámico según marketplace de Amazon y ASIN local
    let targetLink = "#";
    if (asin) {
      const info = MARKET_INFO[market] || MARKET_INFO.com;
      targetLink = `https://www.${info.domain}/dp/${asin}`;
    }

    // Estructura HTML vertical y adaptada a la cuadrícula de 3 columnas
    const card = document.createElement("div");
    card.className = `book-card book-card-${book.id}`;
    card.id = `card-${book.id}`;
    
    card.innerHTML = `
      <div class="book-cover-container">
        <img class="book-cover-img" src="https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg" alt="Portada de ${details.title}" onerror="this.style.opacity=0.3">
      </div>
      <div class="book-details">
        <h2 class="book-title">${details.title}</h2>
        <div class="book-subtitle">${details.subtitle}</div>
        <p class="book-desc">${details.description}</p>
        
        <a href="${targetLink}" target="_blank" rel="noopener noreferrer" class="amazon-btn">
          <svg class="btn-amazon-logo" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.9,11.3c0-0.1,0-0.3,0-0.4c0-2.4-1.2-3.8-3.9-3.8c-2.5,0-4,1.4-4,3.4c0,1.9,1.3,2.8,3,2.8c1.3,0,2.3-0.5,2.9-1.2C14,12,14.1,12,14,12.1c-0.2,0.3-0.7,0.9-0.7,0.9c-0.1,0.1-0.2,0.1-0.3,0c-0.4,0.3-1,0.6-1.7,0.6c-1,0-1.8-0.6-1.8-1.8c0-1.4,1.2-1.9,3.1-1.9c0.7,0,1.4,0.1,1.9,0.2C14.7,11.3,14.7,11.3,15.9,11.3z M18.4,18.4c-3.1,2.4-7.9,3.1-11.8,2c-0.4-0.1-0.6,0.3-0.2,0.6c3.4,2.2,9.3,2.2,12.3-0.6C19.1,20.1,18.8,18.1,18.4,18.4z M19.4,20c0.3-0.2,0.3-0.5,0.1-0.7c-0.6-0.7-1.8-2.6-1.8-2.6s-0.1-0.1-0.2,0l-0.3,0.3c-0.1,0.1-0.1,0.2,0,0.3c0,0,1.2,1.8,1.6,2.5C19,20.1,19.2,20.1,19.4,20z"/>
          </svg>
          <span class="btn-purchase-text">${TRANSLATIONS[currentLanguage].buyButtonCompact}</span>
        </a>
      </div>
    `;

    catalogEl.appendChild(card);
  });
}

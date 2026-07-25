document.addEventListener("DOMContentLoaded", () => {
  // Inicializar marca y textos generales
  document.title = CONFIG.brandName;
  const brandNameEls = document.querySelectorAll(".js-brand-name");
  brandNameEls.forEach(el => el.textContent = CONFIG.brandName);
  
  const brandTaglineEl = document.querySelector(".js-brand-tagline");
  if (brandTaglineEl) brandTaglineEl.textContent = CONFIG.brandTagline;

  // Configurar enlace de TikTok
  const tiktokLinkEl = document.querySelector(".js-tiktok-link");
  if (tiktokLinkEl && CONFIG.socialLinks.tiktok) {
    tiktokLinkEl.href = CONFIG.socialLinks.tiktok;
  } else if (tiktokLinkEl) {
    tiktokLinkEl.style.display = "none";
  }

  // Configurar enlace de Instagram
  const instaLinkEl = document.querySelector(".js-insta-link");
  if (instaLinkEl && CONFIG.socialLinks.instagram) {
    instaLinkEl.href = CONFIG.socialLinks.instagram;
  } else if (instaLinkEl) {
    instaLinkEl.style.display = "none";
  }

  // 1. Detección Inteligente del Mercado de Amazon (País)
  const userMarket = detectAmazonMarketplayce();
  
  // 2. Renderizar indicator de país
  renderCountryBanner(userMarket);
  
  // 3. Renderizar catálogo de libros con sus enlaces correspondientes
  renderCatalog(userMarket);
});

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
 * Detecta el mercado de Amazon idóneo basándose en el idioma/región del navegador del usuario.
 */
function detectAmazonMarketplayce() {
  const languages = navigator.languages || [navigator.language || ""];
  
  // Unimos todo en un string para buscar coincidencias fácilmente
  const langString = languages.join(",").toLowerCase();

  // Mapear por prioridad
  if (langString.includes("-mx") || langString.includes("es-mx")) return "mx";
  if (langString.includes("-es") || langString.includes("es-es")) return "es";
  
  // Si no es específico pero es español, miramos si podemos discernir. 
  // Por defecto derivamos el español genérico a "es" o "mx" dependiendo de la zona horaria del usuario.
  if (langString.includes("es")) {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    // Zonas horarias de América Latina usuales para redirección a Amazon más cercana (MX o USA)
    if (tz.includes("America/Mexico") || tz.includes("America/Monterrey") || tz.includes("America/Tijuana")) {
      return "mx";
    }
    if (tz.includes("America/")) {
      // Para Sudamérica/Centroamérica que no tienen tienda propia, Amazon.com (USA) suele ser más idóneo por costo de envío
      return "com";
    }
    return "es"; // Por defecto para España/Europa
  }

  // Idiomas específicos europeos/norteamericanos
  if (langString.includes("-ca") || langString.includes("ca-")) return "ca";
  if (langString.includes("-gb") || langString.includes("en-gb") || langString.includes("en-ie")) return "uk";
  if (langString.includes("de")) return "de";
  if (langString.includes("fr")) return "fr";
  if (langString.includes("it")) return "it";

  // Relevancia por defecto
  return CONFIG.defaultMarketplace || "com";
}

/**
 * Muestra visualmente en qué tienda está comprando el cliente
 */
function renderCountryBanner(market) {
  const bannerEl = document.getElementById("countryBanner");
  if (!bannerEl) return;

  const info = MARKET_INFO[market] || MARKET_INFO.com;
  bannerEl.innerHTML = `
    <span class="flag">${info.flag}</span>
    <span>Redirigiendo a <strong>${info.name}</strong></span>
  `;
}

/**
 * Renderiza el listado de libros con el enlace geolocalizado correspondiente
 */
function renderCatalog(market) {
  const catalogEl = document.getElementById("bookCatalog");
  if (!catalogEl) return;

  catalogEl.innerHTML = ""; // Limpiar placeholder

  CONFIG.books.forEach(book => {
    // Resolver el enlace correcto de Amazon combinando el dominio regional con el ASIN
    let targetLink = "#";
    if (book.asin) {
      const info = MARKET_INFO[market] || MARKET_INFO.com;
      targetLink = `https://www.${info.domain}/dp/${book.asin}`;
    }


    // Estructura HTML de la Card del libro
    const card = document.createElement("div");
    card.className = "book-card";
    
    card.innerHTML = `
      <div class="book-cover-container">
        <img class="book-cover-img" src="${book.coverImage}" alt="Portada de ${book.title}" onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=300&auto=format&fit=crop'">
      </div>
      <div class="book-details">
        <h2 class="book-title">${book.title}</h2>
        <div class="book-subtitle">${book.subtitle}</div>
        <p class="book-desc">${book.description}</p>
        <a href="${targetLink}" target="_blank" rel="noopener noreferrer" class="amazon-btn">
          <svg viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.36 15.5c-.88-.47-1.74-.75-2.61-.75-1.12 0-1.85.5-1.85 1.25 0 .61.42 1 1.25 1 .91 0 1.77-.47 2.45-1v-.5zm1.53.51c-.69 1.13-1.92 1.83-3.21 1.83-2.09 0-3.32-1.32-3.32-3.08 0-1.91 1.57-3.03 4.22-3.03h2.31v-.64c0-1.18-.58-1.86-1.95-1.86-.96 0-1.99.37-2.73.91l-.64-1.18c.96-.75 2.37-1.16 3.63-1.16 2.39 0 3.73 1.25 3.73 3.49v4.54c0 1.23.46 1.8 1.09 1.8.29 0 .54-.08.77-.2l.46 1.18c-.37.31-1.02.49-1.79.49-.96 0-1.42-.51-1.42-1.37v-.01z"/>
          </svg>
          Ver en Amazon
        </a>
      </div>
    `;

    catalogEl.appendChild(card);
  });
}

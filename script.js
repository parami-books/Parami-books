// Variable de Estado Global para el Idioma Seleccionado (es / en)
let currentLanguage = "es";

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLanguage");
  if (savedLang === "es" || savedLang === "en") {
    currentLanguage = savedLang;
  } else {
    const browserLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
    if (browserLang.startsWith("es")) {
      currentLanguage = "es";
    } else if (browserLang.startsWith("en")) {
      currentLanguage = "en";
    } else {
      // Idioma de navegador no reconocido (fr, de, etc.):
      // respeta el idioma por defecto configurado en config.js
      currentLanguage = (CONFIG.defaultLanguage === "en") ? "en" : "es";
    }
  }
  updateLanguageUIAndRender();
});

const TRANSLATIONS = {
  es: {
    redirecting: "Redirigiendo a",
    buyButton: "VER EN AMAZON",
    buyButtonCompact: "VER AMAZON",
    loading: "Cargando catálogo...",
    copyright: "Todos los derechos reservados."
  },
  en: {
    redirecting: "Redirecting to",
    buyButton: "VIEW ON AMAZON",
    buyButtonCompact: "BUY AMAZON",
    loading: "Loading catalog...",
    copyright: "All rights reserved."
  }
};

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

function getEsFlagSvg() {
  return `
  <svg viewBox="0 0 100 100" class="flag-svg-icon" style="width: 14px; height: 14px; border-radius: 50%; overflow: hidden; display: inline-block; vertical-align: middle; border: 1px solid rgba(255,255,255,0.3);">
    <rect width="100" height="25" fill="#AA151B" />
    <rect y="25" width="100" height="50" fill="#F1BF00" />
    <rect y="75" width="100" height="25" fill="#AA151B" />
  </svg>
  `;
}

function getEnFlagSvg() {
  return `
  <svg viewBox="0 0 100 100" class="flag-svg-icon" style="width: 14px; height: 14px; border-radius: 50%; overflow: hidden; display: inline-block; vertical-align: middle; border: 1px solid rgba(255,255,255,0.3);">
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
    <g>
      <rect x="50" y="0" width="50" height="100" fill="#00247D" />
      <path d="M50,0 L100,100 M100,0 L50,100" stroke="#FFFFFF" stroke-width="8" />
      <path d="M50,0 L100,100 M100,0 L50,100" stroke="#CF142B" stroke-width="3" />
      <rect x="70" y="0" width="10" height="100" fill="#FFFFFF" />
      <rect x="50" y="45" width="50" height="10" fill="#FFFFFF" />
      <rect x="72" y="0" width="6" height="100" fill="#CF142B" />
      <rect x="50" y="47" width="50" height="6" fill="#CF142B" />
    </g>
  </svg>
  `;
}

function changeLanguage(lang) {
  if (lang !== "es" && lang !== "en") return;
  currentLanguage = lang;
  localStorage.setItem("preferredLanguage", lang);
  updateLanguageUIAndRender();
}

function updateLanguageUIAndRender() {
  const flagEsEl = document.getElementById("flagEs");
  const flagEnEl = document.getElementById("flagEn");
  if (flagEsEl) flagEsEl.innerHTML = getEsFlagSvg();
  if (flagEnEl) flagEnEl.innerHTML = getEnFlagSvg();

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

  document.title = CONFIG.brandName;
  const brandNameEls = document.querySelectorAll(".js-brand-name");
  brandNameEls.forEach(el => el.textContent = CONFIG.brandName);

  const brandTaglineEl = document.querySelector(".js-brand-tagline");
  if (brandTaglineEl) {
    brandTaglineEl.innerHTML = CONFIG.brandTagline[currentLanguage] || CONFIG.brandTagline.es;
  }

  const tiktokLinkEl = document.querySelector(".js-tiktok-link");
  if (tiktokLinkEl && CONFIG.socialLinks.tiktok) {
    tiktokLinkEl.href = CONFIG.socialLinks.tiktok;
  } else if (tiktokLinkEl) {
    tiktokLinkEl.style.display = "none";
  }

  const userMarket = detectAmazonMarketplace();
  renderCountryBanner(userMarket);
  renderCatalog(userMarket);
}

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
      return "com";
    }
    return "es";
  }

  if (langString.includes("-ca") || langString.includes("ca-")) return "ca";
  if (langString.includes("-gb") || langString.includes("en-gb") || langString.includes("en-ie")) return "uk";
  if (langString.includes("de")) return "de";
  if (langString.includes("fr")) return "fr";
  if (langString.includes("it")) return "it";

  return "com";
}

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

function renderCatalog(market) {
  const catalogEl = document.getElementById("bookCatalog");
  if (!catalogEl) return;
  catalogEl.innerHTML = "";

  const availableBooks = CONFIG.books.filter(book => book.languages[currentLanguage]);

  if (availableBooks.length === 1) {
    catalogEl.classList.add("catalog-single");
  } else {
    catalogEl.classList.remove("catalog-single");
  }

  availableBooks.forEach(book => {
    const details = book.languages[currentLanguage];
    const asin = details.asin;
    let targetLink = "#";
    if (asin) {
      const info = MARKET_INFO[market] || MARKET_INFO.com;
      targetLink = `https://www.${info.domain}/dp/${asin}`;
    }

    carouselStates[book.id] = 0;
    const prefix = book.prefix || (book.id === "mandalas-flowers" ? "mandalas" : "animals");
    
    let coverUrl = "";
    if (asin && !details.comingSoon) {
      coverUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`;
    } else if (details.coverImage) {
      coverUrl = `images/${details.coverImage}?v=2.1`;
    } else if (book.coverImage) {
      coverUrl = `images/${book.coverImage}?v=2.1`;
    } else {
      coverUrl = `images/${prefix}_cover_${currentLanguage}.png?v=2.1`;
    }

    const card = document.createElement("div");
    card.className = `book-card book-card-${book.id}`;
    card.id = `card-${book.id}`;

    // Si el libro viene pronto, el botón dirá "PRÓXIMAMENTE" o "COMING SOON"
    const buttonHtml = (details.comingSoon || !asin) ? `
      <div class="amazon-btn coming-soon-btn" style="background: linear-gradient(135deg, #a1a1aa 0%, #71717a 100%); border: 2px solid #52525b; color: #f4f4f5; cursor: default; opacity: 0.9; box-shadow: inset 0 2px 4px rgba(255,255,255,0.1), 0 4px 6px rgba(0,0,0,0.15); display: flex; justify-content: center; align-items: center; gap: 8px; font-weight: bold; text-decoration: none; padding: 10px 20px; border-radius: 9999px; width: 100%; box-sizing: border-box;">
        <span>${currentLanguage === 'es' ? 'PRÓXIMAMENTE' : 'COMING SOON'}</span>
      </div>
    ` : `
      <a href="${targetLink}" target="_blank" rel="noopener noreferrer" class="amazon-btn">
        <svg class="btn-amazon-logo" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zm0 2h12l1.5 2H4.5L6 4zM5 8h14v12H5V8zm4 2v2a3 3 0 006 0v-2h-2v2a1 1 0 01-2 0v-2H9z"/>
        </svg>
        <span class="btn-purchase-text">${TRANSLATIONS[currentLanguage].buyButtonCompact}</span>
      </a>
    `;

    const isAmazonCover = coverUrl.startsWith("https://images-na.ssl-images-amazon.com");
    let firstSlideHtml = "";
    if (isAmazonCover) {
      firstSlideHtml = `
        <div class="carousel-slide">
          <img class="book-cover-img" src="${coverUrl}" alt="Portada de ${details.title}">
        </div>
      `;
    } else {
      firstSlideHtml = `
        <div class="carousel-slide cover-slide-local">
          <img class="book-cover-bg-blur" src="${coverUrl}" alt="">
          <img class="book-cover-img-fg" src="${coverUrl}" alt="Portada de ${details.title}">
        </div>
      `;
    }

    card.innerHTML = `
      <div class="book-cover-container" id="carousel-${book.id}">
        <div class="carousel-track" style="transform: translateX(0%);">
          ${firstSlideHtml}
          <div class="carousel-slide">
            <img class="book-cover-img" src="images/${prefix}_page_1.png?v=2.1" alt="Página para colorear 1" onerror="this.src='images/mandalas_page_1.png?v=2.1'">
          </div>
          <div class="carousel-slide">
            <img class="book-cover-img" src="images/${prefix}_page_2.png?v=2.1" alt="Página para colorear 2" onerror="this.src='images/mandalas_page_2.png?v=2.1'">
          </div>
          <div class="carousel-slide">
            <img class="book-cover-img" src="images/${prefix}_page_3.png?v=2.1" alt="Página para colorear 3" onerror="this.src='images/mandalas_page_3.png?v=2.1'">
          </div>
        </div>

        <button class="slider-arrow prev" onclick="moveSlide('${book.id}', -1)" title="Anterior">
          <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <button class="slider-arrow next" onclick="moveSlide('${book.id}', 1)" title="Siguiente">
          <svg viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
        </button>

        <div class="slider-dots">
          <span class="dot active" onclick="setSlide('${book.id}', 0)"></span>
          <span class="dot" onclick="setSlide('${book.id}', 1)"></span>
          <span class="dot" onclick="setSlide('${book.id}', 2)"></span>
          <span class="dot" onclick="setSlide('${book.id}', 3)"></span>
        </div>
      </div>

      <div class="book-details">
        <h2 class="book-title">${details.title}</h2>
        <div class="book-subtitle">${details.subtitle}</div>
        <p class="book-desc">${details.description}</p>
        ${buttonHtml}
      </div>
    `;
    catalogEl.appendChild(card);
  });
}

// ==========================================
// Control del Carrusel de Muestras del Libro
// ==========================================
const carouselStates = {};

function moveSlide(bookId, direction) {
  const currentIndex = carouselStates[bookId] || 0;
  const nextIndex = (currentIndex + direction + 4) % 4;
  setSlide(bookId, nextIndex);
}

function setSlide(bookId, index) {
  carouselStates[bookId] = index;
  const container = document.getElementById(`carousel-${bookId}`);
  if (!container) return;

  const track = container.querySelector(".carousel-track");
  if (track) {
    track.style.transform = `translateX(-${index * 25}%)`;
  }

  const dots = container.querySelectorAll(".slider-dots .dot");
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Configuración de Parami Books y enlaces de Amazon
const CONFIG = {
  brandName: "Parami Books",
  brandTagline: {
    es: "Libros para colorear adorables y sencillos, para regalarte calma y desconexión.",
    en: "Cute and easy coloring books, tailored to grant you a peaceful moment."
  },
  socialLinks: {
    tiktok: "https://www.tiktok.com/@paramibooks", // Enlace oficial TikTok
    instagram: "" // Enlace opcional
  },
  
  // Idioma inicial por defecto (es / en)
  defaultLanguage: "es",

  books: [
    {
      id: "mandalas-flowers",
      coverImage: "cover_mandalas.png",
      languages: {
        es: {
          title: "Mandalas & Flowers",
          subtitle: "Diseños Fáciles",
          description: "Patrones florales simétricos en trazos fáciles y muy gruesos.",
          asin: "B0HBHJNFZM"
        },
        en: {
          title: "Mandalas & Flowers",
          subtitle: "Bold & Easy",
          description: "Beautiful floral patterns designed with bold and easy outlines.",
          asin: "B0GVB26115"
        }
      }
    },
    {
      id: "smiling-animals",
      coverImage: "cover_smiling_animals.png",
      languages: {
        en: {
          title: "Smiling Animals",
          subtitle: "Bold & Easy",
          description: "Cute and happy animals ready for colors with thick outlines.",
          asin: "B0GVKCPFC6"
        }
      }
    }
  ]
};

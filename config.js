// Configuración de Parami Books y enlaces de Amazon
const CONFIG = {
  brandName: "Parami Books",
  brandTagline: {
    es: "Libros para colorear adorables y sencillos, diseñados para regalarte un momento de calma y desconexión.",
    en: "Cute and easy coloring books, tailored to grant you a peaceful moment of mindfulness and relaxation."
  },
  socialLinks: {
    tiktok: "https://www.tiktok.com/@paramibooks", // Cambia esto por tu cuenta de TikTok
    instagram: "" // Opcional, puedes añadir tu Instagram
  },
  
  // Idioma por defecto si no se detecta la ubicación del móvil (es / en)
  defaultLanguage: "es",

  books: [
    {
      id: "mandalas-flowers",
      coverImage: "cover_mandalas.png",
      languages: {
        es: {
          title: "Mandalas & Flowers",
          subtitle: "Colección Simétrica Fácil",
          description: "Patrones florales simétricos y hermosos especialmente diseñados en trazos fáciles y gruesos para fomentar la concentración y la paz mental.",
          asin: "B0HBHJNFZM"
        },
        en: {
          title: "Mandalas & Flowers",
          subtitle: "Bold & Easy Coloring Book",
          description: "Symmetrical and beautiful floral patterns specially designed with bold and easy outlines to encourage concentration and peace of mind.",
          asin: "B0GVB26115"
        }
      }
    },
    {
      id: "smiling-animals",
      coverImage: "cover_smiling_animals.png",
      languages: {
        es: {
          title: "Smiling Animals",
          subtitle: "Animalitos Felices Dibujos Fáciles",
          description: "Colección de animalitos entrañables y felices. Ideal tanto para niños como para adultos que buscan colorear figuras alegres con contornos gruesos y sencillos.",
          asin: "B0GVKCPFC6"
        },
        en: {
          title: "Smiling Animals",
          subtitle: "Bold & Easy Coloring Book",
          description: "A delightful collection of cute and happy animals. Perfect for kids and adults looking to color joyful illustrations with clean, bold outlines.",
          asin: "B0GVKCPFC6"
        }
      }
    }
  ]
};

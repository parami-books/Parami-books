// Configuración de Parami Books y enlaces de Amazon
const CONFIG = {
  brandName: "Parami Books",
  brandTagline: {
    es: "Libros para colorear <strong class='highlight-red'>bonitos</strong> y <strong class='highlight-blue'>sencillos</strong>, para regalarte <strong class='highlight-green'>calma</strong> y <strong class='highlight-purple'>desconexión</strong>.",
    en: "<strong class='highlight-red'>Cute</strong> and <strong class='highlight-blue'>easy</strong> coloring books, tailored to grant you <strong class='highlight-green'>calm</strong> and <strong class='highlight-purple'>peace</strong>."
  },
  socialLinks: {
    tiktok: "https://www.tiktok.com/@parami_records?is_from_webapp=1&sender_device=pc",
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
          title: "Mandalas y Flores",
          subtitle: "Libro para colorear",
          description: "Relaja tu mente con hermosos patrones simétricos y flores sencillas. Sus trazos limpios y contornos extra gruesos hacen que pintar sea una experiencia relajante y libre de frustraciones, ideal para desconectar al final del día.",
          asin: "B0HBHJNFZM"
        },
        en: {
          title: "Mandalas & Flowers",
          subtitle: "Bold & Easy Coloring Book",
          description: "Unwind with delightful symmetrical designs and uncomplicated florals. Hand-drawn with bold, heavy outlines, this page is perfect for stress relief, practicing mindfulness, and coloring with markers or gel pens.",
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
          subtitle: "Bold & Easy Coloring Book",
          description: "Coloring should be fun and easy! Enjoy a lovable collection of happy puppies, cute kittens, and cozy animals. Designed with thick, clean outlines to keep your markers inside the lines and bring pure joy.",
          asin: "B0GVKCPFC6"
        }
      }
    }
  ]
};

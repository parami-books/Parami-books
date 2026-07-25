// Configuración de Parami Books y enlaces de Amazon
const CONFIG = {
  brandName: "Parami Books",
  brandTagline: "Libros para colorear adorables y sencillos, diseñados para regalarte un momento de calma y desconexión.",
  socialLinks: {
    tiktok: "https://www.tiktok.com/@tu_usuario_de_tiktok", // Cambia esto por tu cuenta de TikTok
    instagram: "" // Opcional, puedes añadir tu Instagram
  },
  
  // Tienda por defecto si no se detecta la ubicación del usuario (ej: "com" para Amazon.com)
  defaultMarketplace: "com",

  // Catálogo de libros. Puedes modificar los títulos, las descripciones y sobre todo los enlaces de Amazon
  books: [
    {
      id: "cozy-witch",
      title: "Cozy Witch",
      subtitle: "Bold & Easy Coloring Book",
      description: "Sumérgete en un mundo de pequeñas brujas acogedoras, pociones mágicas y rincones reconfortantes con líneas gruesas ideales para relajarte sin estrés.",
      // Ruta de la imagen de portada. Puedes poner la de amazon o subir una a la misma carpeta
      coverImage: "cover_cozy_witch.png", 
      links: {
        es: "https://www.amazon.es/dp/B0DXXXXXX1", // Enlace para España
        mx: "https://www.amazon.com.mx/dp/B0DXXXXXX1", // Enlace para México
        com: "https://www.amazon.com/dp/B0DXXXXXX1", // Enlace para EE.UU. e Internacional
        co: "https://www.amazon.co/dp/B0DXXXXXX1",
        ca: "https://www.amazon.ca/dp/B0DXXXXXX1",
        uk: "https://www.amazon.co.uk/dp/B0DXXXXXX1",
        de: "https://www.amazon.de/dp/B0DXXXXXX1",
        fr: "https://www.amazon.fr/dp/B0DXXXXXX1",
        it: "https://www.amazon.it/dp/B0DXXXXXX1"
      }
    },
    {
      id: "mandalas-flowers",
      title: "Mandalas Flowers",
      subtitle: "Bold & Easy Coloring Book",
      description: "Patrones florales simétricos y hermosos especialmente diseñados en trazos fáciles y gruesos para fomentar la concentración y la paz mental.",
      coverImage: "cover_mandalas.png",
      links: {
        es: "https://www.amazon.es/dp/B0DYYYYYY2",
        mx: "https://www.amazon.com.mx/dp/B0DYYYYYY2",
        com: "https://www.amazon.com/dp/B0DYYYYYY2",
        co: "https://www.amazon.co/dp/B0DYYYYYY2",
        ca: "https://www.amazon.ca/dp/B0DYYYYYY2",
        uk: "https://www.amazon.co.uk/dp/B0DYYYYYY2",
        de: "https://www.amazon.de/dp/B0DYYYYYY2",
        fr: "https://www.amazon.fr/dp/B0DYYYYYY2",
        it: "https://www.amazon.it/dp/B0DYYYYYY2"
      }
    },
    {
      id: "smiling-animals",
      title: "Smiling Animals",
      subtitle: "Bold & Easy Coloring Book",
      description: "Colección de animalitos entrañables y felices. Ideal tanto para niños como para adultos que buscan colorear figuras alegres con contornos gruesos y sencillos.",
      coverImage: "cover_smiling_animals.png",
      links: {
        es: "https://www.amazon.es/dp/B0DZZZZZZ3",
        mx: "https://www.amazon.com.mx/dp/B0DZZZZZZ3",
        com: "https://www.amazon.com/dp/B0DZZZZZZ3",
        co: "https://www.amazon.co/dp/B0DZZZZZZ3",
        ca: "https://www.amazon.ca/dp/B0DZZZZZZ3",
        uk: "https://www.amazon.co.uk/dp/B0DZZZZZZ3",
        de: "https://www.amazon.de/dp/B0DZZZZZZ3",
        fr: "https://www.amazon.fr/dp/B0DZZZZZZ3",
        it: "https://www.amazon.it/dp/B0DZZZZZZ3"
      }
    }
  ]
};

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

  books: [
    {
      id: "cozy-witch",
      title: "Cozy Witch",
      subtitle: "Bold & Easy Coloring Book",
      description: "Sumérgete en un mundo de pequeñas brujas acogedoras, pociones mágicas y rincones reconfortantes con líneas gruesas ideales para relajarte sin estrés.",
      // Ruta de la imagen de portada. Puedes poner la de amazon o subir una a la misma carpeta
      coverImage: "cover_cozy_witch.png", 
      asin: "B0GVKCPFC6"
    },
    {
      id: "mandalas-flowers",
      title: "Mandalas Flowers",
      subtitle: "Bold & Easy Coloring Book",
      description: "Patrones florales simétricos y hermosos especialmente diseñados en trazos fáciles y gruesos para fomentar la concentración y la paz mental.",
      coverImage: "cover_mandalas.png",
      asin: "B0DYYYYYY2"
    },
    {
      id: "smiling-animals",
      title: "Smiling Animals",
      subtitle: "Bold & Easy Coloring Book",
      description: "Colección de animalitos entrañables y felices. Ideal tanto para niños como para adultos que buscan colorear figuras alegres con contornos gruesos y sencillos.",
      coverImage: "cover_smiling_animals.png",
      asin: "B0DZZZZZZ3"
    }
  ]
};

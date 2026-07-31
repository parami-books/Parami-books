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
      prefix: "mandalas",
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
      prefix: "animals",
      coverImage: "cover_smiling_animals.png",
      languages: {
        es: {
          title: "Animalitos Adorables",
          subtitle: "Libro para colorear",
          description: "¡Colorear debe ser divertido y fácil! Disfruta de una adorable colección de perritos felices, gatitos tiernos y animalitos acogedores. Diseñado con trazos extra gruesos y limpios para mantener tus rotuladores dentro de las líneas.",
          comingSoon: true
        },
        en: {
          title: "Smiling Animals",
          subtitle: "Bold & Easy Coloring Book",
          description: "Coloring should be fun and easy! Enjoy a lovable collection of happy puppies, cute kittens, and cozy animals. Designed with thick, clean outlines to keep your markers inside the lines and bring pure joy.",
          asin: "B0GVKCPFC6"
        }
      }
    },
    {
      id: "cozy-witch",
      prefix: "cozy",
      coverImage: "cozy_cover_es.png",
      languages: {
        es: {
          title: "Magia Cozy",
          subtitle: "Libro para colorear",
          description: "Entra en un mundo de magia acogedora, té caliente y tranquilas estancias de brujas. Con trazos limpios, gruesos y fáciles de colorear, ofrece la experiencia perfecta para descansar y desconectar.",
          comingSoon: true
        },
        en: {
          title: "Cozy Witch",
          subtitle: "Bold & Easy Coloring Book",
          description: "Step into a world of cozy magic, warm tea, and peaceful witchy rooms! Featuring bold, easy-to-color lines and charming magical scenes, this book offers a delightful escape into aesthetic spaces.",
          comingSoon: true
        }
      }
    },
    {
      id: "mandalas-3d",
      prefix: "mandalas_3d",
      coverImage: "mandalas_3d_cover_es.jpg",
      languages: {
        es: {
          title: "Mándalas Geométricos 3D",
          subtitle: "Libro para colorear",
          description: "Descubre una colección de mándalas geométricos en 3D pensados para disfrutar del color y la creatividad. Diseños inspirados en cubos, formas isométricas y composiciones simétricas con líneas claras.",
          comingSoon: true
        },
        en: {
          title: "3D Geometric Mandalas",
          subtitle: "Bold & Easy Coloring Book",
          description: "Discover a collection of 3D geometric mandalas designed to unleash your creativity. Featuring designs inspired by cubes, isometric shapes, and bold optical illusions.",
          comingSoon: true
        }
      }
    }
  ]
};

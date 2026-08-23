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
      languages: {
        es: {
          title: "Animalitos Adorables",
          subtitle: "Libro para colorear",
          description: "¡Colorear debe ser divertido y fácil! Disfruta de una adorable colección de perritos felices, gatitos tiernos y animalitos acogedores. Diseñado con trazos extra gruesos y limpios para mantener tus rotuladores dentro de las líneas.",
          coverImage: "animals_cover_es.png",
          asin: "B0HCP7343R"
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
      languages: {
        es: {
          title: "Magia Cozy",
          subtitle: "Libro para colorear",
          description: "Entra en un mundo de magia acogedora, té caliente y tranquilas estancias de brujas. Con trazos limpios, gruesos y fáciles de colorear, ofrece la experiencia perfecta para descansar y desconectar.",
          coverImage: "cozy_cover_es.png",
          asin: "B0HFK37VT5"
        },
        en: {
          title: "Cozy Witch",
          subtitle: "Bold & Easy Coloring Book",
          description: "Step into a world of cozy magic, warm tea, and peaceful witchy rooms! Featuring bold, easy-to-color lines and charming magical scenes, this book offers a delightful escape into aesthetic spaces.",
          coverImage: "cozy_cover_en.png",
          asin: "B0HCYN5K71"
        }
      }
    },
    {
      id: "mandalas-3d",
      prefix: "mandalas_3d",
      languages: {
        es: {
          title: "Mándalas Geométricos 3D",
          subtitle: "Libro para colorear",
          description: "Descubre una colección de mándalas geométricos en 3D pensados para disfrutar del color y la creatividad. Diseños inspirados en cubos, formas isométricas y composiciones simétricas con líneas claras.",
          coverImage: "mandalas_3d_cover_es.jpg",
          asin: "B0HDD9TJGN"
        },
        en: {
          title: "3D Geometric Mandalas",
          subtitle: "Bold & Easy Coloring Book",
          description: "Discover a collection of 3D geometric mandalas designed to unleash your creativity. Featuring designs inspired by cubes, isometric shapes, and bold optical illusions.",
          coverImage: "mandalas_3d_cover_en.jpg",
          asin: "B0HDWYV8WN"
        }
      }
    },
    {
      id: "cozy-animals",
      prefix: "cozy_animals",
      languages: {
        es: {
          title: "Animales Cozy Haciendo Cosas",
          subtitle: "40 escenas divertidas para colorear",
          description: "Disfruta de una adorable colección de animales en situaciones cotidianas y divertidas: tomando café, leyendo, horneando galletas y viviendo momentos acogedores. Diseñado con trazos extra gruesos y limpios.",
          coverImage: "cozy_animals_cover_es.png",
          asin: "B0HFB5FJ5J"
        },
        en: {
          title: "Cozy Animals Doing Things",
          subtitle: "40 Fun Scenes Coloring Book",
          description: "Enjoy a lovable collection of cozy animals doing fun everyday things: drinking coffee, reading, baking cookies, and living their best cozy life! Designed with extra thick, clean lines.",
          coverImage: "cozy_animals_cover_en.png",
          asin: "B0HFGQSCKP"
        }
      }
    },
    {
      id: "cozy-fairies",
      prefix: "fairies",
      languages: {
        es: {
          title: "Hadas Cozy",
          subtitle: "40 escenas mágicas para colorear",
          description: "Adéntrate en un bosque encantado lleno de pequeñas hadas adorables, casitas de setas, desayunos en el jardín y momentos mágicos. Con trazos limpios y extra gruesos ideales para colorear y desconectar del estrés.",
          coverImage: "fairies_cover_es.png",
          asin: "B0HFKK8CMQ"
        },
        en: {
          title: "Cozy Fairy",
          subtitle: "Bold & Easy Coloring Book",
          description: "Step into an enchanted fairytale forest filled with adorable little fairies, mushroom cottages, garden picnics, and cozy moments! Features bold, clean outlines designed for stress-free coloring with markers.",
          coverImage: "fairies_cover_en.png",
          comingSoon: true
        }
      }
    },
    {
      id: "alma-salvaje",
      prefix: "alma_salvaje",
      languages: {
        es: {
          title: "Alma Salvaje",
          subtitle: "40 Mandalas de Animales para Colorear",
          description: "Explora la fuerza y belleza del reino animal a través de 40 mándalas detallados de leones, tortugas, iguanas y criaturas salvajes. Diseñados con trazos limpios para regalarte calma, concentración y desconexión.",
          coverImage: "alma_salvaje_cover_es.png",
          comingSoon: true
        },
        en: {
          title: "Wild Soul",
          subtitle: "40 Animal Mandalas Coloring Book",
          description: "Discover the majesty and beauty of the animal kingdom with 40 detailed animal mandalas featuring lions, sea turtles, geckos, and wild creatures. Bold, clean outlines perfect for stress relief and relaxation.",
          coverImage: "alma_salvaje_cover_en.png",
          comingSoon: true
        }
      }
    }
  ]
};

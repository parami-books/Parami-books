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
      id: "cozy-halloween",
      prefix: "cozy_halloween",
      samplePages: 5,
      languages: {
        es: {
          title: "Cozy Halloween",
          subtitle: "Libro para colorear",
          description: "¡Celebra el otoño y Halloween con un toque tierno y acogedor! Descubre divertidas escenas de monstruos clásicos en versión chibi: el vampirito, la momia, brujitas, hombres lobo, fantasmas y simpáticos iconos del terror compartiendo calabazas, dulces y bebidas calientes. Ilustraciones con trazos limpios pensadas para relajarse y disfrutar coloreando.",
          coverImage: "cozy_halloween_cover_es.jpg",
          asin: "B0HLX7LH8V"
        },
        en: {
          title: "Cozy Halloween",
          subtitle: "Bold & Easy Coloring Book",
          description: "Celebrate the cozy magic of spooky season! Step into a whimsical autumn world filled with adorable chibi monsters, friendly ghosts, little vampires, mummies, and sweet witches enjoying pumpkin treats and warm drinks. Features bold, clean outlines designed for relaxing, stress-free coloring.",
          coverImage: "cozy_halloween_cover_en.jpg",
          asin: "B0HLX7LH8V"
        }
      }
    },
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
      samplePages: 4,
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
          asin: "B0HGC8PX3K"
        }
      }
    },
    {
      id: "alma-salvaje",
      prefix: "alma_salvaje",
      languages: {
        es: {
          title: "Alma Salvaje: 40 Mandalas de Animales",
          subtitle: "Libro para colorear",
          description: "Explora la fuerza y belleza del reino animal a través de 40 mándalas detallados de leones, tortugas, iguanas y criaturas salvajes. Diseñados con trazos limpios para regalarte calma, concentración y desconexión.",
          coverImage: "alma_salvaje_cover_es.jpg",
          asin: "B0HKVCNJ3Z"
        },
        en: {
          title: "Wild Soul: 40 Animal Mandalas",
          subtitle: "Coloring Book",
          description: "Explore the power and beauty of the animal kingdom with 40 detailed mandalas featuring lions, turtles, iguanas, and wild creatures. Designed with clean lines for relaxation and stress relief.",
          coverImage: "alma_salvaje_cover_en.jpg",
          asin: "B0HKY9PSLN"
        }
      }
    },
    {
      id: "baby-animals",
      prefix: "baby_animals",
      samplePages: 4,
      languages: {
        es: {
          title: "Animales Bebés",
          subtitle: "Smiling Animals · Vol. 3",
          description: "¡Pequeños animales, grandes aventuras! Conoce a 40 adorables crías en escenas divertidas para colorear e imaginar: pangolines, ornitorrincos, quokkas y ajolotes. Diseñado con trazos limpios y simpáticos.",
          coverImage: "baby_animals_cover_es.jpg",
          asin: "B0HL3VBZB7"
        },
        en: {
          title: "Baby Animals",
          subtitle: "Smiling Animals · Vol. 3",
          description: "Big smiles, little adventures! Meet 40 adorable baby animals in playful scenes made for coloring and imagination: baby pangolins, platypuses, quokkas, and axolotls. Designed with clean lines for fun, stress-free coloring.",
          coverImage: "baby_animals_cover_en.jpg",
          asin: "B0HL3VBZB7"
        }
      }
    },
    {
      id: "cozy-gnomes",
      prefix: "gnomes",
      languages: {
        es: {
          title: "Duendes y Gnomos Cozy en Otoño",
          subtitle: "Libro para colorear",
          description: "Adéntrate en una aldea mágica de otoño llena de gnomos simpáticos, duendecillos, calabazas y momentos acogedores. Con trazos limpios y gruesos pensados para relajarte y disfrutar coloreando.",
          coverImage: "gnomes_cover_es.jpg",
          comingSoon: true
        },
        en: {
          title: "Gnomes & Elves: Cozy Autumn",
          subtitle: "Bold & Easy Coloring Book",
          description: "Step into a magical autumn village full of cute gnomes, playful elves, pumpkins, and cozy fall adventures! Designed with bold, clean outlines perfect for stress-free coloring with markers.",
          coverImage: "gnomes_cover_en.jpg",
          comingSoon: true
        }
      }
    },
    {
      id: "mandala-dragons",
      prefix: "dragons",
      languages: {
        es: {
          title: "Dragones Mandala",
          subtitle: "Libro para colorear",
          description: "Descubre el poder y la belleza de 40 majestuosos dragones mandala: dragones de cristal, criaturas celestiales, dragones de bosque y orientales. Diseñados con trazos limpios para regalarte calma, creatividad y desconexión.",
          coverImage: "dragons_cover_es.jpg",
          comingSoon: true
        },
        en: {
          title: "Mandala Dragons",
          subtitle: "Coloring Book",
          description: "Explore the power and beauty of 40 magnificent mandala dragons: ice dragons, crystal beasts, celestial wyrms, and legendary guardians. Featuring clean outlines designed for deep focus and stress relief.",
          coverImage: "dragons_cover_en.jpg",
          comingSoon: true
        }
      }
    },
    {
      id: "cozy-animals-work",
      prefix: "cozy_work",
      languages: {
        es: {
          title: "Animales Cozy con Oficios",
          subtitle: "Libro para colorear",
          description: "Descubre una entrañable aldea donde adorables animalitos disfrutan de sus divertidos oficios: zorritos panaderos, osos carpinteros, nutrias floristas y artesanos. Diseñado con trazos limpios y definidos para pintar sin estrés y despertar tu creatividad.",
          coverImage: "cozy_work_cover_es.jpg",
          comingSoon: true
        },
        en: {
          title: "Cozy Animals at Work",
          subtitle: "A Coloring Book",
          description: "Step into a bustling storybook town full of adorable animals working cheerful jobs: baker foxes, carpenter bears, florist otters, and master builders! Featuring bold, clean outlines designed for relaxing, stress-free coloring.",
          coverImage: "cozy_work_cover_en.jpg",
          comingSoon: true
        }
      }
    },
    {
      id: "cozy-dragons",
      prefix: "cozy_dragons",
      languages: {
        es: {
          title: "Dragones Cozy",
          subtitle: "Libro para colorear",
          description: "Adéntrate en un reino mágico y acogedor habitado por 40 adorables dragoncitos en escenas de fantasía: jugando entre setas gigantes, explorando puentes de madera con tortugas y volando bajo la luz de las estrellas. Diseñado con trazos limpios para regalarte calma y diversión.",
          coverImage: "cozy_dragons_cover_es.jpg",
          comingSoon: true
        },
        en: {
          title: "Cozy Dragons",
          subtitle: "Coloring Book",
          description: "Step into an enchanting fairytale realm filled with 40 adorable baby dragons in cozy magical scenes: playing among giant mushrooms, making friends with woodland turtles, and soaring across starry skies! Features clean, bold outlines perfect for relaxing coloring.",
          coverImage: "cozy_dragons_cover_en.jpg",
          comingSoon: true
        }
      }
    },
    {
      id: "muscle-cars",
      prefix: "muscle_cars",
      languages: {
        es: {
          title: "American Muscle Cars",
          subtitle: "Libro para colorear",
          description: "Siente la potencia y la adrenalina de los legendarios deportivos clásicos americanos: Mustangs GT500, Camaros SS, Chevelles y bólidos de aceleración en la Ruta 66 y Hollywood. Con ilustraciones dinámicas y detalladas listas para cobrar vida con tus colores.",
          coverImage: "muscle_cars_cover_es.jpg",
          comingSoon: true
        },
        en: {
          title: "American Muscle Cars",
          subtitle: "Coloring Book",
          description: "Feel the raw power and timeless attitude of iconic American muscle cars: Shelby GT500 Mustangs, Camaro SS, Chevelles, and drag strip legends roaring down Route 66 and Hollywood Blvd! Featuring bold, high-octane illustrations ready to color.",
          coverImage: "muscle_cars_cover_en.jpg",
          comingSoon: true
        }
      }
    },
    {
      id: "jdm-nights",
      prefix: "jdm_nights",
      languages: {
        es: {
          title: "JDM Nights",
          subtitle: "Libro para colorear · Coches, cultura y estilo de vida",
          description: "Adéntrate en la fascinante cultura automovilística japonesa bajo las luces de neón de Tokio: Skylines GT-R R34, Lancers Evolution IX, Nissans 350Z derrapando en puertos de montaña y Celicas de rally. Con ilustraciones hiperdetalladas que capturan la esencia del tuning, las autopistas Shuto y el espíritu JDM.",
          coverImage: "jdm_nights_cover_es.jpg",
          comingSoon: true
        },
        en: {
          title: "JDM Nights",
          subtitle: "Coloring Book · Cars, Culture & Lifestyle",
          description: "Immerse yourself in legendary Japanese car culture under Tokyo's neon glow: Skyline GT-R R34, Lancer Evolution IX, Nissan 350Z touge drifters, and Celica rally machines! Packed with high-octane, intricately detailed illustrations capturing the heart of JDM tuning and midnight highway runs.",
          coverImage: "jdm_nights_cover_en.jpg",
          comingSoon: true
        }
      }
    },
    {
      id: "formula-1",
      prefix: "formula1",
      samplePages: 4,
      languages: {
        es: {
          title: "Fórmula 1: Coches y Circuitos Históricos",
          subtitle: "Libro para colorear",
          description: "Revive la época dorada del automovilismo con las mayores leyendas de la F1 y sus monoplazas míticos: el Renault R25 de Fernando Alonso en Imola, el Ferrari F2004 de Schumacher en Monza, el McLaren MP4/4 de Ayrton Senna en Suzuka y el Ferrari 312T de Niki Lauda en Mónaco. Ilustraciones detalladas con trazados de circuitos y firmas de pilotos para colorear pura velocidad.",
          coverImage: "formula1_cover_es.jpg",
          comingSoon: true
        },
        en: {
          title: "Formula 1: Historic Cars and Circuits",
          subtitle: "Coloring Book",
          description: "Relive the golden eras of motorsport with legendary F1 icons and their championship machines: Fernando Alonso's Renault R25 at Imola, Michael Schumacher's Ferrari F2004 at Monza, Ayrton Senna's McLaren MP4/4 at Suzuka, and Niki Lauda's Ferrari 312T at Monaco. Featuring authentic circuit layouts and driver signatures ready to color.",
          coverImage: "formula1_cover_en.jpg",
          comingSoon: true
        }
      }
    }
  ]
};




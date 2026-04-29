export type SectionId = 'projects' | 'about' | 'contact' | 'infographics' | 'profile' | null;
export type Language = 'es' | 'en';

export const data = {
  es: {
    ui: {
      sysReq: "SYS.REQ: Interactúa con los puntos de acceso para navegar.",
      status: "ESTADO: Entorno cargado exitosamente.",
      boot: [
        "BIOS Data 04/29/26 19:38:29 Ver 1.00",
        "CPU: Procesador de Red Neuronal 99",
        "Test de Memoria: 640K OK",
        "Detectando IDE Primario Maestro... [OK]",
        "Cargando Kernel del SO........... HECHO",
        "Inicializando Entorno de Portafolio... HECHO",
        "Estableciendo Enlace de Comms Seguro... [OK]"
      ],
      labels: {
        projects: "Terminal Proyectos",
        profile: "Stats Sistema",
        about: "Archivos Base",
        contact: "Comunicaciones",
        infographics: "Registros & Análisis"
      }
    },
    about: {
      content: "¡Hola! Soy Nicolás Bautista Pardo.\n\nMi enfoque une la precisión técnica de la emulación de sistemas con la robustez necesaria para el E-commerce moderno, garantizando escalabilidad arquitectónica y cumplimiento normativo (DIAN) mediante la integración estratégica de IA.",
      education: [
        {
          institution: "Alura - Oracle Next Education",
          studies: ["Especialización en IA con Java", "Formación Spring Framework", "Desarrollo Java Avanzado"]
        },
        {
          institution: "SENA (Colombia)",
          studies: ["Controles y Seguridad Informática", "Soporte Técnico para Mantenimiento de Equipos", "Formación Profesional Integral"]
        }
      ]
    },
    projects: [
      {
        id: "hw-labs",
        title: "Hardware Labs",
        description: "Simulador de ventas especializado en hardware de alto rendimiento. Optimizado para visualización técnica.",
        tech: "E-commerce Dinámico | React",
        image: "/3.png",
        link: "https://hardware-lab-premium-npaf.vercel.app/"
      },
      {
        id: "maztercaps",
        title: "MazterCaps",
        description: "Arquitectura de e-commerce robusta para retail en Colombia, integrando cumplimiento legal DIAN.",
        tech: "Business Solution | Full Stack",
        image: "/2.png",
        link: "https://maztercaps.vercel.app/"
      },
      {
        id: "sim-v5",
        title: "Simulador V5",
        description: "Motor de emulación web de alto rendimiento. Demuestra manipulación avanzada de memoria.",
        tech: "System Emulation | JS Canvas",
        image: "/1.png",
        link: "https://gba-emu-mu.vercel.app/"
      },
      {
        id: "nexus",
        title: "Nexus Home",
        description: "Ecosistema interactivo para hogares inteligentes. Cálculo de consumo energético y control.",
        tech: "IoT & AI Integration | Node.js",
        image: "/4.png",
        link: "https://nexus-home-eight.vercel.app/"
      }
    ],
    profile: {
      level: 99,
      titles: ["Front-End Architect", "Java Developer", "AI Integrator"],
      stats: [
        { name: "Arquitectura E-commerce", value: 95 },
        { name: "Desarrollo Web (React/JS)", value: 98 },
        { name: "Java & Spring Framework", value: 85 },
        { name: "Optimización UX/UI", value: 90 },
        { name: "Integración de IA", value: 88 }
      ]
    },
    contact: {
      content: "Ubicación: Bogotá, Colombia • Remoto\n¿Listo para optimizar tus sistemas?",
      email: "npdiaz99@gmail.com",
      whatsapp: "https://wa.me/573057928207",
      instagram: "https://instagram.com/nicolaspardod",
      github: "https://github.com/nicolaspardod",
      linkedin: "https://linkedin.com/in/nicolaspardod"
    },
    infographics: {
      content: "Registros detallados de infraestructura de sistemas.",
      items: [
        {
          title: "Arquitectura de E-commerce",
          desc: "Lógica de cumplimiento DIAN y estructura de datos.",
          image: "/Infografia1.png"
        },
        {
          title: "Performance Web",
          desc: "Optimización de carga y respuesta de servidor.",
          image: "/Infografia2.png"
        },
        {
          title: "Integración con IA",
          desc: "Uso de Google AI Studio en aplicaciones front-end.",
          image: "/Infografia3.png"
        }
      ]
    }
  },
  en: {
    ui: {
      sysReq: "SYS.REQ: Interact with environment hotspots to navigate.",
      status: "STATUS: Environment successfully loaded.",
      boot: [
        "BIOS Date 04/29/26 19:38:29 Ver 1.00",
        "CPU: Neural Network Processor 99",
        "Memory Test: 640K OK",
        "Detecting IDE Primary Master... [OK]",
        "Loading OS Kernel................ DONE",
        "Initializing Interactive Portfolio Env... DONE",
        "Establishing Secure Comm Link... [OK]"
      ],
      labels: {
        projects: "Projects Terminal",
        profile: "System Stats",
        about: "Core Archives",
        contact: "Comm Link",
        infographics: "Logs & Analysis"
      }
    },
    about: {
      content: "Hello! I am Nicolás Bautista Pardo.\n\nMy approach bridges the technical precision of system emulation with the robustness required for modern E-commerce, ensuring architectural scalability and regulatory compliance (like DIAN) through strategic AI integration.",
      education: [
        {
          institution: "Alura - Oracle Next Education",
          studies: ["AI with Java Specialization", "Spring Framework Training", "Advanced Java Development"]
        },
        {
          institution: "SENA (Colombia)",
          studies: ["IT Controls and Security", "Technical Support for Equipment Maintenance", "Comprehensive Professional Training"]
        }
      ]
    },
    projects: [
      {
        id: "hw-labs",
        title: "Hardware Labs",
        description: "Sales simulator specialized in high-performance hardware. Optimized for technical visualization.",
        tech: "Dynamic E-commerce | React",
        image: "/3.png",
        link: "https://hardware-lab-premium-npaf.vercel.app/"
      },
      {
        id: "maztercaps",
        title: "MazterCaps",
        description: "Robust e-commerce architecture for retail in Colombia, integrating DIAN legal compliance.",
        tech: "Business Solution | Full Stack",
        image: "/2.png",
        link: "https://maztercaps.vercel.app/"
      },
      {
        id: "sim-v5",
        title: "Simulator V5",
        description: "High-performance web emulation engine. Demonstrates advanced memory manipulation.",
        tech: "System Emulation | JS Canvas",
        image: "/1.png",
        link: "https://gba-emu-mu.vercel.app/"
      },
      {
        id: "nexus",
        title: "Nexus Home",
        description: "Interactive ecosystem for smart homes. Energy consumption calculation and control apps.",
        tech: "IoT & AI Integration | Node.js",
        image: "/4.png",
        link: "https://nexus-home-eight.vercel.app/"
      }
    ],
    profile: {
      level: 99,
      titles: ["Front-End Architect", "Java Developer", "AI Integrator"],
      stats: [
        { name: "E-commerce Architecture", value: 95 },
        { name: "Web Development (React/JS)", value: 98 },
        { name: "Java & Spring Framework", value: 85 },
        { name: "UX/UI Optimization", value: 90 },
        { name: "AI Integration", value: 88 }
      ]
    },
    contact: {
      content: "Location: Bogotá, Colombia • Remote\nReady to optimize your systems?",
      email: "npdiaz99@gmail.com",
      whatsapp: "https://wa.me/573057928207",
      instagram: "https://instagram.com/nicolaspardod",
      github: "https://github.com/nicolaspardod",
      linkedin: "https://linkedin.com/in/nicolaspardod"
    },
    infographics: {
      content: "Detailed records of system infrastructure.",
      items: [
        {
          title: "E-commerce Architecture",
          desc: "DIAN compliance logic and data structure.",
          image: "/Infografia1.png"
        },
        {
          title: "Web Performance",
          desc: "Server response and load optimization.",
          image: "/Infografia2.png"
        },
        {
          title: "AI Integration",
          desc: "Usage of Google AI Studio in front-end applications.",
          image: "/Infografia3.png"
        }
      ]
    }
  }
};

import { Icons } from "@/components/icons";
import { image } from "framer-motion/client";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { features } from "process";

export const DATA = {
  name: "Serhat Deniz Öztürk",
  preferedName: "Deniz",
  initials: "DO",
  url: "https://serhatdenizozturk.com.tr",
  location: "Antalya, Turkey",
  locationLink: "https://www.google.com/maps/place/Antalya,+Turkey",
  description:
    "I am a Software Developer skilled in building web, desktop, mobile, and embedded applications with a focus on scalable and efficient solutions.",
  summary: [
    "Experienced software developer and entrepreneur with a Bachelor’s degree in Computer Engineering. Over the years, I have independently conceived, designed, and launched a wide range of software solutions spanning web, mobile, desktop, and embedded platforms. My work reflects a strong commitment to innovation, precision, and user-focused design.",
    "As a published author in software development methodologies, I have contributed to advancing industry standards and best practices. I am skilled in leveraging modern technologies like React.js, Vue.js, Node.js, TypeScript, and Qt/C++ to create scalable, efficient, and user-friendly software.",
    "I am passionate about solving complex technical challenges, learning emerging tools and methodologies, and delivering high-quality software. My dedication lies in continuous improvement, whether working independently or collaborating in dynamic team environments.",
  ],
  avatarUrl: "/me.png",
  skills: [
    {
      title: "Web",
      items: [
        "React.js",
        "Vue.js",
        "Node.js",
        "Express.js",
        "JavaScript",
        "TypeScript",
        "Vite",
        "HTML5",
        "CSS3",
        "Zustand",
        "Pinia",
        "Vuex",
        "Redux Toolkit",
        "i18n",
      ],
    },
    {
      title: "C++",
      items: [
        "Modern C++ (11/14/17/20)",
        "Qt 5/6",
        "ESP32",
        "ESP8266",
        "Raspberry Pi 3/4/5",
        "CMake",
        "UART",
        "SPI",
        "I2C",
        "PWM",
        "NVS",
        "SPIFFS",
        "EEPROM",
      ],
    },
    {
      title: "Qt",
      items: [
        "Qt Core",
        "Qt Widgets",
        "Qt Network",
        "Qt SQL",
        "Qt QML",
        "Qt Concurrent",
        "Qt Multimedia",
        "Qt Positioning",
        "qmake",
      ],
    },
    {
      title: "Common & Other",
      items: [
        "Git",
        "GitHub",
        "Cron",
        "MySQL",
        "SQLite",
        "MongoDB",
        "TCP/IP",
        "WebSockets",
        "HTTP/S",
        "Linux Mint",
        "Raspberry Pi OS",
        "Windows",
        "3D Printing",
        "CR6-SE",
        "CR6-MAX",
        "Tinkercad",
        "Cura",
        "Mini CNC Routing",
        "CNC3018 Pro",
        "Aspire (Vectric)",
        "GRBL Controller",
      ],
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "serhatdenizozturk@hotmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sDenizOzturk",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/serhat-deniz-öztürk",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:serhatdenizozturk@hotmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "SPERO 3D",
      href: "spero3d.com",
      badges: [],
      location: "Hybrid",
      title: "Frontend Developer",
      logoUrl: "/work-experience/spero-logo.png",
      start: "2023",
      end: "2024",
      details: [
        "Developed and optimized features for Spero 3D Cloud, improving user experience and responsiveness.",
      ],
    },
    {
      company: "EnPro Technologies",
      href: "https://enpro.co",
      badges: [],
      location: "Hybrid",
      title: "Full Stack Developer",
      logoUrl: "/work-experience/enpro-logo.png",
      start: "2021",
      end: "2023",
      details: [
        "Developed backend APIs and front-end features, optimizing database performance and ensuring system reliability using React.js, Node.js, Express.js, and MongoDB.",
        "Contributed to the development of ATSO’s full-stack web application using Vue.js and TailwindCSS, including an admin panel for streamlined content management.",
      ],
    },
    {
      company: "Maren Robotics (formerly Desistek Robotik Ltd. Şti)",
      href: "https://marenrobotics.com",
      badges: [],
      location: "Remote",
      title: "Qt/QML C++ Developer",
      logoUrl: "/work-experience/marenrobotics-logo.jpeg",
      start: "2020",
      end: "2021",
      details: [
        "Updated and enhanced the control software for remotely operated underwater vehicles (ROVs) using Qt/QML and C++, improving operational efficiency.",
        "Enhanced the user interface by removing unnecessary widgets and adding new features like multi-camera support.",
        "Redesigned the UI to meet specifications from the UI/UX designer, improving usability and aesthetics.",
      ],
    },
    {
      company: "BINAK Software & Information Systems",
      href: "https://binak.com.tr",
      badges: [],
      location: "Antalya, Turkey",
      title: "Software Developer & Founder",
      logoUrl: "/work-experience/binak-logo.png",
      start: "2018",
      end: "Present",
      details: [
        "Designed, built, and launched a diverse range of products from scratch as a solo developer, without hiring additional employees.",
        "Created full-stack applications with React.js, Vue.js, Node.js, MySQL, MongoDB, and TypeScript, addressing diverse user needs.",
        "Developed desktop and mobile apps using Qt/C++ with optimized performance and usability.",
        "Designed and implemented embedded hardware solutions using Raspberry Pi, ESP boards, and custom-built parts created with 3D printing and CNC machining.",
        "Managed all aspects of product development, including architecture, coding, testing, and deployment, ensuring high-quality results.",
      ],
    },
  ],
  education: [
    {
      school: "Izmir University of Economics",
      href: "https://www.ieu.edu.tr",
      degree: "Computer Engineering, BSc (Full Scholarship)",
      logoUrl: "/education/ieu-logo.png",
      start: "2013",
      end: "2018",
    },
  ],

  projects: [
    {
      title: "bKapı -site",
      href: "https://binak.com.tr/urunler/bkapi-site",
      active: true,
      description:
        "Automatic Number Plate Recognition (ANPR) system for managing gate access in building complexes.",
      features: [
        "Automated license plate recognition using IP cameras.",
        "Real-time gate access for registered vehicles.",
        "Image logging for each vehicle passage.",
        "Messaging alerts via Telegram and SMS.",
        "Administrator notifications for unauthorized vehicles.",
        "Integrated TTS technology for vehicle information announcements.",
        "Compact design utilizing 3D printed parts.",
        "Mobile and web app integration for enhanced accessibility.",
      ],
      technologies: [
        "Qt",
        "C++",
        "Raspberry Pi 4/5",
        "MySQL",
        "ESP01",
        "3D Printing",
      ],
      links: [
        {
          type: "Product Page",
          href: "https://binak.com.tr/urunler/bkapi-site",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/product/bkapi-site.jpeg",
    },
    {
      title: "bKapı -remote",
      href: "https://github.com/sDenizOzturk/bKapi-remote",
      active: true,
      description:
        "Remote management web app allowing building managers to let residents self-register car plates and application keys.",
      features: [
        "Self-service registration for residents.",
        "Time-sensitive URLs for plate and key management.",
        "Detailed pass logs with photo records.",
        "Search functionality by name or license plate.",
        "Backend deployed on Raspberry Pi, with gateway API and frontend on cPanel.",
        "For the demo server, enter any password to log in.",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MySQL",
      ],
      links: [
        {
          type: "GitHub Repo",
          href: "https://github.com/sDenizOzturk/bKapi-remote",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://bkapi.com.tr/test/auth",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/product/bkapi-remote.jpeg",
    },
    {
      title: "bOkul",
      href: "https://binak.com.tr/urunler/bokul",
      active: false,
      description:
        "Student Pick-Up System providing role-based access for student affairs, teachers, and guardians with advanced security features.",
      features: [
        "Role-based access system.",
        "Pre-arrival notifications for student pickups.",
        "Efficient image handling with optimized backend algorithms.",
      ],
      technologies: [
        "Vue.js",
        "Node.js",
        "Express.js",
        "JavaScript",
        "MongoDB",
        "Mongoose",
        "IndexedDB",
      ],
      links: [
        {
          type: "Product Page",
          href: "https://binak.com.tr/urunler/bokul",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/product/bokul.webp",
    },
    {
      title: "karsiligine.com",
      href: "https://karsiligine.com",
      active: true,
      description:
        "Alternative TL inflation calculation tool through USD-TL rates and official USD inflation.",
      features: [
        "Publicly available repository on GitHub.",
        "Deployed on cPanel for accessibility.",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Zustand",
        "Framer Motion",
      ],
      links: [
        {
          type: "Frontend GitHub Repo",
          href: "https://github.com/sDenizOzturk/karsiligine-com",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend Repo",
          href: "https://github.com/sDenizOzturk/karsiligine-api",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://karsiligine.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/product/karsiligine.png",
    },
    {
      title: "binak.com.tr",
      href: "https://binak.com.tr",
      active: true,
      description:
        "Official company website for showcasing services and products of Binak.",
      features: ["Hosted on cPanel with public repository on GitHub"],
      technologies: ["Vue.js", "Options API", "JavaScript", "CSS"],
      links: [
        {
          type: "GitHub Repo",
          href: "https://github.com/sDenizOzturk/binakybs-com",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://binak.com.tr",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/product/binakcomtr.jpeg",
    },
    {
      title: "kdvhesaplayici.com.tr",
      href: "https://kdvhesaplayici.com.tr",
      active: true,
      description:
        "Innovative VAT calculation tool emphasizing real-time interaction and user experience.",
      features: ["Hosted on cPanel with public repository on GitHub"],
      technologies: ["Vue.js", "Options API", "JavaScript", "CSS"],
      links: [
        {
          type: "GitHub Repo",
          href: "https://github.com/sDenizOzturk/binakybs-com",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://kdvhesaplayici.com.tr",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/product/kdvhesaplayicicomtr.png",
    },
    {
      title: "Binak React Components",
      href: "https://sdenizozturk.github.io/binak-react-components/",
      active: true,
      description: "React UI component library for Binak products.",
      features: ["Public repository on GitHub and npm."],
      technologies: [
        "React.js",
        "TypeScript",
        "Vite",
        "React Hook Form",
        "Framer Motion",
        "CSS",
      ],
      links: [
        {
          type: "GitHub Repo",
          href: "https://github.com/sDenizOzturk/binak-react-components",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Documentation",
          href: "https://sdenizozturk.github.io/binak-react-components/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/product/binak-react-components.png",
    },
    {
      title: "React Image Displayer",
      href: "https://github.com/sDenizOzturk/react-image-displayer/",
      active: true,
      description:
        "Image loader React component that mounts the image only after it is successfully loaded.",
      features: ["Public repository on GitHub and npm."],
      technologies: [
        "React.js",
        "TypeScript",
        "Vite",
        "React Hook Form",
        "Framer Motion",
        "CSS",
      ],
      links: [
        {
          type: "GitHub Repo",
          href: "https://github.com/sDenizOzturk/react-image-displayer/",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Documentation",
          href: "https://sdenizozturk.github.io/react-image-displayer/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/product/react-image-displayer.png",
    },
    {
      title: "bKapı -site mobil & bKapı -multi",
      href: "https://binak.com.tr/mobil-uygulamalar",
      active: true,
      description:
        "Remote access mobile applications for managing building entrances, exits, and pedestrian gates.",
      features: [
        "Remote gate operation via mobile devices.",
        "Multi-building complex access management.",
        "Published on Google Play Store and Apple App Store.",
      ],
      technologies: ["Qt", "C++", "Google Play Console", "App Store Connect"],
      links: [
        {
          type: "App Store - site mobil",
          href: "https://apps.apple.com/tr/app/bkapi-site-mobil/id1576908443",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App Store - multi",
          href: "https://apps.apple.com/tr/app/bkapi-multi/id6444596145",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Google Play - site mobil",
          href: "https://play.google.com/store/apps/details?id=binak.bKapi.site",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Google Play - multi",
          href: "https://play.google.com/store/apps/details?id=binak.bKapi.multi",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/product/bkapi-site-mobil.webp",
    },
    {
      title: "bDiafon & bKapı -GSM",
      href: "https://binak.com.tr/urunler/bdiafon",
      active: true,
      description:
        "GSM-based intercom and gate opener system with extensive functionality for multiple gates.",
      features: [
        "GSM call and dial-pad operation for gate opening.",
        "Two-way voice communication and remote access via WIFI.",
        "Extensive call and access log management.",
      ],
      technologies: [
        "C++",
        "ESP32",
        "SIM800/SIM808",
        "ESPAsyncWebServer",
        "HTML",
        "CSS",
        "SPIFFS",
        "3D Printing",
      ],
      links: [
        {
          type: "Product Page - bDiafon",
          href: "https://binak.com.tr/urunler/bdiafon",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Product Page - bKapi -GSM",
          href: "https://binak.com.tr/urunler/bkapi-gsm",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/product/bdiafon.webp",
    },
    {
      title: "bAdım",
      href: "https://binak.com.tr/urunler/badim",
      active: true,
      description:
        "Intelligent lighting system for staircases featuring advanced sensor-based control.",
      features: [
        "Genuine step-tracking functionality.",
        "Wireless sensor communication and user-configurable settings.",
      ],
      technologies: [
        "C++",
        "ESP32",
        "SPIFFS",
        "ESPAsyncWebServer",
        "HTML",
        "CSS",
        "3D Printing",
      ],
      links: [
        {
          type: "Product Page",
          href: "https://binak.com.tr/urunler/badim",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/product/badim.webp",
    },
    {
      title: "bPersonel",
      href: "https://binak.com.tr/urunler/bpersonel",
      active: true,
      description:
        "Personnel tracking and attendance management system with RFID and biometric authentication.",
      features: [
        "Real-time tracking with RFID and biometric authentication.",
        "Automated work hours and shift management.",
        "Customizable reporting and payroll integration.",
      ],
      technologies: [
        "Qt",
        "C++",
        "Python",
        "Raspberry Pi",
        "MySQL",
        "RFID",
        "Biometric Authentication",
      ],
      links: [
        {
          type: "Product Page",
          href: "https://binak.com.tr/urunler/bpersonel",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/product/bpersonel.webp",
    },
    {
      title: "bKDV & bKarşıt & bGümrük",
      href: "https://binak.com.tr/masaustu-uygulamalar",
      active: true,
      description:
        "Suite of desktop applications simplifying auditing tasks with robust data management capabilities.",
      features: [
        "Streamlined audit workflows with autocomplete and reusable data.",
        "Support for parsing and generating various document formats.",
        "AES 256 encryption for secure data storage.",
      ],
      technologies: ["Qt", "C++", "SQLITE"],
      links: [
        {
          type: "Product Pages",
          href: "https://binak.com.tr/masaustu-uygulamalar",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/product/bkarsit.webp",
    },
    {
      title: "bResetleme & bRöle",
      href: "",
      active: true,
      description:
        "WIFI-controlled devices for power management and external relay control.",
      features: [
        "Triggered by web interface, HTTP request, or TCP packet.",
        "Can be configured via UI interface by connecting to the device in Access Point mode.",
      ],
      technologies: [
        "C++",
        "ESP32",
        "SPIFFS",
        "ESPAsyncWebServer",
        "HTML",
        "CSS",
        "3D Printing",
      ],
      links: [],
      image: "/product/bresetleme.png",
    },
  ],

  publications: [
    {
      title: "Uygulamalar ile Qt",
      dates: "Aug 31, 2018",
      publisher: "Kodlab Yayin Dagitim",
      description: "A published book that teaches Qt for beginners.",
      isbn: "978-6-05-211823-8",
      image: "/publication/uygulamalar-ile-qt.jpg",
      links: [
        {
          title: "Official Publisher Page",
          icon: <Icons.bookstore className="h-4 w-4" />,
          href: "https://www.kodlab.com/programlama/81-qt-programlama-9786052118238.html",
        },
        {
          title: "Available on Hepsiburada",
          icon: <Icons.shoppingCart className="h-4 w-4" />,
          href: "https://www.hepsiburada.com/kodlab-yayinlari-uygulamalar-ile-qt-pm-HB00000DQ82E",
        },
      ],
    },
    {
      title: "A Shuttle Route Divergence Detection System",
      dates: "Oct 17, 2020",
      publisher:
        "ASYU2020 / 2020 Innovations In Intelligent Systems And Applications Conference",
      description:
        "A paper on an M2M information system that was published in IEEE.",
      isbn: "978-1-7281-9136-2",
      image: "/publication/2020-asyu.png",
      links: [
        {
          title: "View on IEEE Xplore",
          icon: <Icons.researchPaper className="h-4 w-4" />,
          href: "https://ieeexplore.ieee.org/document/9259829",
        },
      ],
    },
  ],
} as const;

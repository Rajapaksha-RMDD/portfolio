import { Project, Credential, Service, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'Dasindu Rajapaksha',
  firstName: 'DASINDU',
  lastName: 'RAJAPAKSHA',
  role: 'Frontend Developer & Full-Stack Builder',
  tagline: 'A builder who ships across the stack — from firmware to feed.',
  location: 'Colombo, Sri Lanka',
  timezone: 'Asia/Colombo',
  email: 'dasindudrajapaksha@gmail.com',
  whatsapp: '+94 71 356 8356',
  whatsappLink: 'https://wa.me/94713568356',
  github: 'https://github.com/Rajapaksha-RMDD',
  tiktok: 'https://www.tiktok.com/@dasindu_rajapaksha?_r=1&_t=ZS-986E8XDNGv2',
  tiktokHandle: '@dasindu_rajapaksha',
  facebook: 'https://www.facebook.com/share/18Npqm29dD/?mibextid=wwXIfr',
  linkedin: 'https://www.linkedin.com/in/dasindu-rajapaksha',
  photoUrl: './assets/profile.png',
  videoUrl: './assets/aistudio/video.mp4',
  status: 'AVAILABLE FOR WORK & FREELANCE',
  bio: `I'm a computing student and software developer who learns by shipping real things: full-stack systems for retail shops, IoT rigs wired by hand, and exam tools built because the official links failed. Frontend is where I spend most of my time — turning complex logic into something people actually enjoy using. Outside the code editor, I'm behind the lens producing short-form videography for TikTok and running a creator page on Facebook.`,
};

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Responsive, fluid, micro-animated interfaces built with React, TypeScript, and Flutter. Clean component architecture, strict typography, and layouts engineered to endure any screen width.',
    tags: ['React', 'Flutter', 'TypeScript', 'Tailwind CSS', 'Vite']
  },
  {
    number: '02',
    title: 'Full-Stack Web Systems',
    description: 'End-to-end web applications — from relational database schemas to responsive dashboards. Built with ASP.NET Core, Node.js/Express, SQL Server, and MySQL. Cart logic, invoice generation, alerts, and admin panels.',
    tags: ['ASP.NET Core', 'Node.js', 'Express', 'SQL Server', 'MySQL']
  },
  {
    number: '03',
    title: 'IoT & Embedded Systems',
    description: 'Hardware-to-cloud integration on ESP32 and Arduino microcontrollers. Sensor wiring, telemetry loops, relay actuations, and embedded real-time dashboards served straight from the chip.',
    tags: ['ESP32', 'Arduino C++', 'Sensors', 'I2C', 'Hardware']
  },
  {
    number: '04',
    title: 'Videography & Content Creation',
    description: 'Short-form cinematic video production for TikTok and Facebook. Filming, pacing, color grading, and creative storytelling with the exact same keen eye for detail applied to UI engineering.',
    tags: ['TikTok', 'Facebook Creator', 'Cinematography', 'Pacing']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'smart-queue',
    number: '01',
    title: 'Smart Queue Management System',
    description: 'Real-time queueing platform with a Flutter mobile application and a Node.js / Express / MySQL backend.',
    longDescription: 'Customers join queues remotely, receive live position notifications, and monitor estimated wait times in real time. Features multi-counter dispatching, QR ticket generation, and a centralized management console for queue managers.',
    tags: ['Flutter', 'Node.js', 'Express', 'MySQL', 'WebSockets'],
    category: 'mobile',
    githubUrl: 'https://github.com/Rajapaksha-RMDD/smart-queue-system',
    visualTag: 'Mobile · Backend',
    accentColors: {
      from: '#7f1d1d',
      to: '#18181b',
      border: 'rgba(239, 68, 68, 0.3)'
    },
    highlights: [
      'Live queue token tracking with estimated wait times',
      'Flutter mobile app for queue attendants and customers',
      'REST APIs and WebSocket live updates via Node.js/Express',
      'Relational schema in MySQL with counter routing logic'
    ]
  },
  {
    id: 'mobileshop-pos',
    number: '02',
    title: 'MobileShopPOS System',
    description: 'Full-stack enterprise point-of-sale and inventory system built with ASP.NET Core and SQL Server.',
    longDescription: 'Engineered specifically for electronics and phone retail stores. Features instantaneous barcode cart scanning, multi-tier pricing, invoice PDF generation, automated SMS/email customer notifications, and a real-time sales metric dashboard.',
    tags: ['ASP.NET Core', 'SQL Server', 'C#', 'Entity Framework'],
    category: 'fullstack',
    visualTag: 'Full-Stack · POS',
    accentColors: {
      from: '#991b1b',
      to: '#09090b',
      border: 'rgba(225, 29, 72, 0.35)'
    },
    highlights: [
      'High-throughput checkout cart logic with barcode lookup',
      'Automated invoice generation and SMS receipt dispatching',
      'Stock threshold warnings and automated re-order indicators',
      'Role-based permissions for cashier, manager, and administrator'
    ]
  },
  {
    id: 'project-approval',
    number: '03',
    title: 'Project Approval System (PAS)',
    description: 'Secure, web-based blind-match supervisor-student allocation system built with ASP.NET Core.',
    longDescription: 'Eliminates selection bias by implementing double-blind evaluation protocols. Students submit project proposals while academic supervisors review anonymized briefs and grade feasibility before final automated matchmaking.',
    tags: ['ASP.NET Core', 'C#', 'MVC', 'SQL Server'],
    category: 'fullstack',
    githubUrl: 'https://github.com/Rajapaksha-RMDD/Project-Approval-System-',
    visualTag: 'Full-Stack · Academic',
    accentColors: {
      from: '#881337',
      to: '#111827',
      border: 'rgba(244, 63, 94, 0.3)'
    },
    highlights: [
      'Double-blind evaluation protocol to guarantee impartial grading',
      'Proposal revision tracking with supervisor feedback annotations',
      'Automated matching algorithm pairing topics with faculty domains',
      'Role-based authentication with secure session management'
    ]
  },
  {
    id: 'esp32-irrigation',
    number: '04',
    title: 'ESP32 Smart Irrigation System',
    description: 'Automated agriculture hardware rig with soil telemetry, ultrasonic water level monitoring, and embedded web server.',
    longDescription: 'Engineered on an ESP32 microcontroller with capacitive soil moisture probes, relay-driven submersible water pumps, ultrasonic tank depth sensing, and an I2C OLED display. Runs an internal HTTP server for real-time telemetry control over Wi-Fi.',
    tags: ['ESP32', 'Arduino C++', 'IoT', 'Hardware Sensors'],
    category: 'iot',
    visualTag: 'Hardware · Firmware',
    accentColors: {
      from: '#450a0a',
      to: '#1c1917',
      border: 'rgba(239, 68, 68, 0.25)'
    },
    highlights: [
      'Autonomous watering threshold logic based on capacitive soil sensors',
      'Ultrasonic depth telemetry preventing pump dry-run damage',
      'Embedded HTTP dashboard served directly from ESP32 memory',
      'I2C hardware display rendering live field metrics'
    ]
  },
  {
    id: 'stoxy-inventory',
    number: '05',
    title: 'Stoxy — Mobile Inventory App',
    description: 'Flutter inventory management application for streamlined on-shelf stock tracking in retail shops.',
    longDescription: 'Designed for small and medium businesses to replace paper inventory books with an offline-capable, lightning-fast mobile catalog. Supports barcode camera scanning, category sorting, batch updating, and instant low-stock alerts.',
    tags: ['Flutter', 'Dart', 'Mobile UI', 'SQLite'],
    category: 'mobile',
    githubUrl: 'https://github.com/Rajapaksha-RMDD/Inventory-Application-Stoxy-',
    visualTag: 'Flutter · Mobile',
    accentColors: {
      from: '#7f1d1d',
      to: '#0f172a',
      border: 'rgba(225, 29, 72, 0.3)'
    },
    highlights: [
      'Offline-first local storage with fast barcode lookup',
      'Touch-optimized quantity incrementing and batch transfers',
      'Visual stock status indicators and exportable inventory sheets',
      'Minimalist ergonomic mobile UI built in Dart/Flutter'
    ]
  },
  {
    id: 'sqa-quiz',
    number: '06',
    title: 'SQA Interactive Exam Simulator',
    description: 'Interactive exam prep application featuring 142 categorized questions across seven course modules.',
    longDescription: 'Built to give computing students a reliable, uninterrupted study environment with instant answer explanations, timed mock test simulations, score distribution tracking, and bookmarking for difficult topics.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'web',
    visualTag: 'Interactive Web',
    accentColors: {
      from: '#581c87',
      to: '#09090b',
      border: 'rgba(168, 85, 247, 0.3)'
    },
    highlights: [
      '142 curated curriculum questions across 7 core software engineering modules',
      'Instant feedback with detailed answer explanations and rationale',
      'Timed examination mode simulating actual testing conditions',
      'Local storage tracking for weak-area revision'
    ]
  }
];

export const MORE_REPOSITORIES = [
  {
    title: 'Utility Management System',
    category: 'ASP.NET · C#',
    description: 'Comprehensive utility consumption monitoring and invoice accounting system.',
    url: 'https://github.com/Rajapaksha-RMDD/Utility-Management-System-Using-C-'
  },
  {
    title: 'Uvis Kitchen Website',
    category: 'JavaScript · Responsive Web',
    description: 'Interactive digital storefront and menu platform for a gourmet culinary brand.',
    url: 'https://github.com/Rajapaksha-RMDD/Uvis-Kitchen-Web-Site'
  },
  {
    title: 'Student Management CRUD',
    category: 'Flutter · Firebase',
    description: 'Cloud-synced academic database application for managing student portfolios and grades.',
    url: 'https://github.com/Rajapaksha-RMDD/CRUD_Application_With_Firebase'
  },
  {
    title: 'Character Viewer Practice Build',
    category: 'HTML · CSS · DOM',
    description: 'Frontend architectural practice project exploring responsive character data cards.',
    url: 'https://github.com/Rajapaksha-RMDD/character-viewer'
  },
  {
    title: 'Greeting App Warm-up',
    category: 'JavaScript · DOM API',
    description: 'Lightweight interactive DOM event demonstration exploring localized greeting logic.',
    url: 'https://github.com/Rajapaksha-RMDD/greeting-app'
  }
];

export const CREDENTIALS: Credential[] = [
  {
    id: 'cred-1',
    title: 'Full-Stack Software Architecture',
    issuer: 'Computing Degree Program',
    year: '2024',
    badge: 'ADVANCED DIPLOMA',
    description: 'Comprehensive specialization in ASP.NET Core, Node.js backend pipelines, relational database normalization, and secure RESTful API development.',
    skills: ['ASP.NET Core', 'Node.js', 'SQL Server', 'REST APIs', 'Software Design']
  },
  {
    id: 'cred-2',
    title: 'React.js Component Architecture',
    issuer: 'Professional Development',
    year: '2024',
    badge: 'CERTIFIED',
    description: 'Mastery of modern React ecosystem: custom hooks, state machines, performance profiling, responsive layout systems, and component isolation.',
    skills: ['React 19', 'TypeScript', 'State Management', 'Tailwind CSS']
  },
  {
    id: 'cred-3',
    title: 'Cross-Platform Mobile Development',
    issuer: 'Mobile Engineering Track',
    year: '2023',
    badge: 'SPECIALIZATION',
    description: 'Native-feel iOS and Android engineering with Flutter & Dart: state management, camera hardware access, local SQLite caching, and asynchronous UI.',
    skills: ['Flutter', 'Dart', 'Mobile Architecture', 'Offline Caching']
  },
  {
    id: 'cred-4',
    title: 'IoT & Microcontroller Firmware',
    issuer: 'Embedded Systems Lab',
    year: '2023',
    badge: 'HARDWARE CERT',
    description: 'Hands-on hardware development on ESP32 & Arduino platforms: I2C protocols, ADC sensor telemetry, relay driver circuits, and low-power Wi-Fi loops.',
    skills: ['ESP32', 'Arduino C++', 'Circuit Wiring', 'Telemetry Protocols']
  },
  {
    id: 'cred-5',
    title: 'Relational Database Engineering',
    issuer: 'Database Administration',
    year: '2023',
    badge: 'DATABASE SPEC',
    description: 'Query optimization, indexing strategies, transaction ACID properties, stored procedures, and schema normalization in SQL Server & MySQL.',
    skills: ['SQL Server', 'MySQL', 'Relational Design', 'Query Tuning']
  }
];

export const SERVICES_LIST: Service[] = SERVICES;

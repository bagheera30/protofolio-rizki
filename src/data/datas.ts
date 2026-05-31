

export interface projek {
    title: string,
    desc: string,
    link: string,
    img: string,
    stack: Array<string>,
    github: string,
}

export interface Cerf {
    title: string,
    org: string
    year: string,
    img: string,
    id: string,
    link: string
}

export type JourneyCategory =
    | "Education"
    | "Organization"
    | "Internship"
    | "Project"
    | "Career";

export interface Journey {
    id: number;
    category: JourneyCategory;
    period: string;
    title: string;
    company: string;
    description: string;
    technologies: string[];
}
export const stackLogos: Record<string, string> = {
    // Backend
    "Node.js":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    Programming:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",

    "Software Development":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    "System Analysis":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    Express:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",

    Java:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",

    PostgreSQL:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",

    Neo4j:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",

    Swagger:
        "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg",

    "REST API":
        "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",

    // Frontend
    "Vue.js":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",

    TypeScript:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",

    JavaScript:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

    Tailwind:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",

    "Astro.js":
        "https://astro.build/assets/press/astro-icon-light.svg",

    Vercel:
        "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",

    // Authentication
    JWT:
        "https://jwt.io/img/pic_logo.svg",

    OAuth:
        "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg",

    OAuth2:
        "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg",

    // Database & Architecture
    Database:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

    "Database Design":
        "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",

    "System Design":
        "https://cdn-icons-png.flaticon.com/512/2166/2166823.png",

    "Backend Architecture":
        "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",

    "Layered Architecture":
        "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",

    // Analysis & Documentation
    BPMN:
        "https://cdn-icons-png.flaticon.com/512/2772/2772165.png",

    UML:
        "https://cdn-icons-png.flaticon.com/512/6295/6295417.png",

    ERD:
        "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",

    "Requirement Analysis":
        "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",

    // Soft Skills
    Leadership:
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

    Communication:
        "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",

    Partnership:
        "https://cdn-icons-png.flaticon.com/512/1534/1534959.png",

    Recruitment:
        "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",

    "Human Resource":
        "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",

    "Project Management":
        "https://cdn-icons-png.flaticon.com/512/906/906334.png",

    "Public Speaking":
        "https://cdn-icons-png.flaticon.com/512/1995/1995579.png",

    "Event Management":
        "https://cdn-icons-png.flaticon.com/512/3652/3652191.png",
};

export const projects = [
    {
        id: 1,
        title: "Audit Trail Management System (ATMS)",
        desc: "Sistem berbasis web dengan REST API menggunakan Node.js & Express untuk mencatat log aktivitas pengguna dan integrasi dengan service lain seperti camunda dan minio.",
        link: "https://atms-project.vercel.app/login",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        stack: ["Node.js", "Express", "REST API"],
        github: "https://github.com/username/atms",
    },
    {
        id: 2,
        title: "Wspend",
        desc: "Aplikasi web toko online dengan fitur katalog, keranjang belanja, dan sistem pembayaran.",
        link: "https://web-ecommers.vercel.app/",
        stack: ["Astro.js", "Tailwind", "Vercel"],
        github: "https://github.com/username/wspend",
    },
    {
        id: 3,
        title: "Backend Pegawai Management",
        desc: "Membangun backend untuk management projek antara pegawai dengan manager.",
        link: "",
        stack: ["Express", "Neo4j", "Swagger"],
        github: "https://github.com/username/backend-pegawai",
    },
    {
        id: 4,
        title: "Branch Delevery Service",
        desc: "Membangun backend untuk teller menggunakan untuk melayani nasabah",
        link: "",
        stack: ["Java", "PostgreSQL"],
        github: "https://github.com/username/backend-pegawai",
    },
];
export const skills = [
    { name: "JavaScript", level: 90, levelName: "Expert" },
    { name: "Vue.js", level: 85, levelName: "Advanced" },
    { name: "Node.js", level: 80, levelName: "Advanced" },
    { name: "Tailwind CSS", level: 90, levelName: "Expert" },
    { name: "TypeScript", level: 75, levelName: "Intermediate" },
    { name: "MongoDB", level: 70, levelName: "Intermediate" },
];

export const certificates: Cerf[] = [
    {
        title: "Computer Vision.",
        org: "kaggle",
        year: "2025",
        img: "/certif/Computer.webp",
        id: "Computer Vision-2025",
        link: "https://www.kaggle.com/learn/certification/muhammadrizkialfian/computer-vision",
    },
    {
        title: "Intermediate Machine Learning.",
        org: "kaggle",
        year: "2025",
        img: "/certif/Intermediate-Machine-Learning.webp",
        id: "Intermediate Machine Learning-2023",
        link: "https://www.kaggle.com/learn/certification/muhammadrizkialfian/intermediate-machine-learning",
    },
    {
        title: "Intro to Deep Learning.",
        org: "kaggle",
        year: "2025",
        img: "/certif/Introto-Deep.webp",
        id: "Intro to Deep Learning-2025",
        link: "https://www.kaggle.com/learn/certification/muhammadrizkialfian/intro-to-deep-learning",
    },
    {
        title: "Basic javascript",
        org: "hacker Rank",
        year: "2023",
        img: "/certif/javascript.webp",
        id: "FBOBA98E555C",
        link: "https://www.hackerrank.com/certificates/fb08a98e555c",
    },
    {
        title: "Linux command line: From zero to Hero",
        org: "udemy",
        img: "/certif/linux.webp",
        year: "2025",
        id: "UC-bac82a54-3421-44b3-b197-60be603cd0a6",
        link: "https://www.ude.my/UC-bac82a54-3421-44b3-b197-60be603cd0a6",
    },
];

export const expirence = [
    {
        id: 1,
        perusahaan: 'sugity creative',
        type: 'inteship',
        name: 'build engine data',
        tahun: 2024,
        deskiripsi: 'merupakan website untuk memadai kegiatan yang tadinya dalam bentuk fisik ke dalam digitalisasi'
    }
]

export const journeys: Journey[] = [
    {
        id: 1,
        category: "Education",
        period: "2021",
        title: "Started Software Engineering",
        company: "Telkom University",
        description:
            "Started my journey in Software Engineering, learning programming fundamentals, databases, networking, and software development principles.",
        technologies: [
            "Programming",
            "Database",
            "Software Development",
        ],
    },

    {
        id: 2,
        category: "Organization",
        period: "2023",
        title: "Building Leadership Skills",
        company: "HIMA RPL & PERMISI TEL-U",
        description:
            "Led external relations and human resource initiatives while managing events, partnerships, and student communities.",
        technologies: [
            "Leadership",
            "Public Speaking",
            "Project Management",
        ],
    },

    {
        id: 3,
        category: "Internship",
        period: "2024",
        title: "Digital Transformation Project",
        company: "PT Sugity Creatives",
        description:
            "Worked closely with engineers to transform manual business processes into digital systems through requirement analysis and system design.",
        technologies: [
            "BPMN",
            "UML",
            "ERD",
            "System Analysis",
        ],
    },

    {
        id: 5,
        category: "Internship",
        period: "2025",
        title: "Backend Engineering Experience",
        company: "PT Gunung Amal Solution International",
        description:
            "Designed scalable REST APIs, implemented authentication systems, and optimized Neo4j graph databases for business applications.",
        technologies: [
            "Node.js",
            "Express",
            "Neo4j",
            "JWT",
            "OAuth",
        ],
    },
    {
        id: 8,
        category: "Internship",
        period: "2026",
        title: "Backend Developer",
        company: "Bank Muamalat Indonesia",
        description:
            "Developing secure banking services, transaction processing systems, and scalable backend architectures for teller applications.",
        technologies: [
            "Java",
            "PostgreSQL",
            "REST API",
        ],
    },
];
export const categoryStyles: Record<
    JourneyCategory,
    {
        color: string;
        icon: string;
    }
> = {
    Education: {
        color:
            "bg-blue-500/10 text-blue-400 border-blue-500/20",
        icon: "🎓",
    },

    Organization: {
        color:
            "bg-purple-500/10 text-purple-400 border-purple-500/20",
        icon: "🤝",
    },

    Internship: {
        color:
            "bg-amber-500/10 text-amber-400 border-amber-500/20",
        icon: "💼",
    },

    Project: {
        color:
            "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
        icon: "🚀",
    },

    Career: {
        color:
            "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        icon: "🏆",
    },
};
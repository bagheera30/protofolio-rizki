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
    id: string,
    link: string
}
export const stackLogos: Record<string, string> = {
    "Node.js":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    Express:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "REST API":
        "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
    "Astro.js":
        "https://miro.medium.com/v2/resize:fit:1400/1*nLbfO_PdTSpeCdZQuUr8RQ.png",
    Tailwind:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    Vercel:
        "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    Neo4j:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
    Swagger:
        "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg",
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
        id: "Computer Vision-2025",
        link: "https://www.kaggle.com/learn/certification/muhammadrizkialfian/computer-vision",
    },
    {
        title: "Intermediate Machine Learning.",
        org: "kaggle",
        year: "2025",
        id: "Intermediate Machine Learning-2023",
        link: "https://www.kaggle.com/learn/certification/muhammadrizkialfian/intermediate-machine-learning",
    },
    {
        title: "Intro to Deep Learning.",
        org: "kaggle",
        year: "2025",
        id: "Intro to Deep Learning-2025",
        link: "https://www.kaggle.com/learn/certification/muhammadrizkialfian/intro-to-deep-learning",
    },
    {
        title: "Basic javascript",
        org: "hacker Rank",
        year: "2023",
        id: "FBOBA98E555C",
        link: "https://www.hackerrank.com/certificates/fb08a98e555c",
    },
    {
        title: "Linux command line: From zero to Hero",
        org: "udemy",
        year: "2025",
        id: "UC-bac82a54-3421-44b3-b197-60be603cd0a6",
        link: "https://www.ude.my/UC-bac82a54-3421-44b3-b197-60be603cd0a6",
    },
];
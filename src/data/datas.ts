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

export const projects = [
    {
        id: 1,
        title: "Audit Trail Management System (ATMS)",
        desc: "Sistem berbasis web dengan REST API menggunakan Node.js & Express untuk mencatat log aktivitas pengguna dan integrasi dengan service lain seperti camunda dan minio.",
        link: "/projek/1",
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
        id: "Intro to Deep Learning-2024",
        link: "https://www.kaggle.com/learn/certification/muhammadrizkialfian/intro-to-deep-learning",
    },
    {
        title: "Basic javascript",
        org: "hacker Rank",
        year: "2023",
        id: "FBOBA98E555C",
        link: "https://www.hackerrank.com/certificates/fb08a98e555c",
    },
];
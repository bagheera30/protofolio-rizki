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
        title: "Audit Trail Management System (ATMS)",
        desc: "Sistem berbasis web dengan REST API menggunakan Node.js & Express untuk mencatat log aktivitas pengguna dan integrasi dengan service lain seperti camunda dan minio.",
        link: "https://atms-project.vercel.app/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        stack: ["Node.js", "Express", "REST API"],
        github: "https://github.com/username/atms",
    },
    {
        title: "Wspend",
        desc: "Aplikasi web toko online dengan fitur katalog, keranjang belanja, dan sistem pembayaran.",
        link: "https://web-ecommers.vercel.app/",
        stack: ["Astro.js", "Tailwind", "Vercel"],
        github: "https://github.com/username/wspend",
    },
    {
        title: "Backend Pegawai Management",
        desc: "Membangun backend untuk management projek antara pegawai dengan manager.",
        link: "#",
        stack: ["Express", "Neo4j", "Swagger"],
        github: "https://github.com/username/backend-pegawai",
    },
];

export const certificates: Cerf[] = [
    {
        title: "Second Winner - Hackathon FindIT 2024",
        org: "FindIT 2024",
        year: "2024",
        id: "FINDIT-2024",
        link: "https://findit-hackathon.com/cert/12345",
    },
    {
        title: "Top 10 Finalist - Gemastik XVI",
        org: "Kemendikbud",
        year: "2023",
        id: "GEMASTIK-2023",
        link: "https://gemastik.id/cert/abcdef",
    },
    {
        title: "Completion - Backend Developer",
        org: "Dicoding Indonesia",
        year: "2024",
        id: "DICODING-2024",
        link: "https://dicoding.com/cert/xxxx",
    },
];
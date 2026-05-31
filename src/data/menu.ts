export interface Menu {
  name: string;
  href: string;
}
export interface Cerf {
  title: string,
  org: string
  year: string,
  id: string,
  link: string
}
const menus: Menu[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projek" },
  { name: "Certificates", href: "/certificates" },
  { name: "Journey", href: "/journey" },
  { name: "Contact", href: "/contact" },
];

export default menus;


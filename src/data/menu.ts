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
  { name: "Contact", href: "/contact" },
  { name: "Cetifived", href: "/cartived" },
];

export default menus;


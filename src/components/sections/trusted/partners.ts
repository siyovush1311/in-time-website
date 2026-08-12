export interface Partner {
  id: number;
  name: string;
  logo: string;
  href?: string;
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "BIMA",
    logo: "/logos/bima.svg",
    href: "https://bima.tj",
  },
  {
    id: 2,
    name: "TGEM",
    logo: "/logos/tgem.jpg",
    href: "https://tgem.tj/",
  },
  {
    id: 3,
    name: "Agentstva.TJ",
    logo: "/logos/agentstva.jpg",
    href: "https://agentstva.tj",
  },
];
import { FooterLink, SocialLink } from "@/types/footer";

export const quickLinks: FooterLink[] = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Types of Plants", href: "/plants" },
  { id: 3, label: "Contact", href: "/contact" },
  { id: 4, label: "Privacy Policy", href: "/privacy" },
];

export const socialLinks: SocialLink[] = [
  { id: 1, label: "Facebook", href: "#", icon: "FB" },
  { id: 2, label: "Twitter", href: "#", icon: "TW" },
  { id: 3, label: "LinkedIn", href: "#", icon: "LI" },
];

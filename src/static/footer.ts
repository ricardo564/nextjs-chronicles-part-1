import { FooterLink, SocialLink } from "@/types/footer";

export const quickLinks: FooterLink[] = [
  { id: 1, translationKey: "home", href: "/" },
  { id: 2, translationKey: "typesOfPlants", href: "/plants" },
  { id: 3, translationKey: "contactLink", href: "/contact" },
  { id: 4, translationKey: "privacyPolicy", href: "/privacy" },
];

export const socialLinks: SocialLink[] = [
  { id: 1, translationKey: "facebook", href: "#", icon: "FB" },
  { id: 2, translationKey: "twitter", href: "#", icon: "TW" },
  { id: 3, translationKey: "linkedin", href: "#", icon: "LI" },
];

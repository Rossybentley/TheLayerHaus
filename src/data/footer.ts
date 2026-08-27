import {
  FiInstagram,
  FiFacebook,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

export const footerLinks = {
  pages: [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Projects", href: "#projects" },
    { title: "Gallery", href: "#gallery" },
    { title: "Contact", href: "#contact" },
  ],

  services: [
    "Luxury Curtains",
    "Window Blinds",
    "Interior Styling",
    "Space Planning",
    "Installation",
  ],
};

export const contactInfo = [
  {
    icon: FiPhone,
    text: "+234 XXX XXX XXXX",
  },
  {
    icon: FiMail,
    text: "hello@thelayerhaus.com",
  },
  {
    icon: FiMapPin,
    text: "Yaba, Lagos State",
  },
];

export const socialLinks = [
  {
    icon: FiInstagram,
    href: "https://instagram.com/thelayerhaus",
  },
  {
    icon: FiFacebook,
    href: "#",
  },
];

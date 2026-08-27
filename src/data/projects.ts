import project1 from "../assets/images/projects/project-01.jpeg";
import project2 from "../assets/images/projects/project-02.jpeg";
import project3 from "../assets/images/projects/project-03.jpeg";

export const categories = [
  "All",
  "Curtains",
  "Blinds",
  "Wallpaper",
  "Interior Styling",
  "Commercial",
];

export const projects = [
  {
    id: 1,
    slug: "luxury-bedroom-curtains",
    title: "Luxury Bedroom Curtains",
    category: "Curtains",
    location: "Yaba, Lagos",
    image: project1,
    description:
      "Custom-made luxury curtains designed to create a warm, elegant, and relaxing bedroom atmosphere.",
  },

  {
    id: 2,
    slug: "modern-master-bedroom",
    title: "Modern Master Bedroom",
    category: "Curtains",
    location: "Lagos",
    image: project2,
    description:
      "A complete curtain installation that brought softness, privacy, and sophistication to the space.",
  },

  {
    id: 3,
    slug: "elegant-living-room-installation",
    title: "Elegant Living Room Installation",
    category: "Interior Styling",
    location: "Lagos",
    image: project3,
    description:
      "A living room transformation featuring elegant styling, balanced colours, and carefully selected décor.",
  },
];

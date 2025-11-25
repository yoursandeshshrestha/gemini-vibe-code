import { SourcingStep, Material, Testimonial } from "./types";

export const BRAND_NAME = "AELIA";

export const MATERIALS: Material[] = [
  {
    id: "m1",
    name: "Tuscan Vachetta",
    origin: "Santa Croce, Italy",
    image: "https://images.unsplash.com/photo-1550259114-ad7188f0a967?q=80&w=2080&auto=format&fit=crop",
    description: "Vegetable-tanned leather that develops a unique patina over time."
  },
  {
    id: "m2",
    name: "Belgian Linen",
    origin: "Flanders, Belgium",
    image: "https://images.unsplash.com/photo-1598300056393-8dd33ecb4d28?q=80&w=2000&auto=format&fit=crop",
    description: "Unbleached, tightly woven linen lining for durability and breathability."
  },
  {
    id: "m3",
    name: "Solid Brass",
    origin: "Osaka, Japan",
    image: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=2070&auto=format&fit=crop",
    description: "Sand-cast hardware designed to age gracefully alongside the leather."
  }
];

export const SOURCING_STEPS: SourcingStep[] = [
  {
    id: 1,
    title: "The Farm",
    location: "Auvergne, France",
    description: "Ethically raised cattle, free-roaming pastures, ensuring minimal grain scarring."
  },
  {
    id: 2,
    title: "The Tannery",
    location: "Tuscany, Italy",
    description: "Six weeks of vegetable tanning using chestnut bark and natural oils."
  },
  {
    id: 3,
    title: "The Atelier",
    location: "Ubrique, Spain",
    description: "Hand-stitched by third-generation artisans using traditional saddle stitching."
  },
  {
    id: 4,
    title: "The Keeper",
    location: "You",
    description: "A blank canvas ready to acquire character through your journey."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Elena R.",
    location: "Milan",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop",
    text: "It feels less like a bag and more like an heirloom I haven't passed down yet."
  },
  {
    id: "t2",
    author: "James H.",
    location: "London",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1920&auto=format&fit=crop",
    text: "The patina after six months is breathtaking. It tells the story of my travels."
  },
  {
    id: "t3",
    author: "Sophia L.",
    location: "New York",
    image: "https://images.unsplash.com/photo-1445633760012-d748f6e70335?q=80&w=1920&auto=format&fit=crop",
    text: "Quiet luxury in its purest form. No logos, just quality."
  },
  {
    id: "t4",
    author: "Marcus B.",
    location: "Berlin",
    image: "https://images.unsplash.com/photo-1559563458-52c69f835564?q=80&w=1920&auto=format&fit=crop",
    text: "The smell of the leather upon opening the box... unforgettable."
  }
];

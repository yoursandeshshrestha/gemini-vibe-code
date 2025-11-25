import { Project, Material, Service, JournalEntry } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "The Silent House",
    year: "2023",
    category: "Residential",
    image: "https://picsum.photos/seed/arche1/1600/1200"
  },
  {
    id: 2,
    title: "Kyoto Pavilion",
    year: "2022",
    category: "Cultural",
    image: "https://picsum.photos/seed/arche2/1600/1200"
  },
  {
    id: 3,
    title: "Brutal Cliffside",
    year: "2024",
    category: "Concept",
    image: "https://picsum.photos/seed/arche3/1600/1200"
  },
  {
    id: 4,
    title: "Urban Sanctuary",
    year: "2023",
    category: "Commercial",
    image: "https://picsum.photos/seed/arche4/1600/1200"
  }
];

export const MATERIALS: Material[] = [
  {
    id: "m1",
    name: "Raw Oak",
    origin: "French Alps",
    texture: "https://picsum.photos/seed/woodtext/800/800",
    description: "Sustainably harvested ancient timber with deep grain patterns."
  },
  {
    id: "m2",
    name: "Roman Travertine",
    origin: "Tivoli, Italy",
    texture: "https://picsum.photos/seed/stonetext/800/800",
    description: "Unfilled surface emphasizing natural porosity and history."
  },
  {
    id: "m3",
    name: "Belgian Linen",
    origin: "Flanders",
    texture: "https://picsum.photos/seed/linen/800/800",
    description: "Heavyweight, tactile fabric that softens acoustics."
  }
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Residential Architecture",
    description: "Crafting intimate spaces for living.",
    image: "https://picsum.photos/seed/interior/1200/800"
  },
  {
    id: "s2",
    title: "Commercial Spaces",
    description: "Brand identities translated into volume.",
    image: "https://picsum.photos/seed/office/1200/800"
  },
  {
    id: "s3",
    title: "Landscape Design",
    description: "Blurring the line between built and grown.",
    image: "https://picsum.photos/seed/garden/1200/800"
  }
];

export const JOURNAL: JournalEntry[] = [
  { id: 1, type: 'image', content: "https://picsum.photos/seed/j1/600/800", date: "Oct 12" },
  { id: 2, type: 'quote', content: "Architecture starts when you carefully put two bricks together. There it begins.", author: "Mies van der Rohe" },
  { id: 3, type: 'image', content: "https://picsum.photos/seed/j2/600/600", date: "Sep 28" },
  { id: 4, type: 'image', content: "https://picsum.photos/seed/j3/600/900", date: "Sep 15" },
  { id: 5, type: 'quote', content: "Light creates ambience and feel of a place, as well as the expression of a structure.", author: "Le Corbusier" },
  { id: 6, type: 'image', content: "https://picsum.photos/seed/j4/600/700", date: "Aug 02" },
];

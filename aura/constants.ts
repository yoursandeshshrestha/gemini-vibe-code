import { Product, Ingredient, JournalEntry } from './types';

export const COLORS = {
  white: '#FFFFFF',
  snow: '#FAFAFA',
  charcoal: '#4A4A4A',
  blush: '#F7E7E6',
  mint: '#E8F5E9',
  vapor: '#F0F0F0',
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Luminous Dew Serum",
    price: "$85",
    image: "https://picsum.photos/seed/aura1/600/800",
    description: "Hydration captured in light."
  },
  {
    id: 2,
    name: "Cloud Barrier Cream",
    price: "$68",
    image: "https://picsum.photos/seed/aura2/600/800",
    description: "Weightless protection."
  },
  {
    id: 3,
    name: "Botanical Essence Mist",
    price: "$42",
    image: "https://picsum.photos/seed/aura3/600/800",
    description: "A gentle awakening."
  },
  {
    id: 4,
    name: "Moonlight Recovery Oil",
    price: "$95",
    image: "https://picsum.photos/seed/aura4/600/800",
    description: "Repair while you dream."
  }
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: 1,
    name: "White Tea Extract",
    description: "Harvested at first light.",
    benefit: "Potent Antioxidant Protection",
    image: "https://picsum.photos/seed/tea/800/1200"
  },
  {
    id: 2,
    name: "Hyaluronic Acid",
    description: "Pure molecular hydration.",
    benefit: "Deep Plumping & Retention",
    image: "https://picsum.photos/seed/water/800/1200"
  },
  {
    id: 3,
    name: "Rose Quartz",
    description: "Mineral essence.",
    benefit: "Radiance & Circulation",
    image: "https://picsum.photos/seed/crystal/800/1200"
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  { id: 1, title: "Rituals of Morning Light", category: "Wellness", image: "https://picsum.photos/seed/light/600/400" },
  { id: 2, title: "The Science of Hydration", category: "Education", image: "https://picsum.photos/seed/science/600/400" },
  { id: 3, title: "Stillness in Motion", category: "Mindfulness", image: "https://picsum.photos/seed/move/600/400" },
  { id: 4, title: "Botanical Intelligence", category: "Nature", image: "https://picsum.photos/seed/plant/600/400" },
];
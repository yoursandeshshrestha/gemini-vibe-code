import { Product, Material, TimelineEvent } from './types';

export const COLLECTIONS: Product[] = [
  {
    id: 'c1',
    name: 'The 12" Skillet',
    weight: 3.2,
    material: 'Cast Iron',
    image: 'https://picsum.photos/id/225/600/600',
    description: 'Heirloom quality, pre-seasoned with flax oil.'
  },
  {
    id: 'c2',
    name: 'Saucier Copper',
    weight: 1.8,
    material: 'Aged Copper',
    image: 'https://picsum.photos/id/366/600/600',
    description: 'Rapid heat conduction with a tin lining.'
  },
  {
    id: 'c3',
    name: 'Carbon Wok',
    weight: 2.1,
    material: 'Carbon Steel',
    image: 'https://picsum.photos/id/1060/600/600',
    description: 'Hand-hammered for the perfect sear.'
  },
  {
    id: 'c4',
    name: 'Dutch Oven',
    weight: 5.4,
    material: 'Enameled Iron',
    image: 'https://picsum.photos/id/102/600/600',
    description: 'Slow cooking perfection, built like a tank.'
  }
];

export const MATERIALS: Material[] = [
  {
    id: 'm1',
    name: 'Carbon Steel',
    temp: '1400°C',
    process: 'Forged & Folded',
    image: 'https://picsum.photos/id/1006/800/800',
    description: 'Responsive to heat, practically indestructible.'
  },
  {
    id: 'm2',
    name: 'Oak Heartwood',
    temp: '20°C',
    process: 'Carved & Oiled',
    image: 'https://picsum.photos/id/1008/800/800',
    description: 'Aged timber handles that cool rapidly.'
  },
  {
    id: 'm3',
    name: 'Raw Copper',
    temp: '1085°C',
    process: 'Spun & Hammered',
    image: 'https://picsum.photos/id/252/800/800',
    description: 'The ultimate conductor. Reactive and alive.'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '1892',
    title: 'The First Spark',
    description: 'Foundry established in the smoky valleys of Pittsburgh.',
    image: 'https://picsum.photos/id/1011/400/300'
  },
  {
    year: '1924',
    title: 'War & Iron',
    description: 'Production shifts to essential heavy metals for the effort.',
  },
  {
    year: '1968',
    title: 'The Copper Era',
    description: 'Introduction of the "Chef\'s Standard" copper line.',
    image: 'https://picsum.photos/id/250/400/300'
  },
  {
    year: '2024',
    title: 'Digital Forge',
    description: 'Bringing heritage craft to the modern artisan.',
  }
];
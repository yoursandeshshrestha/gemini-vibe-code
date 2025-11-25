import { CarModel, Feature, TechComponent } from './types';

export const CAR_MODELS: CarModel[] = [
  {
    id: 'v-one',
    name: 'VELOCITÉ V1',
    tagline: 'THE PHANTOM',
    specs: { acceleration: '1.9s', range: '600mi', hp: '1200' },
    image: 'https://picsum.photos/800/400?grayscale&blur=1',
  },
  {
    id: 'v-gt',
    name: 'VELOCITÉ GT',
    tagline: 'CORNER KING',
    specs: { acceleration: '2.4s', range: '520mi', hp: '950' },
    image: 'https://picsum.photos/800/401?grayscale&blur=1',
  },
  {
    id: 'v-suv',
    name: 'VELOCITÉ X',
    tagline: 'FORCE OF NATURE',
    specs: { acceleration: '3.1s', range: '580mi', hp: '800' },
    image: 'https://picsum.photos/800/402?grayscale&blur=1',
  },
  {
    id: 'v-hyper',
    name: 'VELOCITÉ ZERO',
    tagline: 'ABSOLUTE ZERO',
    specs: { acceleration: '1.7s', range: '450mi', hp: '1600' },
    image: 'https://picsum.photos/800/403?grayscale&blur=1',
  },
];

export const TECH_COMPONENTS: TechComponent[] = [
  {
    id: 'battery',
    name: 'SOLID STATE CELL',
    description: 'Next-gen energy density with zero degradation.',
    specs: ['Density: 900Wh/L', 'Charge: 5min to 80%', 'Temp: -40°C to 80°C'],
  },
  {
    id: 'motor',
    name: 'MAGNETIC LEVITATION MOTOR',
    description: 'Frictionless propulsion system.',
    specs: ['RPM: 30,000', 'Torque: 2000Nm', 'Weight: 25kg'],
  },
  {
    id: 'chassis',
    name: 'CARBON NANO-WEAVE',
    description: 'Structural integrity meets featherlight mass.',
    specs: ['Tensile: 50x Steel', 'Weight: 800kg Total', 'Flex: Active'],
  },
];

export const FEATURES: Feature[] = [
  {
    id: 'pilot',
    title: 'NEURAL PILOT',
    description: 'Level 5 autonomy powered by quantum processing.',
    iconPath: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z M12 6v6l4 2',
  },
  {
    id: 'charge',
    title: 'INDUCTIVE LINK',
    description: 'Wireless charging at highway speeds.',
    iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  },
  {
    id: 'connect',
    title: 'HIVE MIND',
    description: 'Real-time traffic prediction via fleet learning.',
    iconPath: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
  },
];
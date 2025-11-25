export interface CarModel {
  id: string;
  name: string;
  tagline: string;
  specs: {
    acceleration: string;
    range: string;
    hp: string;
  };
  image: string;
}

export interface TechComponent {
  id: string;
  name: string;
  description: string;
  specs: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconPath: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
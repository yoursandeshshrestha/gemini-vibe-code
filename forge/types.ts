export interface Product {
  id: string;
  name: string;
  weight: number;
  image: string;
  description: string;
  material: string;
}

export interface Material {
  id: string;
  name: string;
  temp: string;
  process: string;
  image: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}
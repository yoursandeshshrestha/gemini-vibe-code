export interface Project {
  id: number;
  title: string;
  year: string;
  category: string;
  image: string;
}

export interface Material {
  id: string;
  name: string;
  origin: string;
  texture: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface JournalEntry {
  id: number;
  type: 'image' | 'quote';
  content: string;
  author?: string;
  date?: string;
}

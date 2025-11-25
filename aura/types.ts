export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

export interface Ingredient {
  id: number;
  name: string;
  description: string;
  benefit: string;
  image: string; // Using image to simulate macro video
}

export interface JournalEntry {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

export interface Material {
  id: string;
  name: string;
  origin: string;
  image: string;
  description: string;
}

export interface SourcingStep {
  id: number;
  title: string;
  description: string;
  location: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  image: string;
  text: string;
}

export interface ModuleItem {
  id: string;
  title: string;
  description: string;
  mockData: string;
}

export interface ArchitectureItem {
  id: string;
  title: string;
  description: string;
  detail: string;
  metric: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  impact: string;
  quote: string;
  dataPoint: string;
}
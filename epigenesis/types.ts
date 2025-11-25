export enum ProfileType {
  LONGEVITY = 'LONGEVITY',
  PERFORMANCE = 'PERFORMANCE',
  RESILIENCE = 'RESILIENCE'
}

export interface CaseStudy {
  id: number;
  name: string;
  title: string;
  metric: string;
  image: string;
  description: string;
}

export interface ParticleProps {
  count: number;
  shape: 'helix' | 'sphere' | 'cube' | 'torus' | 'explosion';
  color: string;
}

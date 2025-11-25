export interface InstallationProject {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  patternType: 'waves' | 'grid' | 'particles';
}

export interface LabItem {
  id: string;
  type: 'image' | 'code' | 'generative';
  content: string;
  span?: string; // col-span-2 etc
}

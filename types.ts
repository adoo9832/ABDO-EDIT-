
export interface VideoProject {
  id: string;
  title: string;
  category: 'Short-form' | 'Long-form' | 'Ad' | 'Documentary';
  thumbnail: string;
  videoUrl: string;
  retention?: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  index: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

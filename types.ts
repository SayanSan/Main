
export interface Program {
  title: string;
  specialization: string;
  pathway: string;
}

export interface Department {
  name: string;
  description: string;
  programs: Program[];
}

export interface School {
  id: string;
  name: string;
  icon: string;
  departments: Department[];
}

export interface Milestone {
  id: string;
  year: string;
  label: string;
  description: string;
  color: string;
}
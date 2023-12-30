export interface ProjectData {
  name: string;
  description: string;
  _id: string;
  imageUrl: string;
  githubURL: string;
  projectURL: string;
  deployed: boolean;
  technologies: string[];
}

export interface SkillData {
  name: string;
  _id: string;
  imageUrl: string;
  categories: string[];
}

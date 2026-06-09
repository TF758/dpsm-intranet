// src/types/project.ts

import { Department } from "./department";
import { Staff } from "./staff";

export type CollaborationDomain = "internal" | "external";

export interface Project {
  id: string;
  title: string;
  summary?: string;
  featuredImage?: string;
  department: Department;
  projectLeads: Staff[];
  collaborationDomain: CollaborationDomain;
  categories: string[];
  startDate?: string;
  endDate?: string;
  featured?: boolean;
  url?: string;
}

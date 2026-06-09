import { Department } from "./department";

export type ResourceType = "pdf" | "word" | "excel" | "powerpoint" | "link";

export interface Resource {
  id: string;

  title: string;

  description?: string;

  department: Department;

  resourceType: ResourceType;

  resourceFile: string;

  featured: boolean;

  date_created?: string;
  date_updated?: string;

  user_created?: string;
  user_updated?: string;
}

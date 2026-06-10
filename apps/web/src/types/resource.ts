import { Department } from "./department";

export type resource_type = "pdf" | "word" | "excel" | "powerpoint" | "link";

export interface Resource {
  id: string;

  title: string;

  description?: string;

  department: Department;

  resource_type: resource_type;

  resource_file: string;

  featured: boolean;

  date_created?: string;
  date_updated?: string;

  user_created?: string;
  user_updated?: string;
}

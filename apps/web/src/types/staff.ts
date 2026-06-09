import { Department } from "./department";

export interface Staff {
  id: string;
  first_name: string;
  last_name: string;
  job_title?: string;
  email: string;
  phone?: string;
  extension?: number;
  unit?: string;
  department: Department;
}

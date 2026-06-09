import { Department } from "./department";

export interface Staff {
  id: string;
  first_name: string;
  last_name: string;
  job_title: string;
  email: string;
  phone?: string;
  extension?: string;
  unit?: string;
  bio?: string;
  photo?: string;
  department: Department;
}

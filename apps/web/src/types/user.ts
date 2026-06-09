// src/types/user.ts

import { Department } from "./department";

export type UserRole =
  | "site_admin"
  | "department_admin"
  | "contributor"
  | "staff";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  department?: Department;
}

// src/types/department.ts

import { User } from "./user";

export interface Department {
  id: string;
  code: string;
  name: string;
  email?: string;
  phone?: string;
  mission?: string;
  location?: string;
  logo?: string;
}

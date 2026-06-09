// src/types/schema.ts

import { Department } from "./department";
import { Staff } from "./staff";

export interface Schema {
  departments: Department[];
  staff: Staff[];
}

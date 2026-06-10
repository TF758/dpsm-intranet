// src/types/schema.ts

import { Department } from "./department";
import { Resource } from "./resource";
import { Staff } from "./staff";

export interface Schema {
  departments: Department[];
  staff: Staff[];
  resources: Resource[];
}

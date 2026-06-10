// src/types/schema.ts

import { Department } from "./department";
import { News } from "./news";
import { Resource } from "./resource";
import { Staff } from "./staff";

export interface Schema {
  departments: Department[];
  staff: Staff[];
  resources: Resource[];
  news: News[];
}

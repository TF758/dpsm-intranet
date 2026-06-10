// components/departments/department-header.tsx

import { Department } from "@/types/department";

interface DepartmentHeaderProps {
  department: Department;
}

export function DepartmentHeader({ department }: DepartmentHeaderProps) {
  return (
    <div className="border-b pb-6">
      <h1 className="text-3xl font-bold">{department.name}</h1>

      {department.mission && (
        <p className="mt-2 text-muted-foreground max-w-3xl">
          {department.mission}
        </p>
      )}
    </div>
  );
}

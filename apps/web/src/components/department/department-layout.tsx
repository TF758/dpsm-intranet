import { ReactNode } from "react";

import { Department } from "@/types/department";

import { DepartmentHeader } from "./department-header";
import { DepartmentSidebar } from "./department-sidebar";
import { DepartmentMobileNav } from "./department-mobile-nav";

interface Props {
  children: ReactNode;
  department: Department;
}

export function DepartmentLayout({ children, department }: Props) {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 py-6">
      <DepartmentHeader department={department} />

      <DepartmentMobileNav department={department} />

      <div
        className="
          mt-6
          grid
          gap-6
          lg:grid-cols-[280px_1fr]
        "
      >
        <aside className="hidden lg:block">
          <DepartmentSidebar department={department} />
        </aside>

        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}

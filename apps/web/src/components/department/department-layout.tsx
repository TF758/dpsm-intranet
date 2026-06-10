// components/departments/department-layout.tsx

import { ReactNode } from "react";

import { DepartmentSidebar } from "./department-sidebar";
import { DepartmentMobileNav } from "./department-mobile-nav";
import { DepartmentHeader } from "./department-header";

import { Department } from "@/types/department";

interface DepartmentLayoutProps {
  department: Department;
  children: ReactNode;
}

export function DepartmentLayout({
  department,
  children,
}: DepartmentLayoutProps) {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 py-6">
      <DepartmentHeader department={department} />

      <DepartmentMobileNav department={department} />

      <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block">
          <DepartmentSidebar department={department} />
        </aside>

        <main>{children}</main>
      </div>
    </div>
  );
}

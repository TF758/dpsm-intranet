// components/departments/department-mobile-nav.tsx

"use client";

import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Department } from "@/types/department";

interface DepartmentMobileNavProps {
  department: Department;
}

export function DepartmentMobileNav({ department }: DepartmentMobileNavProps) {
  const router = useRouter();

  const base = `/departments/${department.code}`;

  return (
    <div className="mt-4 lg:hidden">
      <Select onValueChange={value => router.push(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Navigate Department" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value={base}>Overview</SelectItem>

          <SelectItem value={`${base}/staff`}>Staff</SelectItem>

          <SelectItem value={`${base}/news`}>News</SelectItem>

          <SelectItem value={`${base}/resources`}>Resources</SelectItem>

          <SelectItem value={`${base}/projects`}>Projects</SelectItem>

          <SelectItem value={`${base}/contact`}>Contact</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

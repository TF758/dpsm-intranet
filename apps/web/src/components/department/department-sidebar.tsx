// components/departments/department-sidebar.tsx

import Link from "next/link";

import { Department } from "@/types/department";

import {
  Building2,
  Newspaper,
  FolderOpen,
  Users,
  Mail,
  Briefcase,
} from "lucide-react";

interface DepartmentSidebarProps {
  department: Department;
}

const navItems = (slug: string) => [
  {
    label: "Overview",
    href: `/departments/${slug}`,
    icon: Building2,
  },
  {
    label: "Staff",
    href: `/departments/${slug}/staff`,
    icon: Users,
  },
  {
    label: "News",
    href: `/departments/${slug}/news`,
    icon: Newspaper,
  },
  {
    label: "Resources",
    href: `/departments/${slug}/resources`,
    icon: FolderOpen,
  },
  {
    label: "Projects",
    href: `/departments/${slug}/projects`,
    icon: Briefcase,
  },
  {
    label: "Contact",
    href: `/departments/${slug}/contact`,
    icon: Mail,
  },
];

export function DepartmentSidebar({ department }: DepartmentSidebarProps) {
  return (
    <nav className="rounded-lg border bg-card p-4">
      <ul className="space-y-2">
        {navItems(department.code).map(item => {
          const Icon = item.icon;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="
                    flex
                    items-center
                    gap-3
                    rounded-md
                    px-3
                    py-2
                    text-sm
                    hover:bg-muted
                    transition-colors
                  "
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

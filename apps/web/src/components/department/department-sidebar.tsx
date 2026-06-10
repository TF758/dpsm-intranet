"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Building2,
  Users,
  Briefcase,
  Newspaper,
  FolderOpen,
  Phone,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface DepartmentSidebarProps {
  department: {
    code: string;
    name: string;
  };
}

export function DepartmentSidebar({ department }: DepartmentSidebarProps) {
  const pathname = usePathname();

  const navigation = [
    {
      title: "Overview",
      href: `/departments/${department.code}`,
      icon: Building2,
    },
    {
      title: "Staff Directory",
      href: `/departments/${department.code}/staff`,
      icon: Users,
    },
    {
      title: "Projects",
      href: `/departments/${department.code}/projects`,
      icon: Briefcase,
    },
    {
      title: "News & Updates",
      href: `/departments/${department.code}/news`,
      icon: Newspaper,
    },
    {
      title: "Resources",
      href: `/departments/${department.code}/resources`,
      icon: FolderOpen,
    },
    {
      title: "Contact Information",
      href: `/departments/${department.code}/contact`,
      icon: Phone,
    },
  ];

  return (
    <aside
      className="
        sticky
        top-24
        space-y-4
      "
    >
      <div
        className="
          overflow-hidden
          rounded-xl
          border
          bg-card
        "
      >
        <div
          className="
            h-2
            bg-primary
          "
        />

        <div className="p-5">
          <h2
            className="
              font-semibold
              text-lg
            "
          >
            {department.name}
          </h2>

          <p
            className="
              mt-1
              text-md
              text-muted-foreground
            "
          >
            Department Navigation
          </p>
        </div>

        <div
          className="
            px-2
            pb-2
          "
        >
          <nav>
            <ul className="space-y-1">
              {navigation.map(item => {
                const Icon = item.icon;

                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        `
                        relative
                        flex
                        items-center
                        gap-3
                        rounded-lg
                        px-4
                        py-3
                        text-md
                        transition-all
                        `,
                        isActive
                          ? `
                            bg-primary/10
                            text-primary
                            font-medium
                          `
                          : `
                            text-muted-foreground
                            hover:bg-muted
                            hover:text-foreground
                          `,
                      )}
                    >
                      {isActive && (
                        <span
                          className="
                            absolute
                            left-0
                            top-1
                            bottom-1
                            w-1
                            rounded-r-full
                            bg-primary
                          "
                        />
                      )}

                      <Icon className="h-4 w-4 shrink-0" />

                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div
        className="
          rounded-xl
          border
          bg-card
          p-5
        "
      >
        <h3
          className="
            text-sm
            font-semibold
          "
        >
          Quick Facts
        </h3>

        <div
          className="
            mt-4
            space-y-3
            text-sm
          "
        >
          <div
            className="
              flex
              justify-between
            "
          >
            <span className="text-muted-foreground">Staff</span>

            <span className="font-medium">42</span>
          </div>

          <div
            className="
              flex
              justify-between
            "
          >
            <span className="text-muted-foreground">Projects</span>

            <span className="font-medium">12</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

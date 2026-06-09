"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { navigation } from "@/config/navigation";

import { DepartmentDropdown } from "./department-dropdown";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      className="
                hidden
                lg:flex
                items-center
                gap-2
                flex-1
                justify-center
                border-b-2
                border-transparent
            "
    >
      {navigation.map(item => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
                inline-flex
                items-center

                px-4
                py-2

                text-lg
                font-semibold

                rounded-md

                border-b-2
                transition-all

                ${
                  isActive
                    ? `
                            bg-[var(--dpsm-surface)]
                            border-[var(--dpsm-accent)]
                            text-[var(--dpsm-primary)]
                          `
                    : `
                            border-transparent
                            text-[var(--dpsm-text)]
                            hover:bg-[var(--dpsm-surface)]
                            hover:text-[var(--dpsm-primary)]
                          `
                }
            `}
          >
            {item.label}
          </Link>
        );
      })}

      <DepartmentDropdown />
    </nav>
  );
}

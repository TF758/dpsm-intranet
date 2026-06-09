"use client";

import Link from "next/link";

import { Menu, XIcon } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import { navigation } from "@/config/navigation";

import { SearchBar } from "./searchbar";
import { ThemeToggle } from "./theme-toggle";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu
            className="
              h-24
              w-24
            text-[var(--dpsm-text)]
            "
          />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        showCloseButton={false}
        className="
            w-[320px]
            sm:w-[400px]
            bg-[var(--dpsm-background)]
            text-[var(--dpsm-text)]
            border-[var(--dpsm-border)]
        "
      >
        <div
          className="
    flex
    justify-between
    items-center
  "
        >
          <SheetTitle>DPSM Intranet</SheetTitle>

          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="
        text-[var(--dpsm-text)]
        hover:bg-[var(--dpsm-surface)]
      "
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </SheetClose>
        </div>

        {/* Search */}

        <div
          className="
            mt-6
          "
        >
          <SearchBar />
        </div>

        {/* Navigation */}

        <nav
          className="
            mt-6
            flex
            flex-col
            gap-1
          "
        >
          {navigation.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="
                rounded-md
                px-3
                py-3

                font-medium

                hover:bg-[var(--dpsm-surface)]
                text-[var(--dpsm-text)]

                transition-colors
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Departments */}

        <div
          className="
            mt-6
            border-t
            border-[var(--dpsm-border)]
            pt-4
          "
        >
          <p
            className="
              mb-2

              text-xs
              font-semibold

              uppercase
              tracking-wider

              text-[var(--dpsm-muted)]
            "
          >
            Departments
          </p>

          <div
            className="
              flex
              flex-col
              gap-1
            "
          >
            <Link
              href="/departments/dpsm"
              className="
                rounded-md
                px-3
                py-2
                text-[var(--dpsm-text)]

                hover:bg-[var(--dpsm-surface)]
              "
            >
              DPSM
            </Link>

            <Link
              href="/departments/hrm"
              className="
                rounded-md
                px-3
                py-2
                text-[var(--dpsm-text)]
                hover:bg-[var(--dpsm-surface)]
              "
            >
              HRM
            </Link>

            <Link
              href="/departments/fmu"
              className="
                rounded-md
                px-3
                py-2
                text-[var(--dpsm-text)]
                hover:bg-[var(--dpsm-surface)]
              "
            >
              FMU
            </Link>
          </div>
        </div>

        {/* Theme */}

        <div
          className="
            mt-6
            border-t
            border-[var(--dpsm-border)]
            pt-4
          "
        >
          <p
            className="
              mb-2

              text-xs
              font-semibold

              uppercase
              tracking-wider

               text-[var(--dpsm-text)]
                    
            "
          >
            Theme
          </p>

          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}

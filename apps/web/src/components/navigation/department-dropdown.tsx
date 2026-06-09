"use client";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

export function DepartmentDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">Departments</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/departments/dpsm">DPSM</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/departments/hrm">HRM</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/departments/fmu">FMU</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/departments/odd">ODD</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

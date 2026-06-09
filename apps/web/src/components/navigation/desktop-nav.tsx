// src/components/navigation/desktop-nav.tsx

import Link from "next/link";
import { DepartmentDropdown } from "./department-dropdown";

export function DesktopNav() {
  return (
    <nav
      className="
                hidden
                md:flex
                items-center
                gap-6
            "
    >
      <Link href="/">Home</Link>

      <Link href="/staff">Staff</Link>

      <Link href="/resources">Resources</Link>

      <Link href="/news">News</Link>

      <Link href="/contact">Contact</Link>

      <DepartmentDropdown />
    </nav>
  );
}

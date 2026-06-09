// src/components/navigation/navbar.tsx

import Link from "next/link";

import { DesktopNav } from "./desktop-nav";

export function Navbar() {
  return (
    <header
      className="
                border-b
            "
    >
      <div
        className="
                    container
                    mx-auto
                    flex
                    h-16
                    items-center
                    justify-between
                "
      >
        <Link href="/">DPSM Intranet</Link>

        <DesktopNav />
      </div>
    </header>
  );
}

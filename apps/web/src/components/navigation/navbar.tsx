import Image from "next/image";
import Link from "next/link";

import { DesktopNav } from "./desktop-nav";
import { SearchBar } from "./searchbar";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header
      className="
                sticky
                top-0
                z-50
                border-b
                border-(--dpsm-border)
                bg-(--dpsm-background)/95
                backdrop-blur
                shadow-sm
            "
    >
      <div
        className="
                    max-w-screen-2xl
                    mx-auto
                    px-6
                "
      >
        <div
          className="
                        flex
                        h-20
                        items-center
                        justify-between
                        gap-8
                    "
        >
          {/* Logo */}

          <Link
            href="/"
            className="
                            flex
                            items-center
                            gap-4
                            shrink-0
                        "
          >
            <MobileNav />
            <Image
              src="/images/logo.png"
              alt="DPSM Logo"
              width={48}
              height={48}
              className="
                                h-12
                                w-auto
                            "
            />

            <div
              className="
                                hidden
                                md:block
                            "
            >
              <h1
                className="
                                    font-bold
                                    text-lg
                                    leading-tight
                                    text-(--dpsm-primary)
                                "
              >
                DPSM Intranet
              </h1>

              <p
                className="
                                    text-xs
                                    uppercase
                                    tracking-wider
                                    text-(--dpsm-muted)
                                "
              >
                Department of Public Service Modernisation
              </p>

              <p
                className="
                                    text-[11px]
                                    text-(--dpsm-muted)
                                "
              >
                Ministry of the Public Service
              </p>
            </div>
          </Link>

          {/* Navigation */}

          <DesktopNav />

          {/* Actions */}

          <div
            className="
            hidden
            lg:flex
            items-center
            gap-3
            "
          >
            <SearchBar />

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

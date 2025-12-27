"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const nav = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "border-b border-gray-200/60",
        "bg-white/70 backdrop-blur-xl",
        "transition-shadow duration-300",
        scrolled ? "shadow-sm" : "shadow-none",
      ].join(" ")}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold tracking-tight text-gray-900 hover:text-indigo-600 transition-colors"
        >
          Samuel<span className="text-indigo-600">.</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-1 text-sm">
          {nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "group px-3 py-2 rounded-md",
                  "transition-colors duration-200",
                  isActive
                    ? "text-indigo-700"
                    : "text-gray-600 hover:text-gray-900",
                ].join(" ")}
              >
                {/* text wrapper */}
                <span className="relative inline-block">
                  {item.label}

                  {/* Hover underline (text width) */}
                  <span
                    className={[
                      "pointer-events-none absolute left-0 right-0 -bottom-[4px] h-[2px] rounded-full",
                      "bg-indigo-600/60",
                      "origin-left scale-x-0 opacity-0",
                      "transition-transform transition-opacity duration-200",
                      "group-hover:scale-x-100 group-hover:opacity-100",
                    ].join(" ")}
                  />

                  {/* Active underline (text width) */}
                  <span
                    className={[
                      "pointer-events-none absolute left-0 right-0 -bottom-[4px] h-[2px] rounded-full",
                      "bg-indigo-600",
                      "transition-opacity duration-200",
                      isActive ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

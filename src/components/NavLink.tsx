"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type NavLinkProps = ComponentProps<typeof Link>;

export default function NavLink({ href, className, children, ...rest }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    typeof href === "string" &&
    (pathname === href || (href !== "/" && pathname.startsWith(href as string)));

  const combinedClass = [className, isActive ? "nav-active" : null]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={combinedClass || undefined} {...rest}>
      {children}
    </Link>
  );
}

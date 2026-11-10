"use client";
import Link from "next/link";
import { useRef } from "react";

export function MobileNav({links}: {links: string[][]}) {
  const menu = useRef<HTMLDetailsElement>(null);
  const summary = useRef<HTMLElement>(null);
  function close() {
    if (menu.current) menu.current.open = false;
    summary.current?.focus();
  }
  return <details className="mobile" ref={menu} onKeyDown={event => {
    if (event.key === "Escape" && menu.current?.open) close();
  }}>
    <summary ref={summary}>Menu</summary>
    <nav aria-label="Mobile navigation">{links.map(([name,href]) => <Link key={name} href={href} onClick={close}>{name}</Link>)}</nav>
  </details>;
}

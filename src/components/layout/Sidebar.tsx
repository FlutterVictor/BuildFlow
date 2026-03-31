"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { modules } from "@/data/modules";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 shrink-0 flex-col bg-navy text-white lg:flex">
      <div className="border-b border-white/10 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-300">SaaS Obras</p>
        <h1 className="text-lg font-semibold">Gestão de Avanço Físico</h1>
      </div>
      <nav className="space-y-1 overflow-y-auto p-3">
        {modules.map((item) => {
          const active = pathname === `/modulo/${item.slug}`;
          return (
            <Link
              key={item.id}
              href={`/modulo/${item.slug}`}
              className={`block rounded-lg px-3 py-2 text-sm transition ${active ? "bg-steel text-white" : "text-slate-200 hover:bg-white/10"}`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

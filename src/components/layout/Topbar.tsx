import { appContext } from "@/data/mock";

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs text-slate-500">Obra ativa</p>
          <p className="font-semibold text-navy">{appContext.obra}</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="rounded-full bg-slate-100 px-3 py-1">Período: {appContext.filtroPeriodo}</span>
          <span className="rounded-full bg-steel/10 px-3 py-1 text-steel">{appContext.usuario}</span>
        </div>
      </div>
    </header>
  );
}

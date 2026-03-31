export function BarMock({ values }: { values: number[] }) {
  return (
    <div className="card space-y-3">
      <h3 className="text-sm font-semibold text-slate-700">Avanço por semana</h3>
      <div className="flex h-36 items-end gap-2">
        {values.map((value, i) => (
          <div key={i} className="flex-1 rounded-t bg-steel/80" style={{ height: `${value}%` }} />
        ))}
      </div>
    </div>
  );
}


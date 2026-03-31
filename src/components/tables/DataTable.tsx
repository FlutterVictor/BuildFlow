export function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: Array<Array<string>>;
}) {
  return (
    <div className="card overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-slate-500">
            {columns.map((column) => (
              <th key={column} className="px-2 py-2 font-medium">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b border-slate-100">
              {row.map((cell, cidx) => (
                <td key={cidx} className="px-2 py-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

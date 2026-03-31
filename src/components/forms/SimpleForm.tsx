export function SimpleForm({ fields }: { fields: string[] }) {
  return (
    <form className="card grid gap-3 md:grid-cols-2">
      {fields.map((field) => (
        <label key={field} className="text-sm">
          <span className="mb-1 block text-slate-600">{field}</span>
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder={`Informe ${field.toLowerCase()}`} />
        </label>
      ))}
      <button type="button" className="rounded-lg bg-steel px-4 py-2 text-sm font-medium text-white md:col-span-2">
        Salvar (simulado)
      </button>
    </form>
  );
}

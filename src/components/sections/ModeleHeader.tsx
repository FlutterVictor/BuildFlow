export function ModuleHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold text-navy">{title}</h2>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

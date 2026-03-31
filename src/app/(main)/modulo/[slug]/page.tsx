import { notFound } from "next/navigation";
import { BarMock } from "@/components/charts/BarMock";
import { KpiCard } from "@/components/cards/KpiCard";
import { SimpleForm } from "@/components/forms/SimpleForm";
import { ModuleHeader } from "@/components/sections/ModuleHeader";
import { DataTable } from "@/components/tables/DataTable";
import { kpis } from "@/data/mock";
import { modules } from "@/data/modules";
import { moduleScreens } from "@/modules/registry";

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = modules.find((item) => item.slug === slug);
  if (!meta) notFound();

  const screen = moduleScreens[meta.id];

  return (
    <section className="space-y-4">
      <ModuleHeader title={meta.title} description={meta.description} />

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {kpis.map((kpi) => (
          <KpiCard key={`${meta.id}-${kpi.label}`} label={kpi.label} value={kpi.value} />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <BarMock values={screen.chartValues} />
        <div className="card">
          <h3 className="mb-3 text-sm font-semibold text-slate-700">Resumo do módulo</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            {screen.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <DataTable columns={screen.table.columns} rows={screen.table.rows} />
      <SimpleForm fields={screen.formFields} />
    </section>
  );
}

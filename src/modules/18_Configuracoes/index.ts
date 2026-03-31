import { ModuleScreen } from "@/modules/types";

// Módulo 18_Configuracoes: configuração visual isolada para edição futura.
export const screen: ModuleScreen = {
  highlights: [
    "Parâmetros e identidade visual",
    "Dados fictícios coerentes com obra industrial",
    "Navegação simulada e layout SaaS responsivo"
  ],
  chartValues: [45, 52, 61, 58, 66, 72],
  table: {
    columns: ["Item", "Responsável", "Status", "Prazo"],
    rows: [
      ["Frente A", "Juliana Prado", "Em andamento", "05/04/2026"],
      ["Frente B", "Rafael Lima", "Atenção", "08/04/2026"],
      ["Frente C", "André Silva", "Concluído", "11/04/2026"]
    ]
  },
  formFields: ["Motivo de atraso", "Unidade", "Parâmetro", "Preferência"]
};

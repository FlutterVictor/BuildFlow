export type ModuleId =
  | "01_Login"
  | "02_DashboardInicial"
  | "03_CadastroObras"
  | "04_EstruturaObra"
  | "05_CadastroAtividades"
  | "06_PlanejamentoFisico"
  | "07_MarcosMetas"
  | "08_LancamentoProducao"
  | "09_AtrasosJustificativas"
  | "10_ValidacaoProducao"
  | "11_DiarioObra"
  | "12_DashboardExecutivo"
  | "13_PlanejadoVsRealizado"
  | "14_Alertas"
  | "15_Relatorios"
  | "16_Indicadores"
  | "17_UsuariosPermissoes"
  | "18_Configuracoes"
  | "19_AuditoriaHistorico";

export interface ModuleMeta {
  id: ModuleId;
  slug: string;
  title: string;
  description: string;
}

export interface StatusTag {
  label: string;
  tone: "ok" | "warn" | "danger" | "info";
}

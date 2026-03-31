import { ModuleMeta } from "@/types";

export const modules: ModuleMeta[] = [
  { id: "01_Login", slug: "01-login", title: "01 | Login", description: "Acesso inicial do sistema." },
  { id: "02_DashboardInicial", slug: "02-dashboard-inicial", title: "02 | Dashboard Inicial", description: "Visão resumida de avanço físico." },
  { id: "03_CadastroObras", slug: "03-cadastro-obras", title: "03 | Cadastro de Obras", description: "Gestão das obras cadastradas." },
  { id: "04_EstruturaObra", slug: "04-estrutura-obra", title: "04 | Estrutura da Obra", description: "Hierarquia da obra em árvore." },
  { id: "05_CadastroAtividades", slug: "05-cadastro-atividades", title: "05 | Cadastro de Atividades", description: "Base de atividades físicas." },
  { id: "06_PlanejamentoFisico", slug: "06-planejamento-fisico", title: "06 | Planejamento Físico", description: "Cronograma e distribuição planejada." },
  { id: "07_MarcosMetas", slug: "07-marcos-metas", title: "07 | Marcos e Metas", description: "Controle de marcos principais." },
  { id: "08_LancamentoProducao", slug: "08-lancamento-producao", title: "08 | Lançamento de Produção", description: "Apontamento de produção executada." },
  { id: "09_AtrasosJustificativas", slug: "09-atrasos-justificativas", title: "09 | Atrasos e Justificativas", description: "Tratamento de desvios e causas." },
  { id: "10_ValidacaoProducao", slug: "10-validacao-producao", title: "10 | Validação de Produção", description: "Aprovação dos lançamentos." },
  { id: "11_DiarioObra", slug: "11-diario-obra", title: "11 | Diário de Obra", description: "Registro diário da frente." },
  { id: "12_DashboardExecutivo", slug: "12-dashboard-executivo", title: "12 | Dashboard Executivo", description: "Visão gerencial consolidada." },
  { id: "13_PlanejadoVsRealizado", slug: "13-planejado-vs-realizado", title: "13 | Planejado vs Realizado", description: "Comparação detalhada da produção." },
  { id: "14_Alertas", slug: "14-alertas", title: "14 | Alertas", description: "Central de alertas por criticidade." },
  { id: "15_Relatorios", slug: "15-relatorios", title: "15 | Relatórios", description: "Exportações e relatórios simulados." },
  { id: "16_Indicadores", slug: "16-indicadores", title: "16 | Indicadores", description: "KPIs de performance da obra." },
  { id: "17_UsuariosPermissoes", slug: "17-usuarios-permissoes", title: "17 | Usuários e Permissões", description: "Administração de acessos." },
  { id: "18_Configuracoes", slug: "18-configuracoes", title: "18 | Configurações", description: "Parâmetros do sistema." },
  { id: "19_AuditoriaHistorico", slug: "19-auditoria-historico", title: "19 | Auditoria e Histórico", description: "Rastreabilidade de alterações." }
];

import { ModuleId } from "@/types";
import { ModuleScreen } from "./types";
import { screen as m01 } from "./01_Login";
import { screen as m02 } from "./02_DashboardInicial";
import { screen as m03 } from "./03_CadastroObras";
import { screen as m04 } from "./04_EstruturaObra";
import { screen as m05 } from "./05_CadastroAtividades";
import { screen as m06 } from "./06_PlanejamentoFisico";
import { screen as m07 } from "./07_MarcosMetas";
import { screen as m08 } from "./08_LancamentoProducao";
import { screen as m09 } from "./09_AtrasosJustificativas";
import { screen as m10 } from "./10_ValidacaoProducao";
import { screen as m11 } from "./11_DiarioObra";
import { screen as m12 } from "./12_DashboardExecutivo";
import { screen as m13 } from "./13_PlanejadoVsRealizado";
import { screen as m14 } from "./14_Alertas";
import { screen as m15 } from "./15_Relatorios";
import { screen as m16 } from "./16_Indicadores";
import { screen as m17 } from "./17_UsuariosPermissoes";
import { screen as m18 } from "./18_Configuracoes";
import { screen as m19 } from "./19_AuditoriaHistorico";

export const moduleScreens: Record<ModuleId, ModuleScreen> = {
  "01_Login": m01,
  "02_DashboardInicial": m02,
  "03_CadastroObras": m03,
  "04_EstruturaObra": m04,
  "05_CadastroAtividades": m05,
  "06_PlanejamentoFisico": m06,
  "07_MarcosMetas": m07,
  "08_LancamentoProducao": m08,
  "09_AtrasosJustificativas": m09,
  "10_ValidacaoProducao": m10,
  "11_DiarioObra": m11,
  "12_DashboardExecutivo": m12,
  "13_PlanejadoVsRealizado": m13,
  "14_Alertas": m14,
  "15_Relatorios": m15,
  "16_Indicadores": m16,
  "17_UsuariosPermissoes": m17,
  "18_Configuracoes": m18,
  "19_AuditoriaHistorico": m19,
};

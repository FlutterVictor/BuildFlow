# MVP Visual - SaaS de Gestão de Avanço Físico de Obras

Este projeto entrega um MVP **focado em interface**, com dados fictícios e navegação funcional entre 19 módulos numerados.

## Stack
- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Dados mockados locais em `src/data`

## Como executar localmente
```bash
npm install
npm run dev
```
Abra `http://localhost:3000`.

## Estrutura do projeto
```text
src/
  app/
  components/
    layout/
    charts/
    cards/
    tables/
    forms/
    sections/
  modules/
    01_Login ... 19_AuditoriaHistorico
  data/
  types/
  lib/
```

## Ordem dos módulos
1. 01_Login
2. 02_DashboardInicial
3. 03_CadastroObras
4. 04_EstruturaObra
5. 05_CadastroAtividades
6. 06_PlanejamentoFisico
7. 07_MarcosMetas
8. 08_LancamentoProducao
9. 09_AtrasosJustificativas
10. 10_ValidacaoProducao
11. 11_DiarioObra
12. 12_DashboardExecutivo
13. 13_PlanejadoVsRealizado
14. 14_Alertas
15. 15_Relatorios
16. 16_Indicadores
17. 17_UsuariosPermissoes
18. 18_Configuracoes
19. 19_AuditoriaHistorico

## Função de cada tela
- **01_Login**: acesso simulado sem autenticação real.
- **02 ao 19**: telas de operação, gestão e administração com estrutura visual padronizada (cards, gráfico mock, tabela e formulário), permitindo evolução rápida com backend futuro.

## Como editar futuramente
- Ajuste o menu/ordem dos módulos em `src/data/modules.ts`.
- Ajuste KPIs centrais em `src/data/mock.ts`.
- Edite cada tela isoladamente em `src/modules/<numero_nome>/index.ts`.
- Ajuste o layout global em `src/components/layout/*`.
- Ajuste componentes reutilizáveis em `src/components/*`.

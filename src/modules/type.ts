export interface ModuleScreen {
  highlights: string[];
  chartValues: number[];
  table: {
    columns: string[];
    rows: string[][];
  };
  formFields: string[];
}

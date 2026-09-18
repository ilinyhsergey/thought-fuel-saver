import type { InfoMapping } from './mapping/info-mapping.ts';

export interface Task {
  id?: number;
  idDone?: boolean;
  title: string;
  body: string;

  infoMappings?: InfoMapping[];
}
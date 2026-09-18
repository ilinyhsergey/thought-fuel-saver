import type { TaskMapping } from './mapping/task-mapping.ts';
import type { InfoMapping } from './mapping/info-mapping.ts';

export interface Project {
  id?: number;
  isDone?: boolean;
  title: string;
  body: string;

  taskMappings?: TaskMapping[];
  infoMappings?: InfoMapping[];
}
import type { TaskMapping } from './mapping/task-mapping.ts';
import type { ProjectMapping } from './mapping/project-mapping.ts';
import type { InfoMapping } from './mapping/info-mapping.ts';

export interface Incoming {
  id?: number;
  isDone?: boolean;
  title?: string;
  body: string;

  taskMappings?: TaskMapping[];
  projectMappings?: ProjectMapping[];
  infoMappings?: InfoMapping[];
}
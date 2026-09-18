import type { TextMapping } from './text-mapping.ts';
import type { Project } from '../project.ts';

export interface ProjectMapping extends TextMapping {
  projectId: Project['id'];
}
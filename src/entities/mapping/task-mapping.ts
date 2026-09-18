import type { TextMapping } from './text-mapping.ts';
import type { Task } from '../task.ts';

export interface TaskMapping extends TextMapping {
  taskId: Task['id'];
}
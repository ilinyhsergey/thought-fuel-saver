import type { TextMapping } from './text-mapping.ts';
import type { Info } from '../info.ts';

export interface InfoMapping extends TextMapping {
  infoId: Info['id'];
}
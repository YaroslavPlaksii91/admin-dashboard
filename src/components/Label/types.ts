import { LABEL_COLORS, LABEL_TYPES } from './constants';

export type LabelProps = {
  type: (typeof LABEL_TYPES)[keyof typeof LABEL_TYPES];
  color: keyof typeof LABEL_COLORS | string;
  text: string;
};

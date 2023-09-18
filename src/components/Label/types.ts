import { LABEL_COLORS, LABEL_TYPES } from './constants';

export type LabelProps = {
  type: (typeof LABEL_TYPES)[keyof typeof LABEL_TYPES];
  color: (typeof LABEL_COLORS)[keyof typeof LABEL_COLORS];
  text: string;
};

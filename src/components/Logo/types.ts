import { LOGO_TYPES } from './constants';

export type LogoProps = {
  type?: (typeof LOGO_TYPES)[keyof typeof LOGO_TYPES];
};

import { UseFormRegisterReturn } from 'react-hook-form';

export const createRegister = (name: string): UseFormRegisterReturn<any> => {
  return {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    name: name,
    ref: null as any,
  };
};

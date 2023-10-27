import { UseFormRegisterReturn } from 'react-hook-form';

export const createRegister = (name: string): UseFormRegisterReturn => {
  return {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    name: name,
    ref: jest.mocked,
  };
};

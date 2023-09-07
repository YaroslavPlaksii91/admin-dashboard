import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.css$': 'jest-css-modules',
    '@components(.*)$': '<rootDir>/src/components/$1',
    '@routes(.*)$': '<rootDir>/src/routes/$1',
    '@pages(.*)$': '<rootDir>/src/pages/$1',
    '@layout(.*)$': '<rootDir>/src/layout/$1',
    '@redux(.*)$': '<rootDir>/src/redux/$1',
    '@styles(.*)$': '<rootDir>/src/styles/$1',
    '@services(.*)$': '<rootDir>/src/services/$1',
    '@utils(.*)$': '<rootDir>/src/utils/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  collectCoverage: true,
  reporters: [
    'default',
    ['jest-junit', { suiteName: 'Unit Tests', outputName: 'test-report.xml' }],
  ],
};

export default config;

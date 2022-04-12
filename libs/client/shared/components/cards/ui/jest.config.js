module.exports = {
<<<<<<< HEAD:libs/client/adminconsole/feature/jest.config.js
  displayName: 'client-adminconsole-feature',
  preset: '../../../../jest.preset.js',
=======
  displayName: 'cards',
  preset: '../../jest.preset.js',
>>>>>>> upstream/develop:libs/client/shared/components/cards/ui/jest.config.js
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
<<<<<<< HEAD:libs/client/adminconsole/feature/jest.config.js
  coverageDirectory: '../../../../coverage/libs/client/adminconsole/feature',
=======
  coverageDirectory: '../../coverage/libs/cards',
>>>>>>> upstream/develop:libs/client/shared/components/cards/ui/jest.config.js
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};

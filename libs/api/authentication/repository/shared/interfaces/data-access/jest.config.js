module.exports = {
  displayName: 'api-authentication-repository-shared-interfaces-data-access',
  preset: '../../../../../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../../../../../coverage/libs/api/authentication/repository/shared/interfaces/data-access',
};

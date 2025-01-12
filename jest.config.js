// jest.config.js
module.exports = {
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
    coverageDirectory: 'coverage',
    collectCoverage: true,
    collectCoverageFrom: ['src/pages/**/*.js', 'src/components/**/*.js'],
    transformIgnorePatterns: ['node_modules/(?!(firebase|@firebase)/)'],
  };
  
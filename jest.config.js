// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    coverageDirectory: 'coverage',
    collectCoverage: true,
    collectCoverageFrom: ['pages/**/*.js', 'components/**/*.js'],
  };
  
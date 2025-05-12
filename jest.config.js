module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
      '^react-router-dom$': '<rootDir>/src/__mocks__/react-router-dom.js',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'], // Ensure .js is included
    testEnvironment: 'jsdom',
  };
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/services/**/**.{js,jsx,ts,tsx}",
    "src/store/**/**.{js,jsx,ts,tsx}",
    "src/components/**/**.{js,jsx,ts,tsx}",
    "src/scenes/**/**.{js,jsx,ts,tsx}",
  ],

  coverageDirectory: "coverage",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: "node",
};

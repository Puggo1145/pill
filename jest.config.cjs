/** @type {import('jest').Config} */
module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "babel-jest",
      {
        configFile: "./babel.config.cjs",
      },
    ],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/renderer/$1",
    "^@assets/(.*)$": "<rootDir>/assets/$1",
    "^@agent/(.*)$": "<rootDir>/src/agent/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  setupFiles: ["dotenv/config"],
  coveragePathIgnorePatterns: ["/node_modules/", "/.webpack/", "/dist/"],
  clearMocks: true,
  // Add a global setup script to ask for confirmation before running tests
  // since some tests may have effects on tester's computer.
  globalSetup: "./scripts/askBeforeRunTest.ts",
};

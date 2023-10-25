module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]s$",
  transform: {
    "^.+\\.ts?$": ["ts-jest", { isolatedModules: true }],
  },
};

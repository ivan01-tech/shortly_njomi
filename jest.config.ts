export default {
  preset: "ts-jest",
  // testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  // moduleNameMapper: {
  //   "\\.(gif|ttf|eot|svg|png)$": "/test/__ mocks __/fileMock.js",
  // },

  testEnvironment: "jsdom",
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest",
  // },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "./test/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["./jest.config.ts"],
};

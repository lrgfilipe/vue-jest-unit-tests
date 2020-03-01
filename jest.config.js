module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  "transform": {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest"
  },
  "collectCoverage": true,
  "collectCoverageFrom": ["src/components/Counter.vue"], // ["**/*.{js,vue}"],
  "coverageReporters": ["text-summary", "json-summary"]
}

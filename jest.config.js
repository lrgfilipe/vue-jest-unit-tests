module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  "transform": {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest"
  },
  "collectCoverage": true,
  "collectCoverageFrom": ["**/*.{js,vue}"],
  "coverageReporters": ["html", "text-summary"]
}

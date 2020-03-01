

# VueJs + Jest (Simple-unit-tests)

![Node.js CI](https://github.com/lrgfilipe/vue-jest-unit-tests/workflows/Node.js%20CI/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/lrgfilipe/vue-jest-unit-tests)
![GitHub forks](https://img.shields.io/github/forks/lrgfilipe/vue-jest-unit-tests?style=social)
![GitHub stars](https://img.shields.io/github/stars/lrgfilipe/vue-jest-unit-tests?style=social)

<img src="https://raw.githubusercontent.com/lrgfilipe/vue-jest-unit-tests/master/public/screen.png" height="400">


Simple Pomodoro Timer app to gain experience on Jest tests.





### Project setup
```
npm install
npm run serve
```

### Run unit tests
```
npm run test:unit
```
Only running converage stats on components for now -> "collectCoverageFrom": ["src/components/*.vue"]

Counter.vue | Lines | Funcions | Statements | Branches
--- | --- | --- | --- | --- 
Total | `7` | `3` | `7` | `4`
Covered | `6` | `3` | `6` | `3`
Skipped | `0` | `0` | `0` | `0`
% | `85.71 %` | `100 %` | `85.71 %` | `75 %`

 - [X] **Test #1:** Props
 - [X] **Test #2:** + Simbol increments counter value by 'incrementAmount' prop
 - [X] **Test #3:** - Simbol decrements counter value by 'incrementAmount' prop
 - [X] **Test #4:** When prop 'allowNegative' is false, 'counter' cant be negative
 - [X] **Test #5:** When prop 'allowNegative' is true, 'counter' can be negative
 - [X] **Test #6:** When value changes the event 'input' is emited with the value


CountdownTimer.vue | Lines | Funcions | Statements | Branches
--- | --- | --- | --- | --- 
Total | `X` | `X` | `X` | `X`
Covered | `X` | `X` | `X` | `X`
Skipped | `X` | `X` | `X` | `X`
% | `X %` | `X %` | `X %` | `X %`

- [X] **Test #1:** Props
- [X] **Test #2:** Tap to Start button, starts timer
- [X] **Test #3:** Tap to Pause button, stops timer
- [X] **Test #4:** Reset button, resets timmer value
- [X] **Test #5:** Start of timer emits event 'start' with no payload
- [X] **Test #6:** End of timer emits event "end" with no payload

#### Pomodoro.vue


#### MIT License

Copyright (c) 2020 Luis Filipe

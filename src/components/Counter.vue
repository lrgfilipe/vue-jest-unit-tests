<template>
  <div>
    <div>counter: <span class="counter">{{counter}}</span></div>
    <button ref="increment" @click="counter++">Increment</button>
    <button ref="decrement" @click="counter--">Decrement</button>
    <button ref="reset" @click="counter = 0">Reset</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 0
  })
}
</script>

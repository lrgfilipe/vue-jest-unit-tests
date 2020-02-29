<template>
  <div id="app" class="content">
    <pomodoro />
  </div>
</template>

<script>
import Pomodoro from './components/pomodoro.vue'
export default {
  name: 'App',
  components: {
    Pomodoro
  }
}
</script>
<style scoped>
.content {
   color:white;
}
</style>
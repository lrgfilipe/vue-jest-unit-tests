<template>
  <div id="app" class="content">
    <Pomodoro />
  </div>
</template>

<script>
import Pomodoro from './components/Pomodoro.vue'
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
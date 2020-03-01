<template>
  <div class="wrapper">
    <div @click="clickTimer()" class="timer wrapper">{{ time }}</div>

    <div @click="clickTimer()" class="pause-start" >
      Tap to {{ timerRunning ? 'Pause' : totalTime !== totalTimeOriginal ? 'Resume' : 'Start' }}
    </div>

    <div @click="reset()" class="pause-start">Restart</div>
  </div>
</template>

<script>

export default {
  props: {
     min: { type: Number, default: 5 }
  },
  data () {
    return {
      totalTime: this.min * 60,
      totalTimeOriginal: this.min * 60,
      timerRunning: false,
      interval: null
    }
  },
  watch: {  
    min () {
      this.totalTime = this.min * 60
      this.totalTimeOriginal = this.min * 60
      this.timerReset()
    }
  },
  computed: {
    time: function() {
      return this.minutes + " : " + this.seconds
    },
    minutes: function() {
      var min = Math.floor(this.totalTime / 60)
      return min >= 10 ? min + '' : '0' + min
    },
    seconds: function() {
      var sec = this.totalTime - (this.minutes * 60)
      return sec >= 10 ? sec + '' : '0' + sec;
    }
  },
  methods: {
    clickTimer () {
      if(this.timerRunning){
          this.timerPause()
      }
      else {
        this.timerRun()
      }
    },
    timerRun() {
      if(this.totalTimeOriginal === this.totalTime){
        this.$emit('start')
      }
      this.timerRunning = true
      this.interval = setInterval(this.countdownTimer, 1000)
    },
    timerPause() {
      this.timerRunning = false
      clearInterval(this.interval)
    },
    reset (){
      this.$emit('reset')
      this.timerPause()
      this.totalTime = this.totalTimeOriginal
      this.timerReset()
    },
    timerReset() {
      this.timerRunning = false
      clearInterval(this.interval)
    },
    countdownTimer() {
      if (this.timerRunning == true) {
          this.totalTime--
      }
      if(this.totalTime === 0){
        this.timerPause()
        this.$emit('end')
      }
    }
  }
}
</script>

<style scoped>
  .timer {
    border: 3px solid white;
    font-size: 3rem;
    border-radius: 100%;
    width: 150px;
    height: 150px;
    cursor: pointer;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .pause-start {
      margin-top: 20px;
      font-size: 1.5rem;
      cursor: pointer;
  }
</style>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="lengthItem">
        Session length
        <counter :incrementAmount="1" :val="sessionLength" @input="sessionLength = $event" />
      </div>
       <div class="lengthItem">
        Break length
        <counter :val="breakLength" @input="breakLength = $event" />
      </div>
    </div>
    <pipeline-status :pipeline="pipeline" />
    <countdown-timer :min="timer" @start="timerAction('start')" @end="timerAction('end')" @reset="updatePipeline()" />
  </div>
</template>

<script> 
import Counter from './Counter.vue'
import CountdownTimer from './CountdownTimer.vue'
import PipelineStatus from './PipelineStatus.vue'
export default {
  components: { Counter, CountdownTimer, PipelineStatus },
  props: {
    session: { type: Number, default: 25 },
    break: { type: Number, default: 5 }
  },
  data () {
    return {
      sessionLength: this.session, // min
      breakLength: this.break, // min
      timer: this.session,
      pipeline: [
        { session: { done: false, time: this.session }, break: { done: false, time: this.break } },
        { session: { done: false, time: this.session }, break: { done: false, time: this.break } },
        { session: { done: false, time: this.session }, break: { done: false, time: this.break } },
        { session: { done: false, time: this.session }, break: { done: false, time: this.break } }
      ]
    }
  },
  watch: {
    sessionLength () {
        this.updatePipeline()
    },
    breakLength () {
        this.updatePipeline()
    }
  },
  methods: {
    updatePipeline () {
      this.timer = this.sessionLength
      this.pipeline.map(item => {
        item.session.done = false
        item.session.time = this.sessionLength
        item.break.done = false
        item.break.time = this.breakLength
      })
    },
    timerAction (action) {
      for(var item of this.pipeline){
        if(!item.session.done){
          if(action === 'end'){this.timer = this.sessionLength }
          else { item.session.done = true }
          break
        }
        else if(!item.break.done){
          if(action === 'end'){this.timer = this.breakLength }
          else { item.break.done = true }
          break
        }
      }
    }
  }
}
</script>
<style scoped>
  .content {
    padding: 1rem;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .lengthItem {
    width: 200px;
    font-weight: bold;
    padding: 10px;
    margin: 0px 5px;
    text-align: center;
    text-transform: uppercase;
    background: #ed8936;
    border-radius: 0.375rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .wrapper {
    max-width: 400px;
    margin: 0px auto ;
    background: #f6ad55;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 0.5rem;
  }
</style>
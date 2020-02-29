<template>
  <div class="content">
    <span v-for="(item,index) in pipeline" :key="index" class="content">
      <div class="item" :class="item.session.done ? 'selected' : ''">S</div>
      <div class="item" :class="item.break.done ? 'selected' : ''">B</div>
    </span>
    <div class="status">{{ status }}</div>
  </div>
</template>

<script>
export default {
  props: {
    pipeline: { type: Array }
  },
  computed: {
    status () {
       for(var item of this.pipeline){
        if(!item.session.done){ return 'Break time' }
        else if(!item.break.done){ return 'Session time' }
      }
      return 'Session time'
    }
  }
}
</script>

<style scoped >
  .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .item {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-weight: bold;
    border-radius: 100%;
    border: 2px solid white;
    margin: 5px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .selected {
    background: #ed8936;
  }
  .status {
    margin-top: 10px;
    width: 100%;
    text-align: center;
    
    font-size: 2rem;
  }
</style>

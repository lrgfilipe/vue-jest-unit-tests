<template>
    <div class="btnWrapper">
      <button ref="increment" class="btn" @click="increment()">+</button>
      <div ref="counter" class="btn">{{ counter }}</div>
      <button ref="decrement" class="btn" @click="decrement()">-</button>
    </div>
</template>

<script>
export default {
  props: {
    val: { type: Number, default: 10 },
    incrementAmount: { type: Number, default: 5 },
    allowNegative: { type: Boolean, default: false }
  },
  data () {
    return {
      counter: this.val
    }
  },
  watch: {
    val () {
      this.counter = this.val
    },
    counter () {
      this.$emit('input', this.counter)
    }
  },
  methods: {
    increment (){
      this.counter += this.incrementAmount
      
    },
    decrement (){
      this.counter = (!this.allowNegative && this.counter - this.incrementAmount <= 0) ?
      0 :
      this.counter - this.incrementAmount
    }
  }
}
</script>

<style scoped >
  .btnWrapper {
    display: flex;
  }
  .btn {
    width: 50%;
    text-align: center;
    margin: 10px 5px 0px 5px;
    background: transparent;
    outline: none;
    border: none;
    font-size: 1.5rem;
    color:white;
    cursor: pointer;
  }
  .btn:focus{
    outline: none;
  }
</style>

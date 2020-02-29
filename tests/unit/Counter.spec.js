import { mount } from '@vue/test-utils'
import Counter from '../../src/components/Counter.vue'
import Vue from 'vue'

describe('Counter.vue', () => {

  const wrapper = mount(Counter, {
    propsData: { incrementAmount: 5, allowNegative: false, val: 10 }
  })
  const counter = wrapper.find({ ref: 'counter' })
  const incrementBtn = wrapper.find({ ref: 'increment' })
  const decrementBtn = wrapper.find({ ref: 'decrement' })


  test('Props', () =>{
    expect(wrapper.props().incrementAmount).toBe(5)
    expect(wrapper.props().allowNegative).toBe(false)
  })

  test('+ Simbol increments counter value by "incrementAmount" prop', async () =>{
    expect(counter.text()).toContain('10')
    incrementBtn.trigger('click')
    await Vue.nextTick()
    expect(counter.text()).toContain('15')
  })

  test('- Simbol decrements counter value by "incrementAmount" prop', async () =>{
    expect(counter.text()).toContain('15')
    decrementBtn.trigger('click')
    await Vue.nextTick()
    expect(counter.text()).toContain('10')
  })

  test('When prop "allowNegative" is false, "counter" cant be negative', () =>{
    
  })

  test('When prop "allowNegative" is true, "counter" can be negative', () =>{
    
  })

  test('When value changes the event "input" is emited with the value', () =>{
    
  })

})

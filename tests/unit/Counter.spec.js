import { mount } from '@vue/test-utils'
import Counter from '../../src/components/Counter.vue'

describe('Counter.vue', () => {

  test('Props', () =>{
    const wrapper = mount(Counter, { propsData: { incrementAmount: 5, allowNegative: false, val: 10 } })
    expect(wrapper.props().incrementAmount).toBe(5)
    expect(wrapper.props().allowNegative).toBe(false)
    expect(wrapper.props().val).toBe(10)
    expect(wrapper.find({ ref: 'counter' }).text()).toContain('10')
  })

  test('+ Simbol increments counter value by "incrementAmount" prop', async () =>{
    const wrapper = mount(Counter)
    wrapper.find({ ref: 'increment' }).trigger('click')
    await wrapper.vm.$nextTick() // Wait until trigger events have been handled
    expect(wrapper.find({ ref: 'counter' }).text()).toContain('5')
  })

  test('- Simbol decrements counter value by "incrementAmount" prop', async () =>{
    const wrapper = mount(Counter, { propsData: { val: 5 } })
    wrapper.find({ ref: 'decrement' }).trigger('click')
    await wrapper.vm.$nextTick() // Wait until trigger events have been handled
    expect(wrapper.find({ ref: 'counter' }).text()).toContain('0')
  })

  test('When prop "allowNegative" is false, "counter" cant be negative', async () =>{
    const wrapper = mount(Counter, { propsData: { allowNegative: false } })
    wrapper.find({ ref: 'decrement' }).trigger('click')
    await wrapper.vm.$nextTick() // Wait until trigger events have been handled
    expect(wrapper.find({ ref: 'counter' }).text()).toContain('0')
  })

  test('When prop "allowNegative" is true, "counter" can be negative', async () =>{
    const wrapper = mount(Counter, { propsData: { allowNegative: true } })
    wrapper.find({ ref: 'decrement' }).trigger('click')
    await wrapper.vm.$nextTick() // Wait until trigger events have been handled
    expect(wrapper.find({ ref: 'counter' }).text()).toContain('-5')
  })

  test('When value changes the event "input" is emited with the value', async () =>{
    const wrapper = mount(Counter)
    wrapper.find({ ref: 'increment' }).trigger('click')
    await wrapper.vm.$nextTick() // Wait until trigger events have been handled
    expect(wrapper.emitted().input).toBeTruthy() // assert event has been emitted
    expect(wrapper.emitted().input).toEqual([[5]]) // assert event payload
  })

})

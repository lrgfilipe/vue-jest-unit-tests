import { shallowMount } from '@vue/test-utils'
import CountdownTimer from '../../src/components/CountdownTimer.vue'

jest.useFakeTimers();

describe('CountdownTimer.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CountdownTimer, { propsData: { min: 5 } });
  });

  test('Props', () =>{  
    expect(wrapper.props().min).toBe(5)
    expect(wrapper.vm.totalTime).toBe(5*60) // time in seconds
    expect(wrapper.vm.timerRunning).toBe(false)
    expect(wrapper.vm.time).toBe("05 : 00")
    expect(wrapper.vm.minutes).toBe("05")
    expect(wrapper.vm.seconds).toBe("00")
  })

  test('Tap to Start button, starts timer', async () =>{  
    wrapper.vm.timerRun()
    jest.advanceTimersByTime(1000) // 1sec
    expect(wrapper.vm.timerRunning).toBe(true)
    expect(wrapper.vm.time).toBe("04 : 59")
    expect(wrapper.vm.minutes).toBe('04')
    expect(wrapper.vm.seconds).toBe('59')
  })

  test('Tap to Pause button, stops timer', () =>{  
    wrapper.vm.timerRun()
    jest.advanceTimersByTime(1000) // 1sec
    wrapper.vm.timerPause()
    jest.advanceTimersByTime(3000) // 3sec
    expect(wrapper.vm.timerRunning).toBe(false)
    expect(wrapper.vm.time).toBe("04 : 59")
    expect(wrapper.vm.minutes).toBe('04')
    expect(wrapper.vm.seconds).toBe('59')
  })

  test('Reset button, resets timmer value', () =>{  
    wrapper.vm.timerRun()
    jest.advanceTimersByTime(1000) // 1sec
    wrapper.vm.reset()
    expect(wrapper.vm.timerRunning).toBe(false)
    expect(wrapper.vm.time).toBe("05 : 00")
    expect(wrapper.vm.minutes).toBe('05')
    expect(wrapper.vm.seconds).toBe('00')
  })

  test('Start of timer emits event "start" with no payload', async () =>{  
    wrapper.vm.timerRun()
    await wrapper.vm.$nextTick() // Wait until trigger events have been handled
    expect(wrapper.emitted().start).toBeTruthy() // assert event has been emitted
  })

  test('End of timer emits event "end" with no payload', async () =>{  
    wrapper.vm.timerRun()
    jest.advanceTimersByTime(5*60*1000 - 1)
    expect(wrapper.emitted().end).toBeFalsy()
    jest.advanceTimersByTime(1)
    expect(wrapper.emitted().end).toBeTruthy() 
  })

})

import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import SliderView from '../../views/SliderView.vue'

describe('SliderView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('renders the component correctly', () => {
    const wrapper = mount(SliderView)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('h1').text()).toBe('Slider')
  })
  it('renders slider and displays initial values', () => {
    const wrapper = mount(SliderView)
    expect(wrapper.find('input[type="range"]').exists()).toBe(true)
    expect(wrapper.find('span').text()).toBe('50')
    expect(wrapper.text()).toContain('Final value:')
    expect(wrapper.text()).toContain('33.33')
  })

  it('updates value when sliderValue changes', async () => {
    const wrapper = mount(SliderView)
    const slider = wrapper.find('input[type="range"]')
    await slider.setValue(90)
    // sliderValue should be 90, weirdValue should be (90*2)/3 = 60.00
    expect(wrapper.find('span').text()).toBe('90')
    expect(wrapper.text()).toContain('60.00')
  })
})
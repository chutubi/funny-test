import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useValStore } from '../../stores/valStore'

describe('useValStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should initialize sliderValue to 50', () => {
    const store = useValStore()
    expect(store.sliderValue).toBe(50)
  })

  it('should compute weirdValue correctly for default value', () => {
    const store = useValStore()
    expect(store.weirdValue).toBe(((50 * 2) / 3).toFixed(2))
  })

  it('should update weirdValue when sliderValue changes', () => {
    const store = useValStore()
    store.sliderValue = 90
    expect(store.weirdValue).toBe(((90 * 2) / 3).toFixed(2))
  })

})
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CheckboxView from '../../views/CheckboxView.vue'

describe('CheckboxView Integration', () => {
  it('should start with one checkbox option', () => {
    const wrapper = mount(CheckboxView)
    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    
    expect(checkboxes).toHaveLength(1)
    expect(wrapper.text()).toContain('Choose me!')
  })

  it('should add new option when checking a checkbox', async () => {
    const wrapper = mount(CheckboxView)
    
    // Get first checkbox and check it
    const firstCheckbox = wrapper.find('input[type="checkbox"]')
    await firstCheckbox.setChecked(true)
    
    // Should now have 2 checkboxes
    const updatedCheckboxes = wrapper.findAll('input[type="checkbox"]')
    expect(updatedCheckboxes).toHaveLength(2)
    expect(wrapper.text()).toContain('Option 2')
  })

  it('should keep adding options when checking multiple checkboxes', async () => {
    const wrapper = mount(CheckboxView)
    
    // Check first checkbox
    await wrapper.find('input[type="checkbox"]').setChecked(true)
    
    // Check second checkbox
    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    await checkboxes[1].setChecked(true)
    
    // Should now have 3 checkboxes
    expect(wrapper.findAll('input[type="checkbox"]')).toHaveLength(3)
    expect(wrapper.text()).toContain('Option 2')
    expect(wrapper.text()).toContain('Option 3')
  })

  it('should maintain checkbox states correctly', async () => {
    const wrapper = mount(CheckboxView)
    
    // Check first checkbox
    await wrapper.find('input[type="checkbox"]').setChecked(true)
    
    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    expect(checkboxes[0].element.checked).toBe(true)
    expect(checkboxes[1].element.checked).toBe(false)
  })
})
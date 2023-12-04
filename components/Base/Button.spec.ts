// Button.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = mount(Button)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('applies outline class when outline prop is true', () => {
    const wrapper = mount(Button, {
      props: {
        outline: true,
      },
    })
    expect(wrapper.find('button').classes()).toContain('_outline_7ae6e0')
  })

  it('applies success class when success prop is true', () => {
    const wrapper = mount(Button, {
      props: {
        success: true,
      },
    })
    expect(wrapper.find('button').classes()).toContain('_success_7ae6e0')
  })

  it('applies error class when error prop is true', () => {
    const wrapper = mount(Button, {
      props: {
        error: true,
      },
    })
    expect(wrapper.find('button').classes()).toContain('_error_7ae6e0')
  })

  it('renders slot content', () => {
    const slotContent = 'Click me!'
    const wrapper = mount(Button, {
      slots: {
        default: slotContent,
      },
    })
    expect(wrapper.text()).toContain(slotContent)
  })

  // it('renders an icon when icon prop is provided', () => {
  //   const icon = 'check'
  //   const wrapper = mount(Button, {
  //     props: {
  //       icon,
  //     },
  //   })
  //   expect(wrapper.findComponent(IconStub).exists()).toBeTruthy()
  //   expect(wrapper.findComponent(IconStub).props('name')).toBe(icon)
  // })
})

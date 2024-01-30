import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import PageOne from '~/pages/index.vue';
import CategoryTest from '~/src/components/Category.vue';
import LargesidebarTest from '~/src/components/LargeSidebar.vue';

describe('Page one test', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(PageOne)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Testing component Category', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(CategoryTest)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Testing component LargeSidebar', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(LargesidebarTest)
    expect(wrapper.vm).toBeTruthy()
  })
})
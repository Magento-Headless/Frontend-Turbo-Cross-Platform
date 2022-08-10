import { Button } from '@headless/vue3-antd'

export default {
  title: 'Design system/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
}

const Template = (args) => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    }
  },
  template: `<Button v-bind="args">Add To Cart</Button>`
})

export const Primary = Template.bind({})

Primary.args = {
  type: 'primary'
}

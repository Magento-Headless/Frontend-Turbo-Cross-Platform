import { Affix, Button } from '@headless/vue3-antd'

export default {
  title: 'Design System/Ant Design Vue/Affix',
  component: Affix,
  argTypes: {
    offsetBottom: {
      control: { type: 'number' },
      description: '距离窗口底部达到指定偏移量后触发'
    },
    offsetTop: {
      control: { type: 'number' },
      description: '距离窗口顶部达到指定偏移量后触发',
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      }
    },
    target: {
      description:
        '设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数'
    },
    change: {
      control: {
        type: 'none'
      },
      type: {
        name: 'function',
        required: false
      },
      description: '固定状态改变时触发的回调函数',
      table: {
        type: { summary: 'func' },
        defaultValue: { summary: '(affixed?: boolean) => void' }
      }
    }
  }
}

const Template = (args) => ({
  components: {
    Affix,
    Button
  },
  setup() {
    return { args }
  },
  template: `
    <Affix v-bind="args">
      <Button type="primary">Affix</Button>
    </Affix>
  `
})

export const Index = Template.bind({})

Index.args = {
  offsetTop: 30
}

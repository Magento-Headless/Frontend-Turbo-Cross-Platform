import { Button } from '@headless/vue3-antd'

export default {
  title: 'Design System/Ant Design Vue/Button',
  component: Button,
  argTypes: {
    block: {
      defaultValue: false,
      description: '将按钮宽度调整为其父宽度的选项'
    },
    disabled: {
      defaultValue: false,
      description: '按钮失效状态'
    },
    href: {
      description: '点击跳转的地址，指定此属性 button 的行为和 a 链接一致'
    },
    htmlType: {
      control: { type: 'select' },
      defaultValue: 'button',
      description: '设置 button 原生的 type 值，可选值请参考 HTML 标准',
      options: ['submit', 'button', 'reset']
    },
    target: {
      control: { type: 'select' },
      defaultValue: '_self',
      description: '相当于 a 链接的 target 属性, href 存在时生效',
      options: ['_blank', '_self', '_parent', '_top']
    },
    type: {
      control: { type: 'select' },
      defaultValue: 'default',
      description: '设置按钮类型',
      options: ['primary', 'ghost', 'dashed', 'link', 'text', 'default']
    },
    danger: {
      type: {
        name: 'boolean',
        required: false
      },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: '设置危险按钮'
    },
    shape: {
      control: { type: 'select' },
      defaultValue: 'default',
      description: '设置按钮形状',
      options: ['default', 'circle', 'round'],
      table: {
        type: { summary: 'string', detail: 'default | circle | round' },
        defaultValue: { summary: `'default'` }
      }
    },
    size: {
      control: {
        type: 'select'
      },
      defaultValue: 'middle',
      description: '设置按钮大小',
      options: ['large', 'middle', 'small'],
      table: {
        type: { summary: 'string', detail: 'large | middle | small' },
        defaultValue: { summary: `'middle'` }
      }
    },
    click: {
      control: {
        type: 'none'
      },
      type: {
        name: 'function',
        required: false
      },
      description: '点击按钮时的回调',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: '(event) => void' }
      }
    }
  }
}

const Template = (args) => ({
  components: {
    Button
  },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args">Primary Button</Button>'
})

export const Primary = Template.bind({})

Primary.args = {
  type: 'primary'
}

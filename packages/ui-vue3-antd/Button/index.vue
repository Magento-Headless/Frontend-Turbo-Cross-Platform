<template>
  <Button v-bind="$props">
    <slot />
  </Button>
</template>

<script>
import { Button } from 'ant-design-vue'

export default {
  name: 'VButton',
  components: {
    Button
  },
  props: {
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String
    },
    htmlType: {
      type: String,
      default: 'button'
    },
    target: {
      type: String,
      default: '_self',
      validator: (value) => {
        return ['_blank', '_self', '_parent', '_top'].includes(value)
      }
    },
    type: {
      type: String,
      default: 'default',
       validator: (value) => {
        return ['primary', 'ghost', 'dashed', 'link', 'text', 'default'].includes(value)
      }
    }
  },
  emits: ['click']
}
</script>

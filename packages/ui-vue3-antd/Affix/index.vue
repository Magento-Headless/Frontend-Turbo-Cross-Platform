<template>
  <Affix v-bind="$props">
    <slot />
  </Affix>
</template>

<script>
import { Affix } from 'ant-design-vue'

export default {
  name: 'VAffix',
  components: {
    Affix
  },
  props: {
    offsetBottom: Number,
    offsetTop: {
      type: Number,
      default: 0
    },
    target: {
      type: Function,
      default: () => window
    }
  },
  emits: ['change']
}
</script>

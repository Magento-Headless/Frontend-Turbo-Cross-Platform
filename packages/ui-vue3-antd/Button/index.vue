<template>
  <Button>
    <slot />
  </Button>
</template>

<script>
import { Button } from 'ant-design-vue'

export default {
  components: {
    Button
  }
}
</script>

<template>
  <ElButton>
    <slot />
  </ElButton>
</template>

<script>
import { ElButton } from 'element-plus'

export default {
  components: {
    ElButton
  }
}
</script>

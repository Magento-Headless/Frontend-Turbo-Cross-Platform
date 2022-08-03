<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <ConfigProvider :prefix-cls="prefixCls">
    <Header />
  </ConfigProvider>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ConfigProvider } from '@headless/vue3-antd'

import Header from '@components/Header'

export default defineComponent({
  name: 'App',
  components: {
    ConfigProvider,
    Header
  },
  setup() {
    const prefixCls = ref(null)

    prefixCls.value = 'headless'

    return {
      prefixCls
    }
  }
})
</script>

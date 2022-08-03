<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <ConfigProvider>
    <Header />
    <Button>Button</Button>
  </ConfigProvider>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ConfigProvider, Button } from '@headless/vue3-element-plus'

import Header from '@components/Header'

export default defineComponent({
  name: 'App',
  components: {
    ConfigProvider,
    Header,
    Button
  },
  setup() {
    const namespace = ref(null)

    namespace.value = 'headless'

    return {
      namespace
    }
  }
})
</script>

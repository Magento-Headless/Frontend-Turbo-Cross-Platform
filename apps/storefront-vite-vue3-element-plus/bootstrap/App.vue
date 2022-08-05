<template>
  <ConfigProvider :namespace="namespace">
    <Header />
    <Button>Button</Button>
    <router-view />
  </ConfigProvider>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
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
    const { commit } = useStore()
    const namespace = ref(null)

    namespace.value = 'headless'

    onMounted(() => {
      commit('app/saveStoreConfig', { currency: 'USD' })
    })

    return {
      namespace
    }
  }
})
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <ConfigProvider :prefix-cls="prefixCls">
    <router-view />
  </ConfigProvider>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ConfigProvider } from '@headless/vue3-antd'

export default defineComponent({
  name: 'App',
  components: {
    ConfigProvider
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

<style lang="less">
:root {
  --color-white: #ffffff;
  --color-black: #000000;
  --color-blue: #00a3ff;
}

body {
  ul,
  ol {
    margin-bottom: 0;
    padding-left: 0;

    > li {
      list-style-type: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0;
  }

  p {
    margin-bottom: 0;
  }
}
</style>

<template>
  <header>
    <Container>
      <router-link to="/">Home</router-link>
      <span>|</span>
      <router-link to="/view">About</router-link>
    </Container>
  </header>
</template>

<script>
import { Container } from '@headless/vue3-element-plus'

export default {
  name: 'Header',
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  padding: 1rem;
}
</style>

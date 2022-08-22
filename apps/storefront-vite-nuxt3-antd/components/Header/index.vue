<template>
  <header>Header {{ foo }}</header>
</template>

<script setup>
const name = 'Header'
const foo = useHeader()
</script>

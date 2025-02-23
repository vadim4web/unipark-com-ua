<script setup>
import { defineAsyncComponent } from 'vue'

const Products4View = defineAsyncComponent(
  () => import('~/components/Products4View.vue')
)
</script>

<template>
<main>
  LIGHT&DREAMS
  <products-4-view hiddenItem="light-and-dreams" />
</main>
</template>

<style lang="scss" scoped></style>
<script setup>
import { defineAsyncComponent } from 'vue'

const Products4View = defineAsyncComponent(
  () => import('~/components/Products4View.vue')
)
</script>

<template>
<main>
  GIANTS WORLD
  <products-4-view hiddenItem="giants-world" />
</main>
</template>

<style lang="scss" scoped></style>
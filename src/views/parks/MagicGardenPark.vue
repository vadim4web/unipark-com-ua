<script setup>
import { defineAsyncComponent } from 'vue'

const Products4View = defineAsyncComponent(
  () => import('~/components/Products4View.vue')
)
</script>

<template>
<main>
  MAGIC GARDEN
  <products-4-view hiddenItem="magic-garden" />
</main>
</template>

<style lang="scss" scoped></style>
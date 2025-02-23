<script setup>
import { defineAsyncComponent } from 'vue'

const Products4View = defineAsyncComponent(
  () => import('~/components/Products4View.vue')
)
</script>

<template>
<main>
  SINGING PARK

  <products-4-view hiddenItem="singing" />
</main>
</template>

<style lang="scss" scoped></style>
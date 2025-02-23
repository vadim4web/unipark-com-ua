<script setup>
import { defineAsyncComponent } from 'vue'

const Products4View = defineAsyncComponent(
  () => import('~/components/Products4View.vue')
)
</script>

<template>
<main>
  TROLDOMY PARK

  <products-4-view hiddenItem="troldomy" />
</main>
</template>

<style lang="scss" scoped></style>
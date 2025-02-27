<script setup>
import { defineAsyncComponent } from 'vue'

const Products4View = defineAsyncComponent(
  () => import('~/components/Products4View.vue')
)
</script>

<template>
<main>
  <section class="head flex justify-center items-center">
    <h2
      class="text-pro-bold text-[12.5rem] text-center relative leading-[137.5%]"
    >
      {{ $t('GIANTS_WORLD') }}
    </h2>
  </section>
  <products-4-view hiddenItem="giants-world" />
</main>
</template>

<style lang="scss" scoped>
.head {
  height: calc(100dvh - var(--header-height));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100dvh;
    background: url('../assets/img/GIANTS_WORLD.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  h2 {
    color: var(--bg-color);
    transform: translateY(-50%);
  }
}
</style>
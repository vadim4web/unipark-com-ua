<script setup>
import BouncingText from '~/components/BouncingText.vue'
</script>

<template>
  <h2 class="text-pro-bold text-[5rem]">
    <bouncing-text
      :text-to-animate="$t('our_team').split(' ')[0]"
      class="text-pro-bold text-[10rem] leading-[133%] relative w-[17ch]"
      wrapper-tag="p"
      :max-lift="20"
      :max-scale="1.3"
    />

    <bouncing-text
      :text-to-animate="$t('our_team').split(' ')[1]"
      class="text-pro-bold text-[10rem] leading-[133%] relative w-[17ch]"
      wrapper-tag="p"
      :max-lift="20"
      :max-scale="1.3"
    />
  </h2>
</template>

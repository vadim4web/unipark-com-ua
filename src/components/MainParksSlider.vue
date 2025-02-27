<script setup>
import { ref } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const slides = [
  {
    image: '/img/Slide_1.jpg',
    link: '/parks/light-and-dreams'
  },
  {
    image: '/img/Slide_2.jpg',
    link: '/parks/magic-garden'
  },
  {
    image: '/img/Slide_3.jpg',
    link: '/parks/giants-world'
  },
  {
    image: '/img/Slide_4.jpg',
    link: '/parks/fantastic-park'
  },
]
</script>

<template>
  <vueper-slides fade :duration="5000" :transition-speed="1000" lazy lazy-load-on-drag :fixed-height="true" :bullets="false" class="no-shadow" :autoplay="true">
    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :link="slide.link">
      <template #loader>
        <!-- <i class="icon icon-loader spinning"></i> -->
        <span>Loading...</span>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<style lang="scss">
.vueperslides--fixed-height {
  height: calc(48.5rem + var(--header-height));
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.vueperslides__arrow {
  color: black;
  background: white;
  border-radius: 50%;
  border: 2px solid #fff;
  transform: scaleY(0.72) translateY(-50%);
}

.vueperslides__arrow {
  color: black;
  background: white;
  border-radius: 50%;
  border: 2px solid #fff;
  transform: scale(0.75, 0.53) translateY(-50%);
}

.vueperslides__arrow--prev svg {
  transform: translateX(-5%);
}

.vueperslides__arrow--next svg {
  transform: translateX(5%);
}
</style>
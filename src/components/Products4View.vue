<script setup>
import { computed } from 'vue'

import SINGING_prev from '~/assets/img/SINGING_prev.jpg'
import TROLDOMY_prev from '~/assets/img/TROLDOMY_prev.jpg'
import LIGHT_AND_DREAMS_prev from '~/assets/img/LIGHT_AND_DREAMS_prev.jpg'
import GIANTS_WORLD_prev from '~/assets/img/GIANTS_WORLD_prev.jpg'
import MAGIC_GARDEN_prev from '~/assets/img/MAGIC_GARDEN_prev.jpg'

const props = defineProps({
  hiddenItem: String, // Проп для приховання певного елемента
})

const parks = [
  { id: 'singing', name: 'SINGING_', img: SINGING_prev, link: '/parks/singing' },
  { id: 'troldomy', name: 'TROLDOMY_', img: TROLDOMY_prev, link: '/parks/troldomy' },
  { id: 'light-and-dreams', name: 'LIGHT_AND_DREAMS_', img: LIGHT_AND_DREAMS_prev, link: '/parks/light-and-dreams' },
  { id: 'giants-world', name: 'GIANTS_WORLD_', img: GIANTS_WORLD_prev, link: '/parks/giants-world' },
  { id: 'magic-garden', name: 'MAGIC_GARDEN_', img: MAGIC_GARDEN_prev, link: '/parks/magic-garden' },
]

const filteredParks = computed(() => {
  return parks.filter(park => park.id !== props.hiddenItem)
})
</script>

<template>
  <section class="parks grid grid-cols-4 gap-[1.25rem] text-center">
    <router-link
      v-for="park in filteredParks"
      :key="park.id"
      :to="park.link"
      class="card grid grid-rows-[10rem_3.5rem_21rem]"
    >
      <img :src="park.img" :alt="$t(park.name)" class="w-full" />
      <h4 class="text-pro-bold text-[2rem]">{{ $t(park.name.slice(0, -1)) }}</h4>
      <p class="text-[0.85rem] text-neutral">{{ $t(park.name) }}</p>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
.parks {
  padding-inline: 4rem;

  .card {
    img {
      height: 9rem;
      object-fit: cover;
      overflow: hidden !important;
      display: flex;
      align-self: center;
    }
  
    p {
      padding-inline: 2rem;
    }
  }

}
</style>

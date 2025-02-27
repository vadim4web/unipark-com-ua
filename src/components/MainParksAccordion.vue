<script setup>
import { ref, onMounted } from 'vue'
import { parksData } from '../assets/data'

const parks = ref(parksData)

const toggleMenu = (index) => {
  parks.value.forEach((park, i) => {
    if (i !== index) {
      park.isOpen = false
    }
  })
  parks.value[index].isOpen = !parks.value[index].isOpen
}

const preloadImages = (parkIndex) => {
  const images = parks.value[parkIndex].images
  images.forEach((image) => {
    const img = new Image()
    img.src = image
  })
}

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = entry.target.dataset.index
        preloadImages(index)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  const parkItems = document.querySelectorAll('.park-item')
  parkItems.forEach((item) => {
    observer.observe(item)
  })
})
</script>

<template>
  <ul class="parks-list relative">
    <li v-for="(park, index) in parks" :key="index" :data-index="index" class="flex flex-col park-item" :class="{ open: park.isOpen }">
      <div v-if="park.images.length" class="grid grid-cols-3" @click="toggleMenu(index)">
        <h3 class="text-pro-bold text-[3.25rem] flex flex-col justify-center">{{ $t(park.name) }}</h3>
        <p class="whitespace-pre-line leading-[120%] w-[35ch] h-[6.75rem] flex items-center">{{ $t(park.description) }}</p>
        <div class="flex items-center justify-end button-wrapper">
          <button class="flex items-center justify-center">
            <svg viewBox="0 0 25 25" stroke-width="3" stroke="var(--text-color-gray)">
              <line x1="0" y1="13" x2="25" y2="13"></line>
              <line x1="13" y1="0" x2="13" y2="25" class="vertical-line"></line>
            </svg>
          </button>
        </div>
      </div>

      <a v-else :href="`/${park.slug}`" role="button" class="grid grid-cols-3">
        <h3 class="text-pro-bold text-[3.25rem] flex flex-col justify-center">{{ $t(park.name) }}</h3>
        <p class="whitespace-pre-line leading-[120%] w-[35ch] h-[6.75rem] flex items-center">{{ $t(park.description) }}</p>
      </a>

      <div v-if="park.images.length" class="image-grid-wrapper grid grid-cols-3 gap-[1.75rem]">
        <img v-for="(image, i) in park.images" :key="i" class="image-item relative" :class="'image' + i" :style="[{ zIndex: i}]" :src="image" alt="Park Image" />
      </div>
    </li>
  </ul>
</template>

<style scoped>
.parks-list {
  list-style-type: none;
  padding-inline: 3rem;
  top: -2rem;
}

.parks-list li {
  padding: 3rem 3rem 0;
  cursor: pointer;
  overflow: hidden;
}

.parks-list li:last-of-type {
  position: relative;
  overflow: visible;
}

.parks-list li:after {
  content: '';
  bottom: -3rem;
  position: relative;
  border-bottom: 1px solid var(--text-color-gray-25);
}

.image-grid-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s ease-in-out, margin-top 1s ease-in-out, border-color 1s ease-in-out;
  margin-top: 3rem;
  border-top: 1px solid var(--text-color-gray-25);
}

.parks-list li.open .image-grid-wrapper {
  max-height: 30rem;
  border-color: transparent;
}

.image-item {
  width: 100%;
  height: 23rem;
  object-fit: cover;
  transition: transform 0.5s ease;
  border-radius: 1.25rem;
  margin-block: 2.5rem;
}

.image-item:hover {
  transform: scale(1.5);
}

.open .image-grid-wrapper:has(.image0:hover) {
  grid-template-columns: 2fr 1fr 1fr;
}
.open .image-grid-wrapper:has(.image1:hover) {
  grid-template-columns: 1fr 2fr 1fr;
}
.open .image-grid-wrapper:has(.image2:hover) {
  grid-template-columns: 1fr 1fr 2fr;
}

.open button,
.park-item:has(:hover) button {
  background: var(--accent);
}

.button-wrapper button {
  width: 2rem;
  height: 2rem;
  background: var(--text-color);
  transition: background 0.25s;
  border-radius: 0.33rem;
}

.button-wrapper button svg {
  width: 1rem;
  height: 1rem;
}

button svg line {
  transition: transform 0.5s ease;
  transform-origin: center;
  transform-box: fill-box;
}

button svg line:first-child {
  transform: none;
}

.vertical-line {
  transform: rotate(0deg);
  transition: transform 0.5s ease;
}

.open .vertical-line {
  transform: rotate(-90deg);
}
</style>

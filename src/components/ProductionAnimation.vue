<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { imgData as images } from '~/assets/data'

gsap.registerPlugin(ScrollTrigger)

const imageRefs = ref([])
const collageRef = ref(null)

const setImageRef = el => {
  if (el && !imageRefs.value.includes(el)) {
    imageRefs.value.push(el)
  }
}

const handleMouseMove = event => {
  const { clientX, clientY } = event
  const { width, height, left, top } = collageRef.value.getBoundingClientRect()
  const x = (clientX - left - width / 2) / width
  const y = (clientY - top - height / 2) / height

  gsap.to(imageRefs.value, {
    x: x * 20,
    y: y * 20,
    scale: 1.05,
    duration: 0.5,
    ease: 'power1.out',
  })
}

onMounted(async () => {
  await nextTick() // Дочекатися оновлення DOM
  requestAnimationFrame(() => {
    imageRefs.value.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.7, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 100%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  })

  collageRef.value.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  if (collageRef.value) {
    collageRef.value.removeEventListener('mousemove', handleMouseMove)
  }
})
</script>

<template>
  <div
    ref="collageRef"
    class="collage grid grid-cols-3 grid-rows-3 overflow-hidden gap-[1rem] w-[78vmin] h-[78vmin] rounded-2xl"
  >
    <div
      v-for="(img, index) in images"
      :key="index"
      :ref="setImageRef"
      class="image-wrapper w-full aspect-square overflow-hidden relative rounded-2xl"
    >
      <img
        :src="img"
        alt="Production Image"
        class="image w-full aspect-square object-cover"
      />
    </div>
  </div>
</template>

<style scoped>
.collage {
  margin-top: 5rem;
  margin-bottom: 13rem;
}
.image {
  transition: transform 0.3s ease-in-out;
}

.image-wrapper:hover .image {
  transform: scale(1.1);
}
</style>

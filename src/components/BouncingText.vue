<script setup>
import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'

// Приймаємо текст через props
const props = defineProps({
  textToAnimate: { type: String, required: true },
  wrapperTag: { type: String, default: 'h2' },
  maxLift: { type: Number, default: 32 },
  maxScale: { type: Number, default: 1.3 },
})

// Функція для нормалізації пробілів (прибираємо нерозривні)
const normalizeSpaces = text => text.replace(/\u00A0/g, ' ')

// Розбиваємо текст на масив об'єктів (щоб Vue коректно оновлював список)
const splitText = computed(() =>
  normalizeSpaces(props.textToAnimate)
    .split('')
    .map((char, index) => ({ char, index }))
)

// Масив для посилань на літери
const letterRefs = ref([])

// Максимальний підйом та масштабування
const { maxLift: MAX_LIFT, maxScale: MAX_SCALE } = props

// Оновлена функція обробки руху миші
const handleMouseMove = (event, index) => {
  letterRefs.value.forEach((letter, i) => {
    if (!letter) return

    const distance = Math.abs(i - index)
    if (distance > 1) return

    let lift = distance === 0 ? MAX_LIFT : MAX_LIFT * 0.5
    let scale = distance === 0 ? MAX_SCALE : 1.15

    gsap.to(letter, {
      y: -lift,
      scaleY: scale,
      duration: 0.2,
      ease: 'power2.out',
    })
  })
}

// Функція для скидання анімації
const handleMouseLeave = () => {
  gsap.to(letterRefs.value, {
    y: 0,
    scaleY: 1,
    duration: 0.3,
    ease: 'power2.out',
  })
}

// Додаємо події після рендерингу
onMounted(async () => {
  await nextTick() // Гарантуємо, що DOM оновлений
  letterRefs.value.forEach((letter, index) => {
    if (letter) {
      letter.addEventListener('mousemove', event =>
        handleMouseMove(event, index)
      )
      letter.addEventListener('mouseleave', handleMouseLeave)
    }
  })
})

// Видаляємо обробники при знищенні компонента
onUnmounted(() => {
  letterRefs.value.forEach(letter => {
    if (letter) {
      letter.removeEventListener('mousemove', handleMouseMove)
      letter.removeEventListener('mouseleave', handleMouseLeave)
    }
  })
})
</script>

<template>
  <component :is="wrapperTag" class="bouncing-text">
    <span
      v-for="{ char, index } in splitText"
      :key="index"
      :ref="el => (letterRefs[index] = el)"
      class="letter"
    >
      {{ char === ' ' ? '\u00A0' : char }}
    </span>
  </component>
</template>

<style scoped>
.bouncing-text {
  cursor: default;
  display: inline-block;
}

.letter {
  min-width: 0.5ch;
  display: inline-block;
  transition:
    transform 0.2s ease,
    scale 0.2s ease;
}
</style>

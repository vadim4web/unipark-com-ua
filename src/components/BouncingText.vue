<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

// Приймаємо текст і тег-обгортку через props
const props = defineProps({
  textToAnimate: { type: String, required: true },
  wrapperTag: { type: String, default: 'h2' }
})

// Функція для заміни нерозривних пробілів на звичайні
const normalizeSpaces = (text) => {
  return text.replace(/\u00A0/g, ' ') // Замінюємо нерозривні пробіли на звичайні
}

// Розбиваємо текст на масив літер
const splitText = computed(() =>
  normalizeSpaces(props.textToAnimate).split('').map((char, index) => ({ char, index }))
)

// Посилання на всі букви
const letterRefs = ref([])

// Максимальний підйом та масштабування
const MAX_LIFT = 32 // 3rem ≈ 48px
const MAX_SCALE = 1.3 // Максимальне масштабування по осі Y

// Функція для оновлення ефекту при русі миші
const handleMouseMove = (event, index) => {
  letterRefs.value.forEach((letter, i) => {
    if (!letter) return

    const distance = Math.abs(i - index)
    if (distance > 1) return // Анімуємо тільки центральну і дві сусідні

    let lift = 0
    let scale = 1

    if (distance === 0) {
      // Центральна літера піднімається на 3rem
      lift = MAX_LIFT
      scale = MAX_SCALE
    } else {
      // Вираховуємо відстань курсору до сусідньої букви
      const rect = letter.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const distanceToCursor = Math.abs(event.clientX - centerX)

      // Чим ближче курсор — тим вище підйом (від 0 до MAX_LIFT)
      lift = Math.max(0, MAX_LIFT * (1 - distanceToCursor / rect.width))

      // Чим ближче — тим більше масштабування (від 1 до MAX_SCALE)
      scale = Math.max(1, 1 + (MAX_SCALE - 1) * (1 - distanceToCursor / rect.width))
    }

    // Анімація для підйому та масштабування
    gsap.to(letter, {
      y: -lift,
      scaleY: scale,
      duration: 0.2,
      ease: 'power2.out'
    })
  })
}

// Функція для повернення до початкового стану
const handleMouseLeave = () => {
  gsap.to(letterRefs.value, {
    y: 0,
    scaleY: 1,
    duration: 0.3,
    ease: 'power2.out'
  })
}

// Додаємо обробники подій
onMounted(() => {
  letterRefs.value.forEach((letter, index) => {
    if (letter) {
      letter.addEventListener('mousemove', (event) => handleMouseMove(event, index))
      letter.addEventListener('mouseleave', handleMouseLeave)
    }
  })
})

// Прибираємо обробники подій при видаленні компонента
onUnmounted(() => {
  letterRefs.value.forEach((letter) => {
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
      v-for="({ char, index }) in splitText"
      :key="index"
      ref="letterRefs"
      class="letter"
    >
      {{ char === ' ' ? '\u00A0' : char }} <!-- Звичайний пробіл, щоб не зникали -->
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
  transition: transform 0.2s ease, scale 0.2s ease;
}
</style>

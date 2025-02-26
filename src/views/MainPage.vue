<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import MainParksSlider from '~/components/MainParksSlider.vue'
import BouncingText from '~/components/BouncingText.vue'
import MainParksAccordion from '~/components/MainParksAccordion.vue'
import { useWindowScroll } from '@vueuse/core'

const mainInfo = ref()

const { y } = useWindowScroll()

const computedPadding = computed(() => y.value <= 860 ? Math.floor(y.value / 7) : Math.floor(860 / 7))

const handleScroll = () => {}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
	<main class="home flex flex-col items-center">
		<section class="head">
			<main-parks-slider />
		</section>

		<section ref="mainInfo" class="main-info text-center flex flex-col items-center" :style="{'padding-top': `calc(3rem + ${computedPadding}px)` }">
			<h1 class="text-[1.3rem] w-[50ch] font-semibold leading-6">{{ $t('header') }}</h1>
			<h2 class="text-pro-bold w-[27ch] text-[4.25rem] leading-[120%]">{{ $t('header_') }}</h2>
			<h3 class="text-[1.3rem] w-[55ch] font-semibold leading-6">{{ $t('header__') }}</h3>
		</section>

		<section class="parks-overview flex flex-col items-center">
			<bouncing-text
				:text-to-animate="$t('ourParks')"
				class="text-pro-bold text-[13rem] tracking-wide"
			/>

			<main-parks-accordion/>
		</section>

		<section class="production-overview"></section>
	</main>
</template>

<style lang="scss" scoped>
.home * {}

.head {
  height: calc(48.5rem + var(--header-height));
}

.main-info {
	min-height: calc(51.5rem);
	padding-bottom: 8.5rem;

	h2 {
		padding-top: 4rem;
	}

	h3 {
		padding-top: 4rem;
	}
}

.parks-overview,
.production-overview {
	min-height: calc(51.5rem);
}
</style>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import MainParksSlider from '~/components/MainParksSlider.vue'
import BouncingText from '~/components/BouncingText.vue'
import MainParksAccordion from '~/components/MainParksAccordion.vue'
import ProductionAnimation from '~/components/ProductionAnimation.vue'
import TeamCollage from '~/components/TeamCollage.vue'

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

			<main-parks-accordion />
		</section>

		<section class="production-overview flex flex-col items-center text-center">
			<h2 class="text-pro-bold text-[4.5rem] w-[35ch] leading-[133%] whitespace-pre-line">
				{{ $t('main_prod_over') }}
			</h2>
			<h3 class="text-pro-bold text-[10rem] leading-[133%] relative w-[17ch]">
				<bouncing-text
					:text-to-animate="$t('our_production')"
					class="text-pro-bold text-[10rem] leading-[133%] relative w-[17ch]"
					:wrapper-tag="p"
					:max-lift="20"
					:max-scale="1.3"
				/>
				<router-link to="/production" class="flex items-center justify-center absolute details text-[1.5rem] rounded-full w-[10rem] h-[10rem] text-regular tracking-wider">
					{{ $t('details') }}
				</router-link>
			</h3>

			<production-animation />
		</section>

		<section class="team flex flex-col items-center text-center">
			<h3 class="text-pro-bold text-[5rem] w-[30ch]">
				{{ $t('our_team_')}}
			</h3>


			<team-collage />
		</section>
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

.parks-overview {
	min-height: calc(51.5rem);
}

.production-overview {
	padding-top: 12rem;
	margin-top: 11.5rem;
	min-height: 100vh;
	background: var(--gradient-bg-45);
	width: calc(100vw - 0.5rem);
	color: var(--bg-color);

	h3 {
		padding-top: 5.5rem;

		.details {
			top: 1.5rem;
			right: 4.5rem;
			color: var(--bg-color);
			background: var(--accent);
			transform: rotate(-15deg);
			transition: background 0.25s;

			&:hover {
				background: var(--text-color);
			}
		}
	}
}

.team {
	min-height: 100vh;
	padding-top: 3.5rem;

	h2 {
	}
}
</style>

<script setup>
import DISCOUNT from '~/assets/icons/DISCOUNT.png'
import EXTRA from '~/assets/icons/EXTRA.png'
import BONUS from '~/assets/icons/BONUS.png'
import INFO from '~/assets/icons/INFO.png'
import telegram from '~/assets/icons/telegram.svg'
</script>

<template>
	<main class="discount">
		<section class="head w-full h-[42.5rem] grid grid-rows-2 justify-items-center text-center">
			<h2 class="self-end text-[12.5rem] uppercase text-pro-bold leading-[69%] relative top-[3.5rem]">
				{{ $t('discount').split(' ')[0] }}<br>
				{{ $t('discount').split(' ')[1] }}
			</h2>
			<h3 class="self-start text-[2rem] uppercase relative top-[9rem] w-[36ch] leading-none">{{ $t('discount_h3') }}</h3>
		</section>
		<section class="main-info flex flex-col items-center">
			<h3 class="text-pro-bold text-[6.25rem] w-[20ch] text-center leading-none">
				{{ $t('discount_mid_h3') }}
			</h3>
			<div class="cards grid grid-cols-4 h-[37.5rem] gap-[1.5rem]">
				<div class="card text-center grid grid-rows-[7rem_5rem_1fr] justify-items-center outline outline-(--accent) gap-[1.25rem]">
					<img :src="DISCOUNT" alt="DISCOUNT">
					<h4 class="text-pro-bold text-[2rem] leading-[125%]">{{ $t('discount_benefit_1') }}</h4>
					<p class="text-[1.25rem]">{{ $t('discount_benefit_1_') }}</p>
				</div>
				<div class="card text-center grid grid-rows-[7rem_5rem_1fr] justify-items-center outline outline-(--accent) gap-[1.25rem]">
					<img :src="EXTRA" alt="EXTRA">
					<h4 class="text-pro-bold text-[2rem] leading-[125%]">{{ $t('discount_benefit_2') }}</h4>
					<p class="text-[1.25rem]">{{ $t('discount_benefit_2_') }}</p>
				</div>
				<div class="card text-center grid grid-rows-[7rem_5rem_1fr] justify-items-center outline outline-(--accent) gap-[1.25rem]">
					<img :src="BONUS" alt="BONUS">
					<h4 class="text-pro-bold text-[2rem] leading-[125%]">{{ $t('discount_benefit_3') }}</h4>
					<p class="text-[1.25rem]">{{ $t('discount_benefit_3_') }}</p>
				</div>
				<div class="card text-center grid grid-rows-[7rem_5rem_1fr] justify-items-center outline outline-(--accent) gap-[1.25rem]">
					<img :src="INFO" alt="INFO">
					<h4 class="text-pro-bold text-[2rem] leading-[125%]">{{ $t('discount_benefit_4') }}</h4>
					<p class="text-[1.25rem]">{{ $t('discount_benefit_4_') }}</p>
				</div>
			</div>
		</section>
		<section class="call-to-action text-center flex flex-col items-center h-[30rem] gap-[3rem]">
			<h3 class="text-pro-bold text-[6.25rem] leading-none">{{ $t('discount_CTA') }}</h3>
			<p class="text-[1.25rem] leading-none">{{ $t('discount_CTA_') }}</p>
			<a href="https://t.me/universal_park_bot" target="_blank" rel="noopener noreferrer" class="register-via-telegram flex items-center justify-between text-pro-bold rounded-full h-[4.5rem] text-[2rem] w-[21.5ch]">
				<img :src="telegram" alt="telegram" class="w-[3.5rem] h-[3.5rem]">
				{{ $t('discount_CTA_1') }}
			</a>
		</section>
	</main>
</template>

<style lang="scss" scoped>
.head {
	background: var(--gradient-bg);
	color: #fff;
}

.main-info,
.main-info .cards {
	padding-top: 10rem;
}

.main-info {
	padding-inline: clamp(5.5vmin, 4rem, 3vmax);
}

.card {
	padding-block: 2.5rem;
	padding-inline: 2rem;
}

.card img {
	width: 6rem;
	height: 6rem;
}

.call-to-action {
	padding-top: 7rem;
}

.register-via-telegram {
	border: 1px solid var(--text-color);
	padding: 0.5rem 2rem 0.5rem 0.5rem;
	transition: border-color 0.25s, color 0.25s;
}

.register-via-telegram:hover,
.register-via-telegram:active {
	border-color: var(--link-color);
}
</style>

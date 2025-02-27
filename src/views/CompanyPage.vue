<script setup>
import { defineAsyncComponent } from 'vue'

const OurTeamTiles = defineAsyncComponent(
	() => import('~/components/OurTeamTiles.vue')
)
const RequestEmailForm = defineAsyncComponent(
	() => import('~/components/RequestEmailForm.vue')
)
</script>

<template>
	<main class="company">
		<section class="head flex flex-col items-center justify-center">
			<h2 class="text-center text-[5rem] text-pro-bold">
				{{ $t('about') }}
			</h2>
		</section>

		<section class="top grid grid-cols-[2fr_5fr]">
			<div class="left flex flex-col gap-[1.25rem]">
				<div class="term flex flex-col gap-[1rem]">
					<div class="term-inner">
						<h3 class="uppercase text-[2.5rem] text-pro-bold  leading-none">
							{{ $t('invest_top_left') }}
						</h3>

						<p>
							{{ $t('invest_top_left_') }}
						</p>
					</div>

					<div class="social-media flex flex-row-reverse justify-end items-center gap-[1rem]">
						<a
							href="https://www.facebook.com/uniparkua"
							target="_blank"
							rel="noopener noreferrer"
							>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="100"
								height="100"
								viewBox="0 0 30 30"
							>
								<path
									d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
								></path>
							</svg>
						</a>

						<a
						href="https://www.instagram.com/uniparkua/"
							target="_blank"
							rel="noopener noreferrer"
						>
						<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="100"
								height="100"
								viewBox="0 0 30 30"
							>
								<path
									d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
									></path>
								</svg>
							</a>
						</div>
				</div>

				<div class="term">
					<h3 class="uppercase text-[2.5rem] text-pro-bold">
						{{ $t('invest_top_left_1') }}
					</h3>

					<p>
						{{ $t('address') }}
					</p>
				</div>
			</div>

			<div class="right flex flex-col gap-[2rem]">
				<p class="text-[1.25rem]">
					{{ $t('welcome') }}
				</p>
				<h3 class="text-[2.5rem] text-pro-bold leading-none">
					{{ $t('our_ideology') }}
				</h3>
				<p class="text-[1.25rem]">
					{{ $t('our_mission') }}
				</p>
				<h3 class="text-[2.5rem] text-pro-bold leading-none">
					{{ $t('our_direction') }}
				</h3>
				<p class="text-[1.25rem]">
					{{ $t('our_direction_') }}
				</p>
				<h3 class="text-[2.5rem] text-pro-bold leading-none">
					{{ $t('achievement') }}
				</h3>
				<p class="text-[1.25rem]">
					{{ $t('achievement_') }}
				</p>

				<div class="founder grid grid-cols-2 gap-[2rem]">
					<div class="left flex flex-col items-center justify-center">
						<div class="info flex flex-col items-center justify-center">
							<strong class="author text-[3rem] text-pro-bold leading-none">
								{{ $t('Team0') }}
							</strong>
							<br>
							<span class="text-[1.25rem] text-center">
								{{ $t('founder') }}
								<br>
								Universal Park
							</span>
						</div>
					</div>
					<div class="right flex flex-col justify-center gap-[0.5rem]">
						<p class="quote text-[1.25rem] relative">
							{{ $t('quote') }}
						</p>
						<p class="justify-self-end text-right">
							<strong class="author text-[2.5rem] text-pro-bold leading-none">
								{{ $t('Team0') }}
							</strong>
							<br>
							<span class="text-[1.25rem]">
								{{ $t('founder') }}
								<br>
								Universal Park
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="team">
			<h3 class="text-pro-bold text-[8.5rem]">
				{{ $t('our_team') }}
			</h3>

			<our-team-tiles />
		</section>

		<section class="last">
			<request-email-form mode="info" />
		</section>
	</main>
</template>

<style lang="scss" scoped>
.head {
	background: var(--gradient-bg-45);
	height: 42.5rem;

	h2 {
		color: var(--bg-color);
	}
}

.top {
	padding-inline: clamp(10vmin, 6rem, 6vmax);
	padding-top: 4.5rem;
	min-height: 50vh;

	.social-media svg {
    fill: currentColor;
    width: 2.5rem;
    height: 2.5rem;
    margin: -10%;
  }
}

.founder {
	.left {
		background: url('../assets/team/COMPANY_CHIEF.jpeg');
		background-size: cover;
		aspect-ratio: 0.666;
		background-position: center;
		border: 1px solid var(--link-color);

		&:hover .info {
			opacity: 1;
		}

		.info {
			color: #fff;
			background: var(--link-color);
			width: 100%;
			height: 100%;
			opacity: 0;
			transition: opacity 0.25s;
		}
	}

	.quote {
		padding-top: 2.25rem;

		&::before {
			content: '“';
			position: absolute;
			top: -3rem;
			left: -0.5rem;
			font-size: 7rem;
			font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		}
	}

	p strong {
		color: var(--link-color);
	}
}

.team {
	padding-top: 8.5rem;

	h3 {
		text-indent: 13.5vw;
		padding-bottom: 3rem;
	}
}

.last {
	padding-top: 8rem;
	padding-bottom: 10rem;
}
</style>
